# KALNET AI Study Topic Explainer

A web application that helps students understand any study topic using AI-generated explanations.

## What it does

Students enter a topic (e.g. "Photosynthesis", "Newton's Laws") and the app generates a simple, clear explanation using AI — instantly, without needing to search multiple websites.

## How the AI API was used

- **API:** OpenRouter (routing to Google Gemini model)
- The app sends the student's topic to a Next.js API route (`POST /api/explain`)
- The API builds a prompt instructing the AI to explain the topic in simple student-friendly language
- The response is returned and displayed on the screen

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- OpenRouter AI API
- Deployed on Vercel

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/Bhavani-0417/AI_studyTopic_Explainer_KalnetAI.git
cd AI_studyTopic_Explainer_KalnetAI

### 2. Install dependencies
npm install

### 3. Add your API key
Create a `.env.local` file in the root folder:
GEMINI_API_KEY=your_openrouter_api_key_here

Get your free API key at: https://openrouter.ai/keys

### 4. Run the development server
npm run dev

Open http://localhost:3000 in your browser.

## Live Demo
https://ai-study-topic-explainer-kalnet-ai.vercel.app