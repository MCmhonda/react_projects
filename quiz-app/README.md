# Quiz Application

A dynamic, interactive quiz application built with React that features multiple categories, difficulty levels, and a timer system.

## Features

### 1. Multiple Categories
- General Knowledge
- Science
- History
- Geography
- Mathematics
- Technology & Computers

### 2. Difficulty Levels
Each category offers three difficulty levels:
- Easy (60 seconds)
- Medium (90 seconds)
- Hard (120 seconds)

### 3. Quiz Features
- Timer countdown for each difficulty level
- Random question selection
- Score tracking
- Progress indicator
- Immediate feedback on answers
- Option to quit mid-quiz
- Time's up notification

### 4. User Interface
- Clean, modern design
- Color-coded difficulty levels
- Easy navigation
- Responsive layout
- Category and difficulty indicators
- Question counter

## Technical Implementation

### Core Components
1. **App.jsx**: Main application component
   - Manages game state
   - Handles routing between different screens
   - Controls category and difficulty selection

2. **Quiz.jsx**: Quiz gameplay component
   - Manages question display
   - Handles answer selection
   - Controls timer functionality
   - Tracks score

3. **Result.jsx**: Results display component
   - Shows final score
   - Displays completion status
   - Provides retry option

4. **Menu.jsx**: Navigation component
   - Category selection
   - Difficulty selection
   - Game start controls

### State Management
- Uses React's useState for local state management
- Tracks:
  - Current score
  - Game state
  - Selected category
  - Selected difficulty
  - Timer status
  - Question progress

### Timer System
- Automatic countdown based on difficulty
- Easy: 60 seconds
- Medium: 90 seconds
- Hard: 120 seconds
- Auto-submits when time expires

### Installation
1. Clone the repository
```bash
git clone https://github.com/MCmhonda/quiz-app.git
```

2. Install dependencies
```bash
cd quiz-app
npm install
``` 

3. Start the development server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```



## Customization

### Adding Questions
Questions can be added to the `questions` object in `Quiz.jsx`:

javascript
const questions = {
category: {
difficulty: [
{
question: "Your question here?",
options: ["Option 1", "Option 2", "Option 3", "Option 4"],
answer: "Correct option"
}
]
}
}


## License
© 2024 All rights reserved

## Author
MCmhonda