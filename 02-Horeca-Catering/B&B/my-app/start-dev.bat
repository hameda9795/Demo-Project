@echo off
chcp 65001 >nul

REM Start Next.js dev server via npx
REM Dit lost het probleem op met de & in het pad

echo 🌸 Het Kleine Paradijs - Development Server Starten...
echo.

npx next dev --port 3456

pause
