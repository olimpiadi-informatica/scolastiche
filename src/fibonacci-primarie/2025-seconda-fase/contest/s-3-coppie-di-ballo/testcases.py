import random
import json
random.seed(0)

N = [6, 4, 8, 10]

testcases = []

for n in N:
    H = random.sample(range(20, 41), n*2)
    F = ["Fibonacci"]*n + ["Turing"]*n
    random.shuffle(F)
    testcases.append({"N": n, "offset": -1, "queue": [{"farm": F[i], "height": H[i]} for i in range(n*2)], "pairs": [], "desc": ", ".join(F)})

print(json.dumps(testcases))
