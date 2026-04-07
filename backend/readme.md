# PR Description Generator

## The Problem
I struggled to write proper PR descriptions after finishing coding tasks.
I often wrote vague descriptions like "fixed stuff" and had to rewrite them.

## What It Does
This tool takes your code changes as input and generates a professional PR description using AI.

## AI Integration
API: OpenRouter  
Model: openai/gpt-4o-mini  
Location: backend/server.js in /generate route  

## What I Intentionally Excluded
- No login system (not required)
- No history saving (kept simple)

## Monthly Cost Calculation
Model: openai/gpt-4o-mini  
Input: $0.15 per 1M tokens  
Output: $0.60 per 1M tokens  

Avg tokens: 800 input + 300 output  

Cost:
(800/1M × 0.15) = 0.00012  
(300/1M × 0.60) = 0.00018  

Total per call = 0.0003  

Monthly:
200 × 0.0003 = $0.06  

## Live Deployment
Frontend: <netlify-url>  
Backend: <render-url>