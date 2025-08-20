import json

movies = [
    {
        "name": "She",
        "year": "2020",
        "genres": "Crime/Drama",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.88S5aVzSecCbMeARkdVlxgHaJ4?pid=Api&P=0&h=180",
        "rating": "6.4"
    },
    {
        "name": "Captain America: Brave New World",
        "year": "2025",
        "genres": "Action/Sci-Fi",
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.CV7jQsi1MGPPBcVoVvVTygHaL9?pid=Api&P=0&h=180",
        "rating": "5.6"
    },
    {
        "name": "Uncharted",
        "year": "2022",
        "genres": "Action/Adventure",
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.iO1kgpC_XQKLS0AwOHxXCAHaKq?pid=Api&P=0&h=180",
        "rating": "6.3"
    },
    {
        "name": "Thunderbolts",
        "year": "2025",
        "genres": "Action/Adventure",
        "image_url": "https://tse3.mm.bing.net/th/id/OIP.lJSVnyIQ4T7buhKieIOHwQHaLH?pid=Api&P=0&h=180",
        "rating": "7.3"
    },
    {
        "name": "Money Heist",
        "year": "2017",
        "genres": "Crime/Drama",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.Gdob45o6EVN_PbQoxd9iUwHaLH?pid=Api&P=0&h=180",
        "rating": "8.2"
    },
    {
        "name": "The Tomorrow War",
        "year": "2021",
        "genres": "Action/Sci-Fi",
        "image_url": "https://tse2.mm.bing.net/th/id/OIP.4YSHde4QjUeNFDhZ0PtV5AHaLH?pid=Api&P=0&h=180",
        "rating": "6.6" 
    },
    {
        "name": "Final Destination",
        "year": "2000",
        "genres": "Horror/Thriller",
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.ku0OAfvu6XrL47oodfe_PgHaLH?pid=Api&P=0&h=180",
        "rating": "6.7"
    },
    {
        "name": "Jumanji: The Next Level",
        "year": "2019",
        "genres": "Adventure/Comedy",
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.fibk-79Ppbi19QcY63Oh_wHaLH?pid=Api&P=0&h=180",
        "rating": "7.0"
    },
    {
        "name": "Extraction",
        "year": "2020",
        "genres": "Action/Thriller",
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.KS7bDlvjQGLLJoC4F3yNkQHaLH?pid=Api&P=0&h=180",
        "rating": "6.8"
    },
    {
        "name": "Oppenheimer",
        "year": "2023",
        "genres": "Biography/Drama",
        "image_url": "https://tse1.mm.bing.net/th/id/OIP.mXI13ij5WGeq3Z-nPw8_PwHaJ4?pid=Api&P=0&h=180",
        "rating": "8.3"
    },
    {
        "name": "Spider-Man: Across the Spider-Verse",
        "year": "2027",
        "genres": "Animation/Superhero",
        "image_url": "https://tse1.mm.bing.net/th/id/OIF.zxUqnShZcD3CFIhLXYzN9w?pid=Api&P=0&h=180",
        "rating": "8.5"  
    },
    {
        "name": "Fantastic Four",
        "year": "2025",
        "genres": "Action/Sci-Fi",
        "image_url": "https://tse4.mm.bing.net/th/id/OIP.dAZ3LJ7qSFSnJu4z_ZpH_wHaLH?pid=Api&P=0&h=180",
        "rating": "7.4"
    }
]

for i, data in enumerate(movies, start=19):
    filename = f"Movies/Postloaded Movies/movie {i}.json"

    with open(filename, "w") as f:
        json.dump(data, f, indent=4)

    print(f"{filename} created.")

print("All files are created.")