# ui-feedback-pins-be

This is a simple backend for web application that allows users to leave feedback on specific areas of a UI by clicking anywhere on the screen. Each click drops a "pin", stores feedback, and persists it across sessions.

## ✨ Features

- 🖱️ Click anywhere on the UI to drop a pin
- 💬 Submit text feedback in a modal popup
- 📌 Pins are shown on the exact clicked location
- 🔁 Click existing pins to view/edit feedback
- 🗑️ Delete pin - Over and above assignment
- 💾 Feedback and pins are persisted in a database
- 🔄 Pins reappear on reload

---

## 🧱 Tech Stack

### Backend:
- Node.js with Express (or any preferred stack)
- SQLite (or your DB of choice)
- RESTful API


## Getting Started with Backend

### Clone the Repository

```bash
git clone git@github.com:Amit-Milli/ui-feedback-pins-be.git
cd ui-feedback-pins-be
```

In the project directory, you can run:

### Install Dependencies
```bash
npm install
```

### Run Application
```bash
node server.js
```

### Backend running at http://localhost:8080 
#### Hit http://localhost:8080/api/pins to get all pins