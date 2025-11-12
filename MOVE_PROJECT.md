# Move Project Outside OneDrive - Permanent Fix

## ⚠️ The Problem

OneDrive continuously syncs the `.next` folder, causing persistent `EINVAL` errors with Next.js. This is a **known incompatibility** between OneDrive real-time sync and Next.js build system.

**You will keep getting these errors as long as the project is in OneDrive.**

---

## ✅ Permanent Solution: Move Project

### Step 1: Create New Location
```powershell
# Create a local projects folder
New-Item -ItemType Directory -Path "C:\Projects" -Force
```

### Step 2: Copy Project
```powershell
# Copy entire project to new location
Copy-Item -Path "C:\Users\GOOFLIN\OneDrive - CTU Career\Documents\Business\LynnsupWebsite\LynnsupWebsite" -Destination "C:\Projects\LynnsupWebsite" -Recurse
```

### Step 3: Clean Build Folders in New Location
```powershell
# Navigate to new location
cd C:\Projects\LynnsupWebsite

# Remove OneDrive-corrupted build folders
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
```

### Step 4: Reinstall Dependencies
```powershell
# Install fresh dependencies
npm install
```

### Step 5: Test
```powershell
# Should work without errors now
npm run dev
```

---

## 🎯 Quick Copy-Paste Commands

**Run these in PowerShell:**

```powershell
# 1. Create projects folder
New-Item -ItemType Directory -Path "C:\Projects" -Force

# 2. Copy project
Copy-Item -Path "C:\Users\GOOFLIN\OneDrive - CTU Career\Documents\Business\LynnsupWebsite\LynnsupWebsite" -Destination "C:\Projects\LynnsupWebsite" -Recurse

# 3. Navigate to new location
cd C:\Projects\LynnsupWebsite

# 4. Clean build folders
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue

# 5. Install dependencies
npm install

# 6. Start dev server
npm run dev
```

---

## 🔄 Alternative: Temporary Fix (Not Recommended)

If you must keep it in OneDrive, you'll need to clean before every build:

```powershell
# Before every dev or build
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run dev
```

**This is tedious and not sustainable.**

---

## 📂 Recommended Folder Structure

After moving:

```
C:\
├── Projects\
│   └── LynnsupWebsite\          ← Your project here (NO OneDrive)
│       ├── src\
│       ├── public\
│       ├── node_modules\
│       ├── .next\               ← Will work without errors
│       └── package.json
│
└── Users\
    └── GOOFLIN\
        └── OneDrive - CTU Career\
            └── Documents\
                └── Business\
                    └── LynnsupWebsite\
                        └── LynnsupWebsite\  ← Old location (can delete after move)
```

---

## ✅ Benefits of Moving

1. **No more EINVAL errors** - Ever
2. **Faster builds** - No OneDrive sync overhead
3. **Reliable development** - No random failures
4. **Better performance** - Local disk is faster
5. **No sync conflicts** - OneDrive won't interfere

---

## 🔒 What About Backups?

### Option 1: Git (Recommended)
```powershell
# Initialize git in new location
cd C:\Projects\LynnsupWebsite
git init
git add .
git commit -m "Initial commit"

# Push to GitHub/GitLab
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### Option 2: Manual Backups
- Zip the `C:\Projects\LynnsupWebsite` folder periodically
- Store zips in OneDrive or external drive
- Don't sync the live project folder

---

## 🚫 Why OneDrive Doesn't Work

**Technical Explanation:**

1. Next.js creates symlinks and special files in `.next`
2. OneDrive tries to sync these in real-time
3. OneDrive can't handle symlinks properly on Windows
4. This causes `readlink` errors
5. The errors are random because of sync timing

**This is not a bug in your code - it's an incompatibility between OneDrive and Next.js.**

---

## 📝 After Moving

### Update VS Code Workspace
1. Open VS Code
2. File → Open Folder
3. Select `C:\Projects\LynnsupWebsite`
4. Save workspace

### Update Git Remote (if using)
```powershell
cd C:\Projects\LynnsupWebsite
git remote -v  # Check current remote
# Update if needed
```

---

## ⚡ Quick Test After Move

```powershell
cd C:\Projects\LynnsupWebsite
npm run dev
```

**Should start without errors!** ✅

---

## 🎯 Summary

**The ONLY permanent fix is to move the project outside OneDrive.**

1. Copy project to `C:\Projects\LynnsupWebsite`
2. Clean build folders
3. Reinstall dependencies
4. Work from new location
5. Use Git for version control (not OneDrive)

**This will solve the problem permanently.** 🎉

---

**Need help with the move? Just run the copy-paste commands above!**
