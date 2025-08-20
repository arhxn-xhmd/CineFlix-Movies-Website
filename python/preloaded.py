import json

movies = [
    {
        "name": "Red Notice",
        "year": "2021",
        "genres": "Action/Comedy",
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.mk_BfJ3729k80hb4_q3J7gHaKj?pid=Api&P=0&h=180",
        "rating": "6.3"
    },
    {
        "name": "Spider-Man: Homecoming",
        "year": "2017",
        "genres": "Action/Adventure",
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.og4wK-OfZ8P7bFGMtufkZQHaLH?pid=Api&P=0&h=180",
        "rating": "7.4"
    },
    {
        "name": "The Matrix Resurrections",
        "year": "2021",
        "genres": "Action/Sci-Fi",
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.6hUUkW6ZmPXm0LjEE8pwwAHaK-?pid=Api&P=0&h=180",
        "rating": "5.7"
    },
    {
        "name": "Eternals",
        "year": "2021",
        "genres": "Action/Adventure",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.wyyedYVhbMQiytgkN9jP-gHaK-?pid=Api&P=0&h=180",
        "rating": "6.3"
    },
    {
        "name": "Dune",
        "year": "2021",
        "genres": "Action/Adventure",
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.OnIgx-1EvzHwHJT7zpUJPAHaKo?pid=Api&P=0&h=180",
        "rating": "8.0"
    },
    {
        "name": "1917",
        "year": "2019",
        "genres": "Drama/War",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.2KsnnRjvIUAtZWG68M_9RgHaLI?pid=Api&P=0&h=180",
        "rating": "8.2"
    },
    {
        "name": "Shang-Chi and the Legend of the Ten Rings",
        "year": "2021",
        "genres": "Action/Fantasy",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.8_xkBvySaXwOr8gtMbtbVgHaLH?pid=Api&P=0&h=180",
        "rating": "7.4"
    },
    {
        "name": "Casino Royale",
        "year": "2006",
        "genres": "Action/Thriller",
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.TYxCI8Q_XxDA8b48ACdWCgHaLH?pid=Api&P=0&h=180",
        "rating": "8.0"
    },
    {
        "name": "The Dark Knight",
        "year": "2008",
        "genres": "Action/Crime",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.iJ0B4QHWW_LdN-wEoTAQLAHaLH?pid=Api&P=0&h=180",
        "rating": "9.0"
    },
    {
        "name": "Black Panther",
        "year": "2018",
        "genres": "Action/Adventure",
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.xn9xXma1QcyDZatFWWCghwHaK9?pid=Api&P=0&h=180",
        "rating": "7.3"
    },
    {
        "name": "Venom",
        "year": "2018",
        "genres": "Action/Sci-Fi",
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.6tdgCKANhOjNTCoYeQ_FyQHaLH?pid=Api&P=0&h=180",
        "rating": "6.6"
    },
    {
        "name": "The Lord of the Rings: The Return of the King",
        "year": "2003",
        "genres": "Action/Fantasy",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.UvGweZ6ToKX9g2qTL1mm7wHaLH?pid=Api&P=0&h=180",
        "rating": "9.0"
    },
    {
        "name": "Saving Private Ryan",
        "year": "1998",
        "genres": "Drama/War",
        "image_url": "https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg",
        "rating": "8.6"
    },
    {
        "name": "Interstellar",
        "year": "2014",
        "genres": "Sci-Fi/Drama",
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.n-lW5hhF0w9CCmLzfl6aRAHaK-?pid=Api&P=0&h=180",
        "rating": "8.7"
    },
    {
        "name": "Gladiator",
        "year": "2000",
        "genres": "Action/Drama",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.gd1lkWzQwilQBj4eU60q0wHaLH?pid=Api&P=0&h=180",
        "rating": "8.5"
    },
    {
        "name": "Avengers: Endgame",
        "year": "2019",
        "genres": "Action/Sci-Fi",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.yAzN-BhNnov5qaQ7JUoAoQHaK-?pid=Api&P=0&h=180",
        "rating": "8.4"
    },
    {
        "name": "Wonder Woman 1984",
        "year": "2020",
        "genres": "Action/Fantasy",
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.wY6ucA0OOUgDj3lO4zxDawAAAA?pid=Api&P=0&h=180",
        "rating": "5.4"
    },
    {
        "name": "Captain Marvel",
        "year": "2019",
        "genres": "Action/Sci-Fi",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.0OsrF8SCBqLb3RMi5XvNtAHaLH?pid=Api&P=0&h=180",
        "rating": "6.8"
    }
]

for i, data in enumerate(movies, start=1):
    filename = f"Movies/Preloaded Movies/movie {i:02}.json"

    with open(filename, "w") as f:
        json.dump(data, f, indent=4)

    print(f"{filename} created.")

print("All files are created.")
