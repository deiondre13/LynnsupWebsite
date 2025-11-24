# OneDrive + Next.js Fix

## Problem
Next.js development server fails with `EINVAL: invalid argument, readlink` error when project is in OneDrive folder.

## Root Cause
OneDrive syncs the `.next` build folder, causing file system conflicts with Next.js hot reloading.

## Solutions

### Option 1: Exclude .next from OneDrive (Recommended)
1. Right-click the `.next` folder
2. Select "Free up space" or "Always keep on this device" → "Free up space"
3. This tells OneDrive not to sync this folder

### Option 2: Clean Build Before Dev
```bash
# Clean and restart
npm run clean:dev
```

### Option 3: Move Project Outside OneDrive
Move the project to a local folder like:
- `C:\Projects\LynnsupWebsite`
- `C:\Dev\LynnsupWebsite`

## Quick Fix (Always Works)
```bash
# Remove .next folder and rebuild
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# For development
npm run dev

# For production build
npm run build
```

**This fix is needed whenever you see the EINVAL error.**

## Permanent Fix
Add this to your OneDrive settings to exclude build folders:
1. Open OneDrive settings
2. Go to "Backup" → "Manage backup"
3. Exclude folders: `.next`, `node_modules`, `out`

## Updated Scripts
The `export` script has been updated to use the modern approach:
```json
"export": "next build"  // Uses output: "export" from next.config.js
```

## If Error Persists
1. Close all terminals
2. Delete `.next` folder
3. Restart VS Code
4. Run `npm run dev`
