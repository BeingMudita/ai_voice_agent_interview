# 🚀 AI Voice Agent Interview Platform

A cutting-edge AI-powered mock interview platform inspired by [Adrian Hajdin's project](https://github.com/adrianhajdin/ai_mock_interviews). Built with modern web technologies including **Next.js**, **Firebase**, **OpenAI**, and **Clerk**, it allows users to practice interviews through voice interactions with an intelligent virtual agent.

---

## 🌟 Features

- 🔐 **Clerk Authentication** – Secure user login and registration
- 🎤 **Voice-Powered AI Interviews** – Talk naturally with an AI interviewer
- 🤖 **GPT-4 Integration** – Smart and adaptive question generation
- 🔊 **Speech Recognition & Synthesis** – Real-time audio interaction
- 🔥 **Firebase Admin SDK** – Backend services with secure access
- 🧠 **Contextual Memory** – AI remembers and adapts to your answers
- 📚 **Interview History** – Track your sessions and review feedback

---

## 🧰 Tech Stack

| Layer       | Technology                      |
|-------------|----------------------------------|
| Frontend    | Next.js 14, TypeScript, TailwindCSS |
| Backend     | Firebase Admin SDK              |
| AI Engine   | OpenAI GPT-4                    |
| Auth        | Clerk                           |
| State Mgmt  | React Hooks                     |

---

## ⚙️ Environment Setup

Create a `.env.local` file in your root directory:

```env
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"
OPENAI_API_KEY=your_openai_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

> ⚠️ **Note**: Ensure you escape newline characters in the private key using `\n`.

---

## 🛠️ Installation

```bash
git clone https://github.com/beingmudita/ai-voice-agent-interview.git
cd ai-voice-agent-interview
npm install
```

---

## 🧪 Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🔮 Future Enhancements

- 📊 Interview scoring and performance analytics
- 🗂️ Save and categorize past interviews
- 🌐 Multi-language and regional support
- 🧾 Personalized interview feedback reports

---


> Made with ❤️ by **Mudita Jain**

