import random
import json
random.seed(0)
testcases = []
RS = [
    ([0, 1, 0, 1, 0, 0, 0], 5),
    ([0, 0, 1, 0, 0, 0, 0], 5),
]
for R,n in RS:
    testcases.append({"rocks": R, "pos": 0, "flight": 0, "N": n})
print(json.dumps(list(testcases)))
