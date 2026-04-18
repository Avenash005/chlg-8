# PR Description Generator

## The Problem
I kept writing very poor PR descriptions after finishing features. My team lead rejected them because they lacked clarity. I wasted time rewriting them manually every time.

## What It Does
User pastes git diff → AI converts it into structured PR description → user gets clean output instantly.

## AI Integration
API: OpenRouter  
Model: openai/gpt-4o-mini  
Location: backend/server.js → generateDescription()  
What AI does: Converts raw git diff into structured PR description  

## What I Intentionally Excluded
- No authentication → not needed for single-use tool
- No database → no need to store data
- No history feature → keeps scope simple

## Monthly Cost Calculation
Model: openai/gpt-4o-mini  
Input: $0.15 per 1M tokens  
Output: $0.60 per 1M tokens  

Avg tokens per call: ~800 input + ~300 output  

Cost per call:
(800/1,000,000 × 0.15) + (300/1,000,000 × 0.60)  
= 0.00012 + 0.00018  
= 0.00030  

Expected calls/month: 200  

Monthly total:
200 × 0.00030 = $0.06  

## Live Deployment
Frontend: https://chlg-8.vercel.app 
Backend: https://ai-chatbot-backend-5it0.onrender.com
