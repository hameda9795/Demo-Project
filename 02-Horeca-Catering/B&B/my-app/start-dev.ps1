# PowerShell script om Next.js dev server te starten
# Dit lost het probleem op met de & in het pad

$ErrorActionPreference = 'Stop'

# Ga naar de project directory
$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectDir

# Start Next.js dev server via npx
Write-Host "🌸 Het Kleine Paradijs - Development Server Starten..." -ForegroundColor Magenta
Write-Host ""

npx next dev --port 3456
