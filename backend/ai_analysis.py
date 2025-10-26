import os
import requests

def analyze_code(file_content):
    API_URL = "https://api-inference.huggingface.co/models/facebook/codebert-base"
    headers = {"Authorization": f"Bearer {os.getenv('HUGGINGFACE_TOKEN')}"}
    payload = {"inputs": f"Analyze this code for bugs or improvements:\n{file_content}"}

    response = requests.post(API_URL, headers=headers, json=payload)
    
    if response.status_code == 200:
        return response.json()
    else:
        return {"error": f"Failed to connect: {response.status_code} - {response.text}"}
