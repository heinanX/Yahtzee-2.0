# Yahtzee Game v.2

## Description

This is a modern web-based version of the classic Yahtzee game, built with React, TypeScript, and Vite. It supports 1 to 4 players locally, allowing each player to choose a unique name and avatar.

## How to Play

1. **Choose the number of players** (1 to 4).
2. **Enter player names and select avatars** from an assorted list before pressing 'Start New Game'.
3. **Rolling the Dice:**
   - Each player can roll the dice up to three times per turn to achieve the best combination.
4. **Assigning Scores:**
   - After your turn, select the appropriate score category on the score sheet by pressing on the desired box.
5. **Ending the Game:**
   - The game ends when all score categories on the score sheet are filled. The player with the highest total score wins.

⚠️ **Important:** Once a game is started, it stays active in Local Storage until the game is either finished or Local Storage is cleared.

## About the Application

### Installation Instructions

#### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)

You can download Node.js (which includes npm) from the [official Node.js website](https://nodejs.org/).

#### Installation Steps

Follow these steps to set up the project on your local machine:

1. **Clone the Repository:**
   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/heinanX/Yahtzee-v2.git
   ```

2. **Navigate to the Project Directory:**
   Change to the directory of the cloned repository:
   ```bash
   cd <project-directory>
   ```
   Replace `<project-directory>` with the name of the folder created by the clone command.

3. **Install Dependencies:**
   Run the following command to install all necessary dependencies:
   ```bash
   npm install
   ```

### Running the Application

After you've installed the dependencies, you can run the application locally.

1. **Start the Development Server:**
   To start the app in development mode, use the following command:
   ```bash
   npm run dev
   ```
   By default, the application will be accessible at `http://localhost:3000` in your web browser.

## Changing the Default Port

If you need to run the application on a different port, you can specify a different port in your terminal:
```bash
npm run dev -- --port=<your-port-number>
```
Replace `<your-port-number>` with the desired port number.

## Technologies Used

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS (if used)
- **Storage:** LocalStorage
