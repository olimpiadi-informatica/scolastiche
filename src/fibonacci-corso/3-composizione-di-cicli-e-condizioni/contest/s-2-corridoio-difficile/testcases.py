import random
import json
random.seed(0)
testcases = []
type = ["gen", "on", "off", "gen"]
N = [5, 7, 10, 14]
M = [2, 4, 3, 5]
for t,n,m in zip(type,N,M):
    pos = 0
    if t == "off":
        lights = [0 for _ in range(n)]
    elif t == "on":
        lights = [1 for _ in range(n)]
    else:
        lights = random.choices([0, 0, 1], k=n)
    R = random.sample(range(1,n+1), m)
    testcases.append({"N": n, "M": m, "pos": pos, "dir": 1, "light": lights, "door": [False for _ in range(n)], "switch": random.choices([0, 1], k=2*n), "hand": -1, "rescue": R})
print(json.dumps(list(testcases)))
