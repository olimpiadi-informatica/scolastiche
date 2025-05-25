import random
import json
random.seed(0)
testcases = []
n = 6
R = [0, 1, 0, 0, 1, 0, 0, 0]
testcases.append({"rocks": R, "pos": 0, "flight": 0, "N": n})
print(json.dumps(list(testcases)))
