import random
import json
random.seed(0)
testcases = []
type = [1, 2, 3]
N = [6, 20, 50]
for t,n in zip(type,N):
    if t == 1:
        H = random.sample(range(1,8), n-1)
        H.sort()
        H.append(8)
    else:
        H = [random.randint(1,10) for _ in range(n)]
        H[0] = 1
        for i in range(1,n):
            if H[i]-H[i-1] > i*10//n + 1:
                H[i] = H[i-1] + i*10//n + 1
    if t < 3:
        d = max(H[i]-H[i-1] for i in range(1,n-1))
        if H[-1]-H[-2] <= d:
           H[-1] = H[-2] + d+1
    C = [0 for _ in range(n)]
    sol = list(C)
    dbest = H[0]
    ibest = 0
    sol[0] += 1
    for i in range(1,n):
        if H[i] - H[i-1] > dbest:
            sol[i] += 1
            dbest = H[i] - H[i-1]
            ibest = i
    sol[ibest] += 1
    testcases.append({"N": n, "H": H, "C": C, "sol": sol, "carrots": [], "pos": -1})
print(json.dumps(list(testcases)))
