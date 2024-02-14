import random
import json
random.seed(0)
testcases = []
type = [False, True, False]
N = [5, 10, 20]
for t,n in zip(type,N):
    D = [1 for _ in range(n)] if t else random.choices(range(2), k=n)
    O = [False for _ in range(n)]
    testcases.append({"door": D, "open": O, "pos": 0, "N": n, "eaten": False})
print(json.dumps(list(testcases)))
