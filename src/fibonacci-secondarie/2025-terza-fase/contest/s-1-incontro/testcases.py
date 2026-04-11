import random
import json
random.seed(0)

CNT = 10
N = [5, 9, 14, 21, 25, 50, 100, 200, 500, 1000]

testcases = [
    {"N": 5, "B": 1, "C": 4},
    {"N": 9, "B": 1, "C": 9},
    {"N": 14, "B": 11, "C": 2},
    {"N": 21, "B": 5, "C": 17},
    {"N": 25, "B": 20, "C": 8},
]

for i in range(5, CNT):
    B, C = random.sample(range(1, N[i]), 2)
    testcases.append({"N": N[i], "B": B, "C": C})


print(json.dumps(testcases))