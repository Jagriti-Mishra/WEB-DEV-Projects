# 🎮 Simon Says Game

A simple and interactive **Simon Says Game** built using **HTML**, **CSS**, and **JavaScript**. The game tests the player's memory by generating an increasingly longer sequence of colors that the player must repeat correctly.

---

## 📌 Overview

Simon Says is a classic memory game where the player must remember and reproduce a randomly generated sequence of colored buttons. Each successful round increases the sequence length, making the game progressively more challenging.

---

## ✨ Features

* 🎯 Random color sequence generation
* 📈 Increasing difficulty with every level
* ⚡ Smooth button flash animations
* 🖱️ Interactive button click effects
* 🏆 High score tracking during gameplay
* ❌ Game over indication with visual feedback
* 🔄 Instant game restart on key press

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **Vanilla JavaScript (ES6)**

No external libraries or frameworks are required.

---

## 📂 Project Structure

```
Simon-Says-Game/
│
├── index.html      # Main HTML page
├── style.css       # Styling and animations
├── app.js          # Game logic
└── README.md       # Project documentation
```

---

## 🚀 How to Run

1. Clone the repository.

```bash
git clone https://github.com/your-username/Simon-Says-Game.git
```

2. Navigate to the project folder.

```bash
cd Simon-Says-Game
```

3. Open `index.html` in your preferred web browser.

No installation or dependencies are required.

---

## 🎮 How to Play

1. Press **any key** to start the game.
2. Watch the button that flashes.
3. Click the same button.
4. At each new level, an additional color is added to the sequence.
5. Repeat the entire sequence correctly.
6. The game ends when an incorrect button is clicked.
7. Your highest score for the current session is displayed on the screen.

---

## 🧠 Game Logic

* The game randomly selects one of four colored buttons:

  * 🔴 Red
  * 🔵 Blue
  * 🟡 Yellow
  * 🟢 Green
* The generated sequence is stored in `gameSeq`.
* Player inputs are stored in `userSeq`.
* After each click, the player's input is validated against the generated sequence.
* If the sequence is correct, the player advances to the next level.
* On an incorrect input:

  * The screen briefly flashes red.
  * The high score is updated (if applicable).
  * The game resets.

---

## 📸 Gameplay

```
Press Any Key
      │
      ▼
Level 1
      │
      ▼
Watch Flashing Color
      │
      ▼
Repeat Sequence
      │
      ├── Correct ✅ → Next Level
      │
      └── Wrong ❌ → Game Over → Restart
```

---

## 📈 Future Improvements

* 🔊 Sound effects for each button
* 🎵 Background music
* 💾 Persistent high score using Local Storage
* 📱 Responsive design for mobile devices
* 🌙 Dark mode
* 🎨 Improved UI/UX with animations
* ⏸️ Pause and resume functionality
* 🏅 Difficulty levels

---

## 📚 Learning Outcomes

This project demonstrates:

* DOM Manipulation
* Event Handling
* Arrays in JavaScript
* Random Number Generation
* Functions and Control Flow
* CSS Animations
* State Management
* Game Logic Implementation

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 👩‍💻 Author

**Jagriti Mishra**

If you found this project helpful, consider giving it a ⭐ on GitHub!
