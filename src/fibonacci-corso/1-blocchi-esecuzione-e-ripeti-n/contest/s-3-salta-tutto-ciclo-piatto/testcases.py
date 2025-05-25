import random
import json
random.seed(0)
testcases = []
N = [3, 5, 6, 8]
for n in N:
    testcases.append({"rocks": [0]*(n+1), "pos": 0, "flight": 0, "N": n})
print(json.dumps(list(testcases)))
