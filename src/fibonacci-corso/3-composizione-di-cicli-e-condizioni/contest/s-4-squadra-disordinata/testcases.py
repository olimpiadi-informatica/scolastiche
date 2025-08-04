import random
import json
random.seed(0)
testcases = []
type = [1, 1, 1, 1]
N = [5, 7, 10, 14]
for t,n in zip(type,N):
    heights = range(20, 40)
    data = [None]
    num = n
    H = random.choices(heights, k=num)
    H.sort(reverse=True)
    data.append({"H": H, "taken": [0 for _ in range(num)], "pos": 0, "taketot": 0, "take2": 0})
    num = random.randint(n+1, 2*n)
    H = [random.randint(x+1, 40) for x in H]
    H += random.choices(heights, k=num-n)
    random.shuffle(H)
    data[0] = {"H": H, "taken": [0 for _ in range(num)], "pos": 0, "taketot": 0, "take2": 0}
    testcases.append({"data": data})
print(json.dumps(list(testcases)))
