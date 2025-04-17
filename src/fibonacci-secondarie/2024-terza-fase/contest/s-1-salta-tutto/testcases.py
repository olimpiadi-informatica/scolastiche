import random
import json
random.seed(0)
testcases = []
type = ["vuoto", "pieno", "random", "random", "random", "random", "random", "vuoto", "pieno", "random"]
N = [5, 10, 20, 35, 50, 100, 200, 400, 700, 1000]
for t,n in zip(type,N):
    R = [0 for _ in range(n+2)]
    if t == "pieno":
        for i in range(1, n, 2):
            R[i] = 1
    elif t == "random":
        for i in range(1, n):
            if R[i - 1] == 0:
                R[i] = random.randint(0, 1)
    testcases.append({"rocks": R, "pos": 0, "flight": 0, "N": n})
print(json.dumps(list(testcases)))
