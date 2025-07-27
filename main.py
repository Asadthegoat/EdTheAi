from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from groq import Groq
from dotenv import load_dotenv
import json
# Optional: Load API key from environment
# os.environ["GROQ_API_KEY"] = "your-key-here"

# Load variables from .env
load_dotenv()

# Retrieve the API key
api_key = os.getenv("GROQ_API_KEY")

client = Groq(api_key=api_key)

# Load menu and info data
with open("fasteddies.json", "r", encoding="utf-8") as f:
    menu_data = json.load(f)

with open("fastinfo.json", "r", encoding="utf-8") as f:
    info_data = json.load(f)


system_prompt = f"""
You are Ed, a helpful AI assistant for a fast food restaurant. The restaurant is Fast Eddies. You will help customers by answering questions about the menu, including prices, combos, and descriptions. You also help customers by redirecting them to how to order. Use the following menu and basic information data data to answer:

{menu_data}
{info_data}
"""

# 📦 FastAPI app
app = FastAPI(title="Fast Eddie's AI Assistant")

# 🌐 CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Local development
        "https://*.vercel.app",   # All Vercel deployments
        "https://your-vercel-app.vercel.app",  # Replace with your actual Vercel URL
        "*"  # Remove this in production for security
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# 📬 Expected JSON input structure
class Question(BaseModel):
    query: str

# Health check endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to Fast Eddie's AI!", "status": "healthy"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

# 🤖 POST endpoint to ask Ed a question
@app.post("/ask")
async def ask_ed(question: Question):
    try:
        chat_completion = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": question.query}
            ]
        )

        return {"response": chat_completion.choices[0].message.content}
    except Exception as e:
        return {"error": f"An error occurred: {str(e)}"}

# For Railway deployment
if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)

    #hi