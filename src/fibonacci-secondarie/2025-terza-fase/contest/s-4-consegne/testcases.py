import random
import json
random.seed(0)

def solve(N, P):
    maxP = max(P)
    dp = [float('inf')] * (N + 1)
    dp[0] = 0
    for i in range(N+1):
        cost = 1
        dp[i] = i * (i + 1) / 2
        for j in reversed(range(i-1)):
            dist = i - j
            dp[i] = min(dp[j] + cost + P[j + 1], dp[i])
            cost += dist
            if dist * dist > 4 * maxP:
                break
    return min(dp[N], dp[N - 1])

testcases = []
n = [5, 2, 9, 14, 20, 41, 75, 150, 300, 500]
m = [9, 9, 1, 15, 20, 1,  25,  25, 30,  30]
T = [0, 0, 1, 1,  0,  1,  1,   0,  0,   0]

for N,M,type in zip(n,m,T):
    if type == 0:
        P = [random.randint(1, M) for _ in range(N)]
    elif type == 1:
        P = [random.randint(1, M)] * N
    testcases.append({
       "N": N,
       "M": max(P),
       "P": P,
       "L": [0]*(N+1),
       "next": list(range(N)),
       "pos": 0,
       "time": 0,
       "cargo": 0,
       "sent": 0,
       "cost": 0,
       "best": solve(N, P),
    })

print(json.dumps(testcases))
