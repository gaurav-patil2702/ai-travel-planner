# TripMind AI — Multi-Agent Travel Planner

A production-style full-stack portfolio project inspired by the first project in the supplied reel: a **multi-agent travel planner** with an orchestrator coordinating flight, stay and activity agents.

## What is included

- Premium landing page
- Trip planner with destination, dates, travelers, budget, pace and interests
- AI orchestration: flights + stays + activities + itinerary + budget agents
- OpenAI-powered planning with a deterministic demo fallback when no API key is configured
- Weather lookup using Open-Meteo (no API key)
- Register / login with JWT
- MongoDB persistence for saved trips
- Trip history/dashboard
- Shareable public trip links
- Google Flights / Booking / Google Maps search shortcuts
- In-app AI travel assistant
- Printable/PDF itinerary export from the browser
- Responsive mobile-first UI
- Health endpoint and security middleware

## Stack

Frontend: React + Vite
Backend: Node.js + Express + MongoDB + OpenAI SDK

## Folder structure

```text
tripmind-ai/
├── backend/
│   ├── src/
│   │   ├── config/db.js
│   │   ├── middleware/auth.js
│   │   ├── models/User.js
│   │   ├── models/Trip.js
│   │   ├── routes/auth.js
│   │   ├── routes/trips.js
│   │   ├── routes/weather.js
│   │   ├── routes/assistant.js
│   │   ├── services/aiPlanner.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/App.jsx
│   ├── src/main.jsx
│   ├── src/styles.css
│   ├── .env.example
│   └── package.json
└── README.md
```

## Important note about travel pricing

The planner produces **planning estimates**, not bookable airline/hotel inventory. The included provider buttons open current searches on Google Flights, Booking.com and Google Maps. This keeps the project deployable without paid travel-data contracts while still providing a real end-to-end product. For production booking, plug a licensed inventory provider into the agent service.
