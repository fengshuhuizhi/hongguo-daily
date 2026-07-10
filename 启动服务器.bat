@echo off
chcp 65001 >nul
echo Starting server...
cd /d "C:\Users\Administrator\AppData\Roaming\TRAE SOLO CN\ModularData\ai-agent\work-mode-projects\6a38d1754435d8af9abbd993\hongguo-daily"
start "Server" python -m http.server 8888
timeout /t 3 >nul
start http://localhost:8888/index.html
echo Server running. Close this window anytime.
pause
