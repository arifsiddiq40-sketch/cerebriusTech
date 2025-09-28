# Cerebrius Vision Forge - Backup Script
# Run this script to create a complete backup

$timestamp = Get-Date -Format "yyyy-MM-dd-HHmm"
$backupDir = "C:\Backups\cerebrius-vision-forge-$timestamp"
$projectDir = "C:\Users\arifs\OneDrive\Documents\GitHub\cerebrius-vision-forge"

Write-Host "Creating backup for Cerebrius Vision Forge..." -ForegroundColor Green
Write-Host "Timestamp: $timestamp" -ForegroundColor Yellow

# Create backup directory
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
Write-Host "Backup directory created: $backupDir" -ForegroundColor Green

# Copy project files (excluding node_modules and dist)
Write-Host "Copying project files..." -ForegroundColor Yellow
robocopy $projectDir $backupDir /E /XD node_modules dist .git /XF *.log /NFL /NDL /NJH /NJS

# Create git archive
Write-Host "Creating git archive..." -ForegroundColor Yellow
Set-Location $projectDir
git archive --format=zip --output="$backupDir\cerebrius-vision-forge-source.zip" HEAD

# Create restore instructions
$restoreInstructions = @"
# Cerebrius Vision Forge - Restore Instructions
Backup created: $timestamp

## To restore:
1. Extract cerebrius-vision-forge-source.zip to desired location
2. Open terminal in the extracted folder
3. Run: npm install
4. Run: npm run dev

## Project Details:
- React + TypeScript + Vite
- shadcn/ui components
- Tailwind CSS
- React Router DOM
- React Query

## Available Scripts:
- npm run dev (start development server)
- npm run build (build for production)
- npm run preview (preview production build)
- npm run lint (run ESLint)

## Git Restore (if git history available):
git checkout restore-point-$timestamp
"@

$restoreInstructions | Out-File -FilePath "$backupDir\RESTORE_INSTRUCTIONS.txt" -Encoding UTF8

Write-Host "Backup completed successfully!" -ForegroundColor Green
Write-Host "Backup location: $backupDir" -ForegroundColor Cyan
Write-Host "Files included:" -ForegroundColor Yellow
Write-Host "  - Complete source code" -ForegroundColor White
Write-Host "  - Configuration files" -ForegroundColor White
Write-Host "  - Dependencies list (package.json)" -ForegroundColor White
Write-Host "  - Git archive (cerebrius-vision-forge-source.zip)" -ForegroundColor White
Write-Host "  - Restore instructions" -ForegroundColor White

# Show backup directory contents
Write-Host "`nBackup contents:" -ForegroundColor Yellow
Get-ChildItem $backupDir | Format-Table Name, Length, LastWriteTime -AutoSize
