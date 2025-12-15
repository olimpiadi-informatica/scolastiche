import json

names = ["anguria", "banana", "fragola", "patata", "carota", "melanzana"]
perms = [
    [0, 1, 2, 3, 4, 5],  
    [2, 0, 1, 4, 5, 3],  
    [0, 2, 1, 4, 3, 5],  
    [1, 2, 0, 5, 3, 4],  
]

print(json.dumps([{
    "perm": perm,
    "names": names
    } for perm in perms]))
