import json

genres = [
    {"genre": "Action", "number": 87, "url": "https://wallpapers.com/images/featured-full/john-wick-jeaidqurrfx52d3u.jpg"},
    {"genre": "Comedy", "number": 42, "url": "https://s.yimg.com/ny/api/res/1.2/VCcR3j5xbu4s9b53M4Xcyw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk7Y2Y9d2VicA--/https://media.zenfs.com/en/comingsoon_net_477/0cf1d75df2f09439f02622a62bd2f5f1"},
    {"genre": "Thriller", "number": 76, "url": "https://i.ytimg.com/vi/fi6LWEfJHO0/mqdefault.jpg"},
    {"genre": "Horror", "number": 55, "url": "https://theartofcostume.com/wp-content/uploads/2021/10/scream-film-640x360.jpg"},
    {"genre": "Adventure", "number": 91, "url": "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/KONGSKULLISLAND1.jpg"},
    {"genre": "Animated", "number": 63, "url": "https://wallpapers.com/images/high/minions-bob-kevin-stuart-playing-cqudnzsayab55pnq.webp"},
    {"genre": "Crime", "number": 48, "url": "https://www.moviezone.cz/obr/YXJ0aWNsZU1haW4vMjU0NzM1"},
    {"genre": "SCI-Fi", "number": 82, "url": "https://i.ytimg.com/vi/r16oBHKEDqE/mqdefault.jpg"}
]

for i, data in enumerate(genres, start=1):
    filename = f"Categories/category {i}.json"

    with open(filename, "w") as f:
        json.dump(data, f, indent=4)

    print(f"{filename} created.")

print("All files are created.")