Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = "C:\Users\Administrator\AppData\Roaming\TRAE SOLO CN\ModularData\ai-agent\work-mode-projects\6a38d1754435d8af9abbd993\hongguo-daily"
WshShell.Run "pythonw -m http.server 8888", 0, False
WScript.Sleep 1000
WshShell.Run "http://localhost:8888/index.html", 1, False
Set WshShell = Nothing