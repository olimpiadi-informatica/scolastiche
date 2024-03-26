import random
import json
random.seed(0)
testcases = []
type = [False, True, False]
N = [8, 20, 50]
for t,n in zip(type,N):
    opt = [1,2] if t else [0,1,2,3]
    balls = opt + random.choices(opt, k=n-len(opt))
    random.shuffle(balls)
    testcases.append({"balls": balls, "placement": [0 for _ in range(n)], "pos": 0, "trashed" : 0, "deposited" : 0, "N": n})
print(json.dumps(list(testcases)))
