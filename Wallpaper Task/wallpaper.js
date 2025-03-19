/* Fakhre Tamimie 

example to run the function in Linux Shell :
node wallpaper.js 31.9539 35.9106
*/


const { exec } = require('child_process');

/* **** Get latitude and longitude from command line ****/

const args = process.argv.slice(2);
if (args.length !== 2) {
    console.log("Usage: node wallpaper.js <latitude> <longitude>");
    process.exit(1);
}

const latitude = args[0];
const longitude = args[1];

/* **** Function to get the wallpaper based on location *****/

async function getWallpaper(lat, lon) {
    
    lat = parseFloat(lat);
    lon = parseFloat(lon);

    if (isNaN(lat) || isNaN(lon)) {
        console.log("Invalid latitude or longitude values.");
        return;
    }

    const apiKey = "3CZUOSC50CAD";
    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== 'OK') {
            console.log("Failed to fetch time data.");
            return;
         }

        const hours = new Date(data.formatted).getHours();
        let imageFile = "night.png"; 

        if (hours >= 6 && hours < 8) imageFile = "sunrise.png";
         else if (hours >= 8 && hours < 12) imageFile = "morning.png";
        else if (hours >= 12 && hours < 15) imageFile = "noon.png";
        else if (hours >= 15 && hours < 20) imageFile = "sunset.png"; 
        else if (hours >= 20) imageFile = "evening.png";

        console.log(`Wallpaper Image: ${imageFile}`);

       
        exec(`xdg-open ${imageFile}`, (error) => {
            if (error) console.log("Error opening image:", error);
            else console.log("Image opened successfully.");
        });

    } catch (error) {
        console.log("Error:", error);
    }
}

getWallpaper(latitude, longitude);
