// Scenes
const intro = document.getElementById("intro");
const xi = document.getElementById("xi");
const cities = document.getElementById("cities");

// UI
const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");
const flash = document.getElementById("flash");

// Audio
const music = document.getElementById("music");

// City Elements
const cityImage = document.getElementById("cityImage");
const cityName = document.getElementById("cityName");

// City slideshow
const cityList = [
    {
        name: "BEIJING",
        image: "assets/beijing.jpg"
    },
    {
        name: "SHANGHAI",
        image: "assets/shanghai.jpg"
    },
    {
        name: "SHENZHEN",
        image: "assets/shenzhen.jpg"
    },
    {
        name: "CHONGQING",
        image: "assets/chongqing.jpg"
    }
];

let cityIndex = 0;

// Start button
startButton.addEventListener("click", startVideo);

function startVideo() {

    startScreen.style.display = "none";

    music.play();

    // Intro lasts 4 seconds
    setTimeout(showXi, 4000);

}

// Flash + Xi reveal
function showXi() {

    flash.classList.add("active");

    setTimeout(() => {

        flash.classList.remove("active");

        intro.classList.remove("active");
        xi.classList.add("active");

        document.body.classList.add("shake");

        setTimeout(() => {

            document.body.classList.remove("shake");

        }, 400);

    }, 120);

    // Show cities after 4 seconds
    setTimeout(showCities, 4000);

}

function showCities() {

    xi.classList.remove("active");

    cities.classList.add("active");

    changeCity();

    setInterval(changeCity, 2500);

}

function changeCity() {

    const city = cityList[cityIndex];

    cityImage.src = city.image;
    cityName.textContent = city.name;

    cityImage.classList.remove("shake");

    void cityImage.offsetWidth;

    cityImage.classList.add("shake");

    cityIndex++;

    if(cityIndex >= cityList.length){

        cityIndex = 0;

    }

}

// Optional: Spacebar starts video
document.addEventListener("keydown", (event)=>{

    if(event.code === "Space"){

        if(startScreen.style.display !== "none"){

            startVideo();

        }

    }

});
