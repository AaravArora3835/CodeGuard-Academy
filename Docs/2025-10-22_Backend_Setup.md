

````markdown
# 2025-10-22 — Backend Setup Log (Aarav)

**Phase:** Sprint 1 — Foundational Setup  
**Project:** CodeGuard Academy  
**Role:** Aarav — Backend / Project Manager  
**Goal:** Set up Python and Flask backend environment and confirm a working local server.

---

## Steps Completed

### 1. Project Folder
```bash
cd Documents
mkdir CodeGuard-Academy
cd CodeGuard-Academy
````

Folder created successfully in `C:\Users\aarav\Documents`.

---

### 2. Virtual Environment

```bash
python -m venv venv
```

Virtual environment created inside the project directory.

---

### 3. PowerShell Policy Fix

Encountered `UnauthorizedAccess` error when activating the virtual environment.
Fixed by running:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Pressed **Y** to confirm. After that:

```bash
.\venv\Scripts\Activate.ps1
```

The `(venv)` tag appeared in the PowerShell prompt.

---

### 4. Install Flask

```bash
pip install flask
```

Flask 3.1.2 installed successfully.

Screenshot: `2025-10-22_Flask_Installed.png`

---

### 5. Create and Run app.py

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, CodeGuard Academy!'

if __name__ == '__main__':
    app.run(debug=True)
```

Run the application:

```bash
python app.py
```

Flask server started at **[http://127.0.0.1:5000](http://127.0.0.1:5000)**

Screenshot: `2025-10-22_Flask_Server_Running.png`

---

## Screenshot Proof

| Filename                              | Description                                                 |
| ------------------------------------- | ----------------------------------------------------------- |
| `2025-10-22_Flask_Installed.png`      | Virtual environment active and Flask installed successfully |
| `2025-10-22_Flask_Server_Running.png` | Flask app running locally with debug mode enabled           |

---

## Reflection

**Biggest Win:** Fixed the PowerShell execution policy and successfully ran Flask for the first time.
**Hardest Moment:** Dealing with the `UnauthorizedAccess` error during activation.
**Skill Learned:** Creating a Python virtual environment and running a local Flask web server.
**Next Goal:** Build and test a `/ping` API route for frontend connection on October 23.

---

**Status:** Environment ready
**Next Action:** Connect React frontend to Flask backend tomorrow.

```
