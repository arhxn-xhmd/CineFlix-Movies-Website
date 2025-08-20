import json

shows = [
    {"name": "Planet Earth II Season 1 - Island", "views": "305K Viewers","src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-lwhW8MJuhc7M24IDA9pfx55IFc52BKxGK-_eZmmQOfoMNMsji99vh9D2W-FOf0rWjg&usqp=CAU", "logo": "img/bbc logo.jpeg"}, 
    {"name": "Game of Thrones Season 5 - Mother's Mercy", "views": "1.7M Viewers","src": "https://images.indianexpress.com/2015/07/jonsnow_new_big.jpg?w=414", "logo": "img/hbo logo.jpg"}, 
    {"name": "Vikings Season 2 - What Might Have Been", "views": "468K Viewers","src": "https://i.pinimg.com/236x/26/24/5b/26245bb0de20b603841d4d554e5d26be.jpg", "logo": "img/hbo logo.jpg"}
]

for i, data in enumerate(shows, start=1):
    filename = f"Live Shows/show {i}.json"

    with open(filename, "w") as f:
        json.dump(data, f, indent=4)

    print(f"{filename} created.")

print("All files are created.")