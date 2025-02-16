import random
import json
random.seed(0)
testcases = []
type = ["general", "fullon", "offend", "general"]
N = [5, 10, 20, 40]
for t,n in zip(type,N):
    if t == "offend":
        lights = [0 for _ in range(n)]
        pos = n-1
    elif t == "fullon":
        lights = [1 for _ in range(n)]
        pos = random.randint(1, n-1)
    else:
        lights = random.choices([0, 0, 1], k=n)
        pos = random.randint(1, n-1)
    lights[pos-1] = 1
    testcases.append({"N": n, "pos": pos, "dir": 1, "light": lights, "door": [False for _ in range(n)], "switch": random.choices([0, 1], k=2*n)})
print(json.dumps(list(testcases)))
