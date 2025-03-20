# Daily Mood Tracker

A simple, elegant web application that allows users to track their daily moods and visualize their emotional patterns over time.

![Daily Mood Tracker Screenshot](preview.png)

## Live link 
Deployed at vercel : [Go to Mood Tracker](https://mood-tracker-iota-gray.vercel.app/)

## Features

- **Interactive Calendar**: Select any date to view or update your mood
- **Daily Mood Selection**: Choose between 4 different moods (Happy, Neutral, Sad, Angry)
- **Mood Visualization**: See your mood history with color-coded days on the calendar
- **Mood Statistics**: View counts of each mood type
- **Local Storage**: Your mood data is saved in your browser's local storage
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- HTML5
- CSS3 (with animations and transitions)
- Vanilla JavaScript
- LocalStorage API for data persistence
- RemixIcon for icons

## How It Works

1. **Record Your Mood**: Click on one of the four mood emojis to record your mood for the day
2. **View Past Moods**: Navigate through the calendar to see your mood history
3. **Track Patterns**: The counter displays show how many days you've experienced each mood
4. **Review Over Time**: Use the calendar navigation to move between months and years

## Data Storage

The application uses your browser's LocalStorage to save your mood data. This means:
- Your data is private and stays on your device
- No account creation or login required
- Data persists even when you close the browser

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/Ansh0330/Mood-Tracker.git
   ```

2. Open ```index.html``` in your browser

## File Structure

```
daily-mood-tracker/
├── index.html       # Main HTML structure
├── style.css        # Styling and animations
├── script.js        # Calendar and mood tracking functionality
└── README.md        # This file
```

## Customization

You can easily customize the following aspects:
- Color scheme by modifying the CSS variables
- Mood types and colors in the JavaScript file
- Layout and design by adjusting the CSS

## Future Enhancements

- Add notes for each day
- Create mood charts and visualizations
- Export data functionality
- Dark mode toggle
- Mood trend analysis

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [RemixIcon](https://remixicon.com/) for the beautiful icons
- Inspiration from various mood tracking apps and journals

---

Created with ❤️ by [Ansh](https://github.com/Ansh0330)