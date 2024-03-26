import random
import json
random.seed(0)
testcases = []
type = [1, 2, 3]
N = [10, 20, 60]
for t,n in zip(type,N):
    heights = range(20, 41, 3 if t == 1 else 1)
    data = []
    for _ in range(2):
        num = random.randint(n*2//3, n)
        H = random.sample(heights, num) if t == 2 else random.choices(heights, k=num)
        H.sort()
        data.append({"H": H, "pos": 0, "presi": [], "scartati": [], "scelta": []})
    i = 0
    j = 0
    sol = 0
    while i < len(data[0]["H"]) and j < len(data[1]["H"]):
        if   data[0]["H"][i] < data[1]["H"][j]:
            i += 1
        elif data[0]["H"][i] > data[1]["H"][j]:
            j += 1
        else:
            sol += 1
            i += 1
            j += 1
    testcases.append({"data": data, "sol": sol})
print(json.dumps(list(testcases)))
