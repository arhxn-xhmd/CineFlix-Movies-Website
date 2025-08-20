console.log("Let us write JavaScript.")

let files = [];
let names = [];
let years = [];
let types = [];
let times = [];
let urls = [];
let movies = [];
let genres = [];
let shows = [];

window.addEventListener("scroll", () => {
    let arrow = document.querySelector(".arrow");
    if (window.scrollY > 100) {   
        arrow.style.display = "flex";
    } else {
        arrow.style.display = "none";
    }
});

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector("aside").style.left = "0";
})

document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector("aside").style.left = "-1000px";
})

document.querySelector(".arrow").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


async function getData(src, list) {
    let a = await fetch(`http://127.0.0.1:5500/${src}/`);
    let response = await a.text();

    let div = document.createElement("div");
    div.innerHTML = response;
    Array.from(div.getElementsByTagName("a")).forEach(e => {
        if (e.getAttribute("href").endsWith(".json")) {
            list.push(e.getAttribute("href"));
        }
    });

    return list;
}

async function displayPosters() {
    let f = await getData("Posters", files)

    for (const file of f) {
        let d = await fetch(`http://127.0.0.1:5500/${file}`);
        let resp = await d.json();

        names.push(resp.name);
        years.push(resp.year);
        types.push(resp.type);
        times.push(resp.time);
        urls.push(resp.url);

    }

    let index = 0;

    setInterval(() => {
        index = (index + 1) % names.length;
        let figure = document.querySelector("figure")

        let slide = `<figure>
        <img src=${urls[index]} alt="Poster images">

        <div class="poster-info flexbox">

            <div class="flexbox">
                <img width="23" src="img/television.svg" alt="Image of a television">
                <div>${types[index]}</div>
            </div>
            <div class="flexbox">
                <img width="23" src="img/calendar.svg" alt="Image of a calendar">
                <div>${years[index]}</div>
            </div>
            <div class="flexbox">
                <img width="23" src="img/clock.svg" alt="Image of a clock">
                <div>${times[index]}</div>
            </div>

            <div class="liked-rate">
                4K
            </div>

        </div>

        <div class="poster-name">
            <h1>${names[index]}</h1>
        </div>
    </figure>`

        figure.innerHTML = slide;


    }, 3000)

}

displayPosters()

document.querySelector(".right-bar").addEventListener("click", (e) => {
    if (!e.target.closest(".right-bar > div")) return;

    if (!e.target.classList.contains("selected")) {
        let children = document.querySelector(".right-bar").children;
        for (let index = 0; index < children.length; index++) {
            const child = children[index];

            if (child.classList.contains("selected")) {
                child.removeAttribute("class");
            };

        };

        e.target.setAttribute("class", "selected")
    }
})

async function displayMovies(src) {
    let movieList = await getData(src, movies);

    for (let index = 0; index < movieList.length; index++) {
        const movie = movieList[index];
        let movieData = await fetch(`http://127.0.0.1:5500/${movie}`)
        let jsonFormat = await movieData.json()

        document.querySelector(".movies").innerHTML = document.querySelector(".movies").innerHTML + `<div class="movie">
                <img src="${jsonFormat.image_url}"
                    alt="Movie Image">
                <div class="bookmark">
                    <img width="20" src="img/bookmark.svg" alt="Bookmark Movies">
                </div>
                <div class="star">
                    <img width="20" src="img/star.svg" alt="Stars">
                    ${jsonFormat.rating}
                </div>
                <div class="play-button">
                    <img src="img/play.svg" alt="Play Button">
                </div>                

                <h4>${jsonFormat.name}</h4>

                <div class="movie-info">
                    <span class="genre">${jsonFormat.genres}</span>
                    <span class="year">${jsonFormat.year}</span>
                </div>
            </div>`
    }

}

displayMovies("Movies/Preloaded Movies")

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("show-more")) {
        movies.length = 0;
        displayMovies("Movies/Postloaded Movies");
        document.querySelector(".show-more").innerHTML = "SHOW LESS";
        document.querySelector(".show-more").removeAttribute("class");
        document.querySelector("button").setAttribute("class", "show-less");
    }

    else if (e.target.classList.contains("show-less")) {
        for (let index = 0; index < 12; index++) {
            document.querySelector(".movies").lastElementChild.remove();
        }

        document.querySelector(".show-less").innerHTML = "SHOW MORE";
        document.querySelector(".show-less").removeAttribute("class");
        document.querySelector("button").setAttribute("class", "show-more");

    }

})

async function displayCategories() {
    let genreList = await getData("Categories", genres);

    for (let index = 0; index < genreList.length; index++) {
        const genre = genreList[index];
        let genreData = await fetch(`http://127.0.0.1:5500/${genre}`);
        let jsonFormat = await genreData.json();

        document.querySelector(".categories").innerHTML = document.querySelector(".categories").innerHTML + `<div class="category">
                <img src="${jsonFormat.url}" alt="Category Image">
                <div class="category-text">
                    <h3>${jsonFormat.genre}</h3>
                    <div>${jsonFormat.number}</div>
                </div>
            </div>`
    }
}

displayCategories()


async function displayShows() {
    let showList = await getData("Live Shows", shows);

    for (let index = 0; index < showList.length; index++) {
        const show = showList[index];
        let showData = await fetch(`http://127.0.0.1:5500/${show}`);
        let jsonFormat = await showData.json();

        document.querySelector(".live-shows").innerHTML = document.querySelector(".live-shows").innerHTML + `<div class="show">
                <div class="live">LIVE</div>
                <img src="${jsonFormat.src}" alt="Image of Live TV Shows">
                <div class="views">${jsonFormat.views}</div>
                <div class="play">
                    <img width="50px" src="img/play.svg" alt="Play Button">
                </div>
                <div class="show-info flexbox">
                    <div><img width="50" src="${jsonFormat.logo}" alt="Logo of Channel"></div>
                    <h2>${jsonFormat.name}</h2>
                </div>
            </div>`
    }
}

displayShows()



