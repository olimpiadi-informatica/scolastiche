import random
import json
random.seed(0)

CNT = [2, 1, 4, 7]

testcases = []

for i in CNT:
    testcases.append({"N": i, "x": 0, "y": 0, "dx": 1, "dy": 0, "a": 0, "eat": False})

print(json.dumps(testcases))
