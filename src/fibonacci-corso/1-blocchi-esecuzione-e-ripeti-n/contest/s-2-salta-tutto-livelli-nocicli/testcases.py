import random
import json
random.seed(0)
testcases = []
RS = [
    ([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 4),
    ([0, 1, 0, 1, 0, 1, 0], 6),
    ([0, 0, 1, 0, 0, 1, 0, 0, 0, 0], 7),
    ([0, 1, 0, 0, 0, 1, 0, 0, 0], 6),
]
for R,n in RS:
    testcases.append({"rocks": R, "pos": 0, "flight": 0, "N": n})
print(json.dumps(list(testcases)))
