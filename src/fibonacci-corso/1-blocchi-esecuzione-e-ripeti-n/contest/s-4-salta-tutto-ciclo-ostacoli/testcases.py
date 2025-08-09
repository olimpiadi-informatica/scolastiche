import random
import json
random.seed(0)
testcases = []
RS = [
    ([0, 1, 0, 0, 0], 2),
    ([0, 1, 0, 1, 0, 1, 0, 0], 6),
    ([0, 0, 1, 0, 1, 0, 0], 5),
    ([0, 1, 0, 1, 0, 0, 0, 1, 0, 0], 9),
]
for R,n in RS:
    testcases.append({"rocks": R, "pos": 0, "flight": 0, "N": n, "M": sum(R)})
print(json.dumps(list(testcases)))
