console.log("Let us write JavaScript.");

let names = [], years = [], types = [], times = [], urls = [];
let movies = [], genres = [], shows = [];

// Scroll arrow
window.addEventListener("scroll", () => {
    let arrow = document.querySelector(".arrow");
    arrow.style.display = window.scrollY > 100 ? "flex" : "none";
});

// Hamburger menu
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector("aside").style.left = "0";
});
document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector("aside").style.left = "-1000px";
});

// Scroll to top
document.querySelector(".arrow").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// GitHub repository info
const repoOwner = "arhxn-xhmd";
const repoName = "CineFlix-Movies-Website";

// Generic function to fetch JSON files from a GitHub folder
async function fetchJsonFilesFromFolder(folderPath) {
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`;
    const response = await fetch(apiUrl);
    const files = await response.json();
    const jsonFiles = files.filter(file => file.name.endsWith(".json"));
    const dataList = [];

    for (const file of jsonFiles) {
        const fileResponse = await fetch(file.download_url);
        const jsonData = await fileResponse.json();
        dataList.push(jsonData);
    }

    return dataList;
}

// Display Posters
async function displayPosters() {
    const posterData = await fetchJsonFilesFromFolder("Posters");

    posterData.forEach(p => {
        names.push(p.name);
        years.push(p.year);
        types.push(p.type);
        times.push(p.time);
        urls.push(p.url);
    });

    let index = 0;
    setInterval(() => {
        if (names.length === 0) return;
        index = (index + 1) % names.length;
        document.querySelector("figure").innerHTML = `
        <figure>
            <img src="${urls[index]}" alt="Poster image">
            <div class="poster-info flexbox">
                <div class="flexbox">
                    <img width="23" src="img/television.svg" alt="TV">
                    <div>${types[index]}</div>
                </div>
                <div class="flexbox">
                    <img width="23" src="img/calendar.svg" alt="Year">
                    <div>${years[index]}</div>
                </div>
                <div class="flexbox">
                    <img width="23" src="img/clock.svg" alt="Time">
                    <div>${times[index]}</div>
                </div>
                <div class="liked-rate">4K</div>
            </div>
            <div class="poster-name"><h1>${names[index]}</h1></div>
        </figure>`;
    }, 3000);
}

// Display Movies
async function displayMovies(folder) {
    const movieData = await fetchJsonFilesFromFolder(folder);

    movieData.forEach(jsonFormat => {
        document.querySelector(".movies").innerHTML += `
        <div class="movie">
            <img src="${jsonFormat.image_url}" alt="Movie Image">
            <div class="bookmark"><img width="20" src="img/bookmark.svg" alt="Bookmark"></div>
            <div class="star"><img width="20" src="img/star.svg" alt="Star">${jsonFormat.rating}</div>
            <div class="play-button"><img src="img/play.svg" alt="Play"></div>
            <h4>${jsonFormat.name}</h4>
            <div class="movie-info">
                <span class="genre">${jsonFormat.genres}</span>
                <span class="year">${jsonFormat.year}</span>
            </div>
        </div>`;
    });
}

// Show More / Show Less functionality
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("show-more")) {
        movies.length = 0;
        displayMovies("Movies/Postloaded Movies");
        e.target.innerHTML = "SHOW LESS";
        e.target.className = "show-less";
    } else if (e.target.classList.contains("show-less")) {
        for (let i = 0; i < 12; i++) {
            const lastChild = document.querySelector(".movies").lastElementChild;
            if (lastChild) lastChild.remove();
        }
        e.target.innerHTML = "SHOW MORE";
        e.target.className = "show-more";
    }
});

// Display Categories
async function displayCategories() {
    const categoryData = await fetchJsonFilesFromFolder("Categories");

    categoryData.forEach(jsonFormat => {
        document.querySelector(".categories").innerHTML += `
        <div class="category">
            <img src="${jsonFormat.url}" alt="Category Image">
            <div class="category-text">
                <h3>${jsonFormat.genre}</h3>
                <div>${jsonFormat.number}</div>
            </div>
        </div>`;
    });
}

// Display Live Shows
async function displayShows() {
    const showData = await fetchJsonFilesFromFolder("Live Shows");

    showData.forEach(jsonFormat => {
        document.querySelector(".live-shows").innerHTML += `
        <div class="show">
            <div class="live">LIVE</div>
            <img src="${jsonFormat.src}" alt="Live Show">
            <div class="views">${jsonFormat.views}</div>
            <div class="play"><img width="50px" src="img/play.svg" alt="Play"></div>
            <div class="show-info flexbox">
                <div><img width="50" src="${jsonFormat.logo}" alt="Channel Logo"></div>
                <h2>${jsonFormat.name}</h2>
            </div>
        </div>`;
    });
}

// Initialize
displayPosters();
displayMovies("Movies/Preloaded Movies");
displayCategories();
displayShows();

// Right-bar selection
document.querySelector(".right-bar").addEventListener("click", (e) => {
    if (!e.target.closest(".right-bar > div")) return;

    if (!e.target.classList.contains("selected")) {
        Array.from(document.querySelector(".right-bar").children).forEach(child => {
            child.classList.remove("selected");
        });
        e.target.classList.add("selected");
    }
});