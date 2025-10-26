# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from ai_analysis import analyze_code

app = Flask(__name__)
CORS(app)  # Allow React frontend to call backend

@app.route("/")
def home():
    return "✅ Flask backend is running successfully!"

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    code = data.get("file_content", "")
    if not code:
        return jsonify({"result": "No code provided!"})

    analysis = analyze_code(code)
    return jsonify({"result": analysis})

if __name__ == "__main__":
    app.run(debug=True)
