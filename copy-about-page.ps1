# Copy the redesigned About page from OneDrive location to new project

Write-Host "Copying redesigned About page..." -ForegroundColor Cyan

$source = "C:\Users\GOOFLIN\OneDrive - CTU Career\Documents\Business\LynnsupWebsite\LynnsupWebsite\src\app\about\page.tsx"
$destination = "C:\Projects\LynnsupWebsite\src\app\about\page.tsx"

if (Test-Path $source) {
    Copy-Item -Path $source -Destination $destination -Force
    Write-Host "✓ About page copied successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "The redesigned About page is now in your project." -ForegroundColor Green
    Write-Host "Refresh your browser to see the changes: http://localhost:3000/about" -ForegroundColor Yellow
} else {
    Write-Host "✗ Source file not found at: $source" -ForegroundColor Red
}

Write-Host ""
Write-Host "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
