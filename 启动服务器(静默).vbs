@echo off
chcp 65001 >nul
echo 正在启动红果日报本地服务器...
cd /d "C:\Users\Administrator\AppData\Roaming\TRAE SOLO CN\ModularData\ai-agent\work-mode-projects\6a38d1754435d8af9abbd993\hongguo-daily"
pythonw -m http.server 8888
