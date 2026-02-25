import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import { Resend } from 'resend'

/**
 * IMPORTANT: Environment Variable Setup
 * 
 * Before deploying, you MUST add your Resend API key in:
 * Netlify Dashboard → Site Settings → Environment Variables
 * 
 * Variable name: RESEND_API_KEY
 * Value: Your Resend API key (starts with "re_")
 * 
 * Get your API key from: https://resend.com/api-keys
 */

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    // Parse request body
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Request body is required' }),
      }
    }

    const formData: ContactFormData = JSON.parse(event.body)

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name, email, and message are required' }),
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' }),
      }
    }

    // Initialize Resend with API key from environment variable
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured')
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Email service not configured' }),
      }
    }

    const resend = new Resend(resendApiKey)

    // Generate timestamp
    const timestamp = new Date().toLocaleString('en-ZA', {
      timeZone: 'Africa/Johannesburg',
      dateStyle: 'full',
      timeStyle: 'long',
    })

    // Generate ticket number
    const now = new Date()
    const yyyy = now.getFullYear()
    const mm = String(now.getMonth() + 1).padStart(2, '0')
    const dd = String(now.getDate()).padStart(2, '0')
    const randomId = Math.random().toString(36).substring(2, 10).toUpperCase()
    const ticketNumber = `LYN-${yyyy}${mm}${dd}-${randomId}`

    // Email 1: Send enquiry notification to Lynnsup
    const enquiryEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Enquiry</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; background: linear-gradient(135deg, #1a365d 0%, #2d5a8f 100%); border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; text-align: center;">
                New Website Enquiry
              </h1>
              <p style="margin: 10px 0 0; color: #D4AF37; font-size: 14px; text-align: center; font-weight: 600;">
                Ticket: ${ticketNumber}
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding-bottom: 30px;">
                    <h2 style="margin: 0 0 20px; color: #1a365d; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
                      Contact Information
                    </h2>
                    
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                          <strong style="color: #1a365d; font-size: 14px;">Name:</strong>
                          <p style="margin: 5px 0 0; color: #333333; font-size: 16px;">${formData.name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                          <strong style="color: #1a365d; font-size: 14px;">Email:</strong>
                          <p style="margin: 5px 0 0; color: #333333; font-size: 16px;">
                            <a href="mailto:${formData.email}" style="color: #2d5a8f; text-decoration: none;">${formData.email}</a>
                          </p>
                        </td>
                      </tr>
                      ${formData.phone ? `
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                          <strong style="color: #1a365d; font-size: 14px;">Phone:</strong>
                          <p style="margin: 5px 0 0; color: #333333; font-size: 16px;">
                            <a href="tel:${formData.phone}" style="color: #2d5a8f; text-decoration: none;">${formData.phone}</a>
                          </p>
                        </td>
                      </tr>
                      ` : ''}
                      ${formData.subject ? `
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                          <strong style="color: #1a365d; font-size: 14px;">Subject:</strong>
                          <p style="margin: 5px 0 0; color: #333333; font-size: 16px;">${formData.subject}</p>
                        </td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 12px 0;">
                          <strong style="color: #1a365d; font-size: 14px;">Received:</strong>
                          <p style="margin: 5px 0 0; color: #666666; font-size: 14px;">${timestamp}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 20px;">
                    <h2 style="margin: 0 0 15px; color: #1a365d; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
                      Message
                    </h2>
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #D4AF37;">
                      <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0; color: #666666; font-size: 12px; text-align: center;">
                This enquiry was submitted via the Lynnsup website contact form
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `

    await resend.emails.send({
      // NOTE: Replace with your verified domain email once set up in Resend
      // Example: from: 'Lynnsup <noreply@lynnsup.co.za>'
      from: 'Lynnsup Website <onboarding@resend.dev>',
      to: 'lynnsupcompany@gmail.com',
      subject: 'New Website Enquiry – Lynnsup',
      html: enquiryEmailHtml,
    })

    // Email 2: Send confirmation to client
    const confirmationEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enquiry Confirmation</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 30px; background: linear-gradient(135deg, #1a365d 0%, #2d5a8f 100%); border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700;">
                Thank You!
              </h1>
              <p style="margin: 15px 0 0; color: #D4AF37; font-size: 16px; font-weight: 600;">
                We've Received Your Enquiry
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Dear <strong>${formData.name}</strong>,
              </p>
              
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Thank you for contacting <strong>Lynnsup (Pty) Ltd</strong>. We have successfully received your enquiry and our team will review it shortly.
              </p>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 30px 0; border-left: 4px solid #D4AF37;">
                <p style="margin: 0 0 10px; color: #1a365d; font-size: 14px; font-weight: 600;">
                  Your Reference Number:
                </p>
                <p style="margin: 0; color: #333333; font-size: 20px; font-weight: 700; font-family: monospace;">
                  ${ticketNumber}
                </p>
              </div>
              
              <h2 style="margin: 30px 0 15px; color: #1a365d; font-size: 18px; font-weight: 600;">
                What Happens Next?
              </h2>
              
              <ul style="margin: 0 0 30px; padding-left: 20px; color: #333333; font-size: 15px; line-height: 1.8;">
                <li style="margin-bottom: 10px;">Our team will review your enquiry within <strong>24-48 hours</strong></li>
                <li style="margin-bottom: 10px;">You will receive a response via email at <strong>${formData.email}</strong></li>
                <li style="margin-bottom: 10px;">For urgent matters, please call us directly</li>
              </ul>
              
              <div style="background-color: #1a365d; padding: 25px; border-radius: 6px; margin: 30px 0;">
                <h3 style="margin: 0 0 15px; color: #D4AF37; font-size: 16px; font-weight: 600;">
                  Contact Information
                </h3>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #ffffff; font-size: 14px;">
                      <strong>Email:</strong> info@lynnsup.co.za
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #ffffff; font-size: 14px;">
                      <strong>Phone:</strong> +27 72 294 8797
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #ffffff; font-size: 14px;">
                      <strong>Website:</strong> www.lynnsup.co.za
                    </td>
                  </tr>
                </table>
              </div>
              
              <p style="margin: 30px 0 0; color: #333333; font-size: 15px; line-height: 1.6;">
                We look forward to assisting you with your requirements.
              </p>
              
              <p style="margin: 20px 0 0; color: #333333; font-size: 15px; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #1a365d;">The Lynnsup Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0 0 10px; color: #1a365d; font-size: 16px; font-weight: 600; text-align: center;">
                Lynnsup (Pty) Ltd
              </p>
              <p style="margin: 0 0 5px; color: #666666; font-size: 13px; text-align: center;">
                Registration Number: 2019/463569/07
              </p>
              <p style="margin: 0; color: #999999; font-size: 12px; text-align: center;">
                Comprehensive multi-service solutions with excellence, compliance, and integrity
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `

    await resend.emails.send({
      // NOTE: Replace with your verified domain email once set up in Resend
      // Example: from: 'Lynnsup <noreply@lynnsup.co.za>'
      from: 'Lynnsup Website <onboarding@resend.dev>',
      to: formData.email,
      subject: "We've Received Your Enquiry – Lynnsup",
      html: confirmationEmailHtml,
    })

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Emails sent successfully',
        ticketNumber,
      }),
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: false,
        error: 'Failed to send email. Please try again or contact us directly.',
      }),
    }
  }
}

export { handler }
