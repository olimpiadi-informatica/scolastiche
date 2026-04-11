import random
import json
random.seed(0)

CNT = 10

def solve(N, L, P):
    min_price = P[1]
    costo = 0

    for i in range(1, N + 1):
        if P[i] < min_price:
            min_price = P[i]
        costo += min_price * L[i]
    
    return costo

testcases = [
    {"roccia": 1, "N": 3, "L": [-1, 1, 2, 1], "P": [-1, 2, 1, 3], "ans": solve(3, [-1, 1, 2, 1], [-1, 2, 1, 3])},
    {"roccia": 1, "N": 3, "L": [-1, 3, 2, 5], "P": [-1, 4, 6, 2], "ans": solve(3, [-1, 3, 2, 5], [-1, 4, 6, 2])},
]

n = [5, 7, 10, 20, 50, 100, 200, 500]
m = [9, 9, 9,  99, 99, 99,  99,  99]
t = [2, 3, 1,  1,  2,  3,   1,   1]
for N,M,T in zip(n, m, t):
    L = [-1] + [random.randint(1, M) for _ in range(N)]
    P = [-1] + [random.randint(1, M) for _ in range(N)]
    if T == 1:
        mn = min(P[3:])+1
        P[1] = random.randint(mn, max(M-1, mn+1))
        P[2] = random.randint(P[1]+1, max(M, P[1]+2))
    elif T == 2:
        P[1] = min(P[2:])
    elif T == 3:
        P = [-1] + list(sorted(P[1:], reverse=True))

    testcases.append({"roccia": 1, "N": N, "L": L, "P": P, "ans": solve(N, L, P)})

for i in range(CNT):
    L = testcases[i]["L"][1:]
    k = sum(L) / len(L)
    H = [0]
    for x in L:
        H.append(H[-1] + x-k)
    lo = min(H)
    hi = max(H)
    H = [(x-lo)/(hi-lo) for x in H]
    testcases[i]["H"] = H

print(json.dumps(testcases))
