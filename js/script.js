console.log("Let us write JavaScript.");

let files = [];
let names = [];
let years = [];
let types = [];
let times = [];
let urls = [];
let movies = [];
let genres = [];
let shows = [];

// Detect base path for GitHub Pages or Local
const basePath = window.location.hostname.includes("github.io")
  ? "/CineFlix-Movies-Website"
  : "";

// Scroll arrow visibility
window.addEventListener("scroll", () => {
  let arrow = document.querySelector(".arrow");
  arrow.style.display = window.scrollY > 100 ? "flex" : "none";
});

// Hamburger menu controls
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

// Get list of .json files dynamically
async function getData(src, list) {
  try {
    let response = await fetch(`${basePath}/${src}/`);
    let text = await response.text();
    let div = document.createElement("div");
    div.innerHTML = text;
    Array.from(div.getElementsByTagName("a")).forEach((e) => {
      if (e.getAttribute("href").endsWith(".json")) {
        list.push(`${src}/${e.getAttribute("href")}`);
      }
    });
    return list;
  } catch (err) {
    console.error("Error fetching data list from:", src, err);
    return [];
  }
}

// Posters section
async function displayPosters() {
  let f = await getData("Posters", files);

  for (const file of f) {
    try {
      let d = await fetch(`${basePath}/${file}`);
      let resp = await d.json();
      names.push(resp.name);
      years.push(resp.year);
      types.push(resp.type);
      times.push(resp.time);
      urls.push(resp.url);
    } catch (err) {
      console.error("Error loading poster:", file, err);
    }
  }

  let index = 0;
  setInterval(() => {
    if (names.length === 0) return;
    index = (index + 1) % names.length;
    let figure = document.querySelector("figure");
    let slide = `<figure>
        <img src="${urls[index]}" alt="Poster images">
        <div class="poster-info flexbox">
            <div class="flexbox">
                <img width="23" src="${basePath}/img/television.svg" alt="Image of a television">
                <div>${types[index]}</div>
            </div>
            <div class="flexbox">
                <img width="23" src="${basePath}/img/calendar.svg" alt="Image of a calendar">
                <div>${years[index]}</div>
            </div>
            <div class="flexbox">
                <img width="23" src="${basePath}/img/clock.svg" alt="Image of a clock">
                <div>${times[index]}</div>
            </div>
            <div class="liked-rate">4K</div>
        </div>
        <div class="poster-name"><h1>${names[index]}</h1></div>
    </figure>`;
    figure.innerHTML = slide;
  }, 3000);
}

displayPosters();

// Sidebar selection
document.querySelector(".right-bar").addEventListener("click", (e) => {
  if (!e.target.closest(".right-bar > div")) return;
  if (!e.target.classList.contains("selected")) {
    let children = document.querySelector(".right-bar").children;
    for (let index = 0; index < children.length; index++) {
      const child = children[index];
      if (child.classList.contains("selected")) child.removeAttribute("class");
    }
    e.target.setAttribute("class", "selected");
  }
});

// Movies section
async function displayMovies(src) {
  let movieList = await getData(src, movies);
  for (const movie of movieList) {
    try {
      let movieData = await fetch(`${basePath}/${movie}`);
      let jsonFormat = await movieData.json();
      document.querySelector(".movies").innerHTML += `<div class="movie">
                <img src="${jsonFormat.image_url}" alt="Movie Image">
                <div class="bookmark">
                    <img width="20" src="${basePath}/img/bookmark.svg" alt="Bookmark Movies">
                </div>
                <div class="star">
                    <img width="20" src="${basePath}/img/star.svg" alt="Stars">
                    ${jsonFormat.rating}
                </div>
                <div class="play-button">
                    <img src="${basePath}/img/play.svg" alt="Play Button">
                </div>                
                <h4>${jsonFormat.name}</h4>
                <div class="movie-info">
                    <span class="genre">${jsonFormat.genres}</span>
                    <span class="year">${jsonFormat.year}</span>
                </div>
            </div>`;
    } catch (err) {
      console.error("Error loading movie:", movie, err);
    }
  }
}

displayMovies("Movies/Preloaded Movies");

// Show more / less button logic
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("show-more")) {
    movies.length = 0;
    displayMovies("Movies/Postloaded Movies");
    e.target.innerHTML = "SHOW LESS";
    e.target.classList.replace("show-more", "show-less");
  } else if (e.target.classList.contains("show-less")) {
    for (let index = 0; index < 12; index++) {
      document.querySelector(".movies").lastElementChild?.remove();
    }
    e.target.innerHTML = "SHOW MORE";
    e.target.classList.replace("show-less", "show-more");
  }
});

// Categories section
async function displayCategories() {
  let genreList = await getData("Categories", genres);
  for (const genre of genreList) {
    try {
      let genreData = await fetch(`${basePath}/${genre}`);
      let jsonFormat = await genreData.json();
      document.querySelector(".categories").innerHTML += `<div class="category">
                <img src="${jsonFormat.url}" alt="Category Image">
                <div class="category-text">
                    <h3>${jsonFormat.genre}</h3>
                    <div>${jsonFormat.number}</div>
                </div>
            </div>`;
    } catch (err) {
      console.error("Error loading category:", genre, err);
    }
  }
}

displayCategories();

// Live shows section
async function displayShows() {
  let showList = await getData("Live Shows", shows);
  for (const show of showList) {
    try {
      let showData = await fetch(`${basePath}/${show}`);
      let jsonFormat = await showData.json();
      document.querySelector(".live-shows").innerHTML += `<div class="show">
                <div class="live">LIVE</div>
                <img src="${jsonFormat.src}" alt="Image of Live TV Shows">
                <div class="views">${jsonFormat.views}</div>
                <div class="play">
                    <img width="50px" src="${basePath}/img/play.svg" alt="Play Button">
                </div>
                <div class="show-info flexbox">
                    <div><img width="50" src="${jsonFormat.logo}" alt="Logo of Channel"></div>
                    <h2>${jsonFormat.name}</h2>
                </div>
            </div>`;
    } catch (err) {
      console.error("Error loading show:", show, err);
    }
  }
}

displayShows();