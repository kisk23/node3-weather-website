

# ☀️ Weather App - Node.js Edition

A simple weather app that tells you if you'll need an umbrella or sunglasses today!

## What It Does
- Shows current weather for any city
- Displays temperature, humidity, and wind speed
- Works on phones and computers
- Doesn't look like it's from 1999

## What's Under the Hood
**Backend Stuff:**
- Node.js
- Express (makes the website work)
- Axios (talks to weather APIs)

**Frontend Stuff:**
- Plain old HTML/CSS/JS
- A few Bootstrap bits to make it not ugly

## Get It Running

1. **Grab the code:**
   ```bash
   git clone https://github.com/kisk23/node3-weather-website.git
   cd node3-weather-website
   ```

2. **Install what it needs:**
   ```bash
   npm install
   ```

3. **Get a weather API key** from [OpenWeatherMap](https://openweathermap.org/) (it's free)

4. **Create a .env file** and add:
   ```
   WEATHER_API_KEY=your_key_here
   ```

5. **Start it up:**
   ```bash
   npm start
   ```

6. **Open your browser** to `http://localhost:3000`

## How to Use It
1. Type a city name in the box
2. Hit enter
3. See if you need a jacket or not

## If Something Breaks
- Check you put in the API key right
- Make sure you're online
- Try turning it off and on again (just kidding... but maybe restart the server)

## Want to Help?
Feel free to:
- Fix my bad code
- Make it look prettier
- Add new features

Just fork it and send a pull request!
