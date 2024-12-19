import json

perms = [
        [0, 1, 2, 3],
        [0, 1, 3, 2],
        [3, 1, 2, 0],
        [1, 3, 0, 2],
        ]

print(json.dumps([{
    "perm": perm
    } for perm in perms]))
