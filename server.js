const express = require('express');
const app = express();

// Create a GET endpoint at "/assistant/greet"
app.get('/assistant/greet', (req, res) => {
    // Get the name from the query parameters
    const name = req.query.name;

    // Check if the name is provided
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    // Get the current day of the week
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('en-US', { weekday: 'long' });

    // Prepare the welcome message
    const welcomeMessage = `Hello, ${name}! Welcome to our assistant app!`;

    // Prepare the day message based on the current day
    let dayMessage;
    switch (currentDay) {
        case 'Monday':
            dayMessage = 'Happy Monday! Start your week with energy!';
            break;
        case 'Friday':
            dayMessage = "It's Friday! The weekend is near!";
            break;
        default:
            dayMessage = 'Have a wonderful day!';
            break;
    }

    // Send the JSON response
    res.json({
        welcomeMessage,
        dayMessage
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
