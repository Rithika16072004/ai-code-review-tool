AI Code Review Tool

A web-based tool that analyzes code for potential bugs, code smells, and improvements. Built with React for the frontend and Flask for the backend. This project is designed for learning purposes and can be extended with AI models like OpenAI GPT or local models for real-time code analysis.

FEATURES

- Upload or paste code snippets for analysis
- Returns potential issues and suggestions for improvement
- Responsive and interactive UI
- Ready to deploy as a live web app

TECH STACK

- Frontend: React, HTML, CSS
- Backend: Flask, Python
- AI/Analysis: Mock analysis (replaceable with OpenAI or Hugging Face models)

PROJECT STRUCTURE

ai-code-review-tool/
├── backend/
│   ├── app.py            # Flask backend
│   ├── ai_analysis.py    # Code analysis logic (mock or AI)
│   └── requirements.txt  # Python dependencies
├── react-frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── Upload.js
│   │   └── App.css
│   ├── public/
│   │   └── index.html
│   └── package.json
└── README.md

GETTING STARTED

Backend Setup

1. Navigate to the backend folder: cd backend
2. Create a virtual environment: python -m venv venv
3. Activate the virtual environment:
   - Windows (PowerShell): .\venv\Scripts\Activate.ps1
   - macOS/Linux: source venv/bin/activate
4. Install dependencies: pip install -r requirements.txt
5. Run the Flask server: python app.py

The backend will run at http://localhost:5000

Frontend Setup

1. Navigate to the frontend folder: cd frontend
2. Install dependencies: npm install
3. Start the React development server: npm start

The frontend will run at http://localhost:3000 and communicate with the Flask backend.

HOW TO USE

1. Open http://localhost:3000 in your browser.
2. Paste or upload a code snippet.
3. Click Analyze to see potential bugs and improvements.
4. If using mock analysis, results will simulate code review. You can integrate real AI later.



NOTES

- If using OpenAI API, ensure you set your API key in the backend environment variables:
  - macOS/Linux: export OPENAI_API_KEY="your_api_key_here"
  - Windows: setx OPENAI_API_KEY "your_api_key_here"
- For demo purposes, the backend can use a mock analysis function without any API keys.



SCREENSHOTS / DEMO


![alt text](<Screenshot 2025-10-26 114036-1.png>)