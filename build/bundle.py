#!/usr/bin/env python3
"""Inline style.css and all scripts into one self-contained file: dist/arizona-water.html"""
import re, os
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html = open(f"{root}/index.html").read()
html = html.replace('<link rel="stylesheet" href="style.css">', "<style>\n" + open(f"{root}/style.css").read() + "</style>")
html = re.sub(r'<script src="([^"]+)"></script>', lambda m: "<script>\n" + open(f"{root}/{m.group(1)}").read().replace("</script", "<\\/script") + "</script>", html)
os.makedirs(f"{root}/dist", exist_ok=True)
open(f"{root}/dist/arizona-water.html", "w").write(html)
print("wrote dist/arizona-water.html", len(html) // 1024, "KB")
