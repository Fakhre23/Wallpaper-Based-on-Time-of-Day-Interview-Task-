

# Wallpaper Based on Time of Day (Interview Task)

This project fetches the sunrise and sunset times for a given latitude and longitude, determines the current time in the user's timezone, and displays a corresponding wallpaper based on the time of day. 

This project was created as part of an interview task to demonstrate skills in working with APIs, handling timezones, and automating system tasks.

## Features

- Fetches sunrise and sunset times from the [Sunrise-Sunset API](https://sunrise-sunset.org/).
- Fetches the current time and timezone offset from the [World Time API](http://worldtimeapi.org/).
- Based on the current time, it determines which wallpaper to display (`morning.png`, `sunrise.png`, `noon.png`, `sunset.png`, `evening.png`, or `night.png`).
- Opens the selected image using `xdg-open`.

## Requirements

- Node.js
- `node-fetch` library (for making HTTP requests)
- `xdg-open` (for opening images)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Ensure `xdg-open` is installed on your system. It is usually available on Linux systems.

5. If you haven't already, install `node-fetch`:

   ```bash
   npm install node-fetch
   ```

## Usage

1. Open the terminal.
2. Navigate to the project directory where `wallpaper.js` is located.
3. Run the script by providing the latitude and longitude of your location:

   ```bash
   node wallpaper.js <latitude> <longitude>
   ```

   Example:

   ```bash
   node wallpaper.js 38.89511 -77.03637
   ```

4. The script will fetch the sunrise and sunset times, calculate the current time, and display the corresponding wallpaper (based on the time of day).

## Troubleshooting

- If you encounter issues with opening the image, ensure that `xdg-open` is installed and configured correctly on your system.
- If you get a `fetch` or `ECONNRESET` error, it may be due to network issues or temporary API unavailability. Try running the script again after some time.



