import os
import json

data_list = [

    {"name": "John Wick: Chapter 3 - Parabellum", "year": "2019", "type": "Action/Thriller", "time": "2h 11m", "url": "poster 1.webp"},
    
    {"name": "Pirates of the Carribean", "year": "2017", "type": "Adventure/Action", "time": "2h 9m", "url": "https://wallpapers.com/images/high/cool-jack-sparrow-simper-zhfluahva36u4pzn.webp"}, 
    
    {"name": "Harry Potter and the Deathly Hallows: Part 2", "year": "2011", "type": "Fantasy/Adventure", "time": "2h 10m", "url": "https://wallpapers.com/images/high/harry-potter-characters-using-magic-6nhsunyyq4kib7u8.webp"}, 
    
    {"name": "Stranger Things: Season 5", "year": "2016", "type": "Horror", "time": "9 Episodes", "url": "https://wallpapers.com/images/high/netflix-stranger-things-epic-poster-duhss5mcaaa3x8yl.webp"}, 
    
    {"name": "Batman: The Dark Knight Rises", "year": "2012", "type": "Action/Thriller", "time": "2h 44m", "url": "https://wallpapers.com/images/high/batman-arkham-knight-8adpa8u3m2phkhx4.webp"}
]

os.mkdir("Posters")

for i, data in enumerate(data_list, start=1):
    filename = f"Posters/poster {i}.json"

    with open(filename, "w") as f:
        json.dump(data, f, indent=4)

    print(f"{filename} created.")

print("All files are created.")


