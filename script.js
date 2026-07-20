 // ================================
// SCENES
// ================================

const intro = document.getElementById("intro");
const xi = document.getElementById("xi");
const cities = document.getElementById("cities");

// ================================
// ELEMENTS
// ================================

const leaderImage = document.getElementById("leaderImage");
const cityImage = document.getElementById("cityImage");
const cityName = document.getElementById("cityName");

const flash = document.getElementById("flash");

const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");

const music = document.getElementById("music");

// ================================
// CITY LIST
// ================================

const cityList = [

    {
        name: "THE GREAT WALL",
        image: "assets/IMG_1540.jpeg"
    },

    {
        name: "RETRO CITY",
        image: "assets/IMG_1539.jpeg"
    },

    {
        name: "MODERN SKYLINE",
        image: "assets/IMG_1538.jpeg"
    },

    {
        name: "FUTURE CITY",
        image: "assets/IMG_1537.jpeg"
    },

    {
        name: "MEGA CITY",
        image: "assets/IMG_1535.jpeg"
    }

];

// ================================
// START BUTTON
// ================================

startButton.addEventListener("click", startEdit);

document.addEventListener("keydown",(event)=>{

    if(event.code==="Space"){

        if(startScreen.style.display!=="none"){

            startEdit();

        }

    }

});

// ================================
// START EDIT
// ================================

function startEdit(){

    startScreen.style.display="none";

    music.play().catch(()=>{

        console.log("Music couldn't autoplay.");

    });

    intro.classList.add("active");

    // Intro lasts about 4 seconds
    setTimeout(showXi,4000);

}

// ================================
// SHOW XI
// ================================

function showXi(){

    intro.classList.remove("active");

    flash.classList.add("active");

    setTimeout(()=>{

        flash.classList.remove("active");

    },300);

    xi.classList.add("active");

    document.body.classList.add("shake");

    setTimeout(()=>{

        document.body.classList.remove("shake");

    },400);

    // Xi lasts 3.5 seconds
    setTimeout(showCities,3500);

}

// ================================
// SHOW CITIES
// ================================

let cityIndex=0;

function showCities(){

    xi.classList.remove("active");

    cities.classList.add("active");

    updateCity();

    setInterval(updateCity,1800);

}

// ================================
// UPDATE CITY
// ================================

function updateCity(){

    const city=cityList[cityIndex];

    cityImage.style.opacity=0;

    setTimeout(()=>{

        cityImage.src=city.image;

        cityName.textContent=city.name;

        cityImage.style.opacity=1;

        cityImage.style.transform="scale(1.12)";

        setTimeout(()=>{

            cityImage.style.transform="scale(1)";

        },150);

        document.body.classList.add("shake");

        setTimeout(()=>{

            document.body.classList.remove("shake");

        },250);

    },200);

    cityIndex++;

    if(cityIndex>=cityList.length){

        cityIndex=0;

    }

}

// ================================
// MUSIC ENDED
// ================================

music.addEventListener("ended",()=>{

    location.reload();

});
