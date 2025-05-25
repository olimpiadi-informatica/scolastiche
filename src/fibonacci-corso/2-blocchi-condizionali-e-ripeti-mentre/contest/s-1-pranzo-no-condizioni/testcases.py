import random
import json
random.seed(0)
testcases = []
verdure = {
    "carota": "verdura",
    "patata": "verdura",
    "melanzana": "verdura",
}
frutti = {
    "mela": "frutta",
    "banana": "frutta",
    "fragola": "frutta",
}
food_types = {**verdure, **frutti}
type = [food_types, verdure, frutti, food_types]
N = [5, 10, 20, 40]
for t,n in zip(type,N):
    queue = random.choices(list(t), k=n)
    testcases.append({"food_types": food_types, "queue": queue, "pos": 0, "N": n})
print(json.dumps(list(testcases)))
