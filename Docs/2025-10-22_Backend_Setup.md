# 2025-10-22 — Backend Setup Log (Aarav)

**Phase:** Sprint 1 – Foundational Setup
**Project:** CodeGuard Academy
**Role:** Aarav – Backend / Project Manager
**Goal:** Set up Python + Flask backend and confirm local server works.

---

## Steps Completed

Set up the project folder, created a Python virtual environment, fixed PowerShell execution policy, installed Flask, created `app.py`, and verified the server runs locally.

**app.py**

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, CodeGuard Academy!'

if __name__ == '__main__':
    app.run(debug=True)
```

Run the server:

```bash
python app.py
```

Server running at: **[http://127.0.0.1:5000](http://127.0.0.1:5000)**

---

## Proof

* `2025-10-22_Flask_Installed.png` — Flask installed with venv active
* `2025-10-22_Flask_Server_Running.png` — Local server running

---

## Reflection

* **Win:** Flask running locally after PowerShell policy fix
* **Lesson:** Virtual environments and script execution policy
* **Next:** Add `/ping` endpoint for frontend connection

---

**Status:** Environment ready
