from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Server is running!"

@app.route("/ping")
def ping():
    return jsonify({"message": "pong"})

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json(silent=True) or {}
    username = data.get("username", "")
    password = data.get("password", "")
    if username and password:
        return jsonify({"message": "login successful", "user": username}), 200
    return jsonify({"error": "missing fields"}), 400

@app.route("/execute", methods=["POST"])
def execute():
    data = request.get_json(silent=True) or {}
    code = data.get("code", "")
    return jsonify({"output": f"You entered: {code}"})

@app.route("/hint")
def hint():
    return jsonify({"message": "Try checking your syntax!"})

if __name__ == "__main__":
    app.run(debug=True)
