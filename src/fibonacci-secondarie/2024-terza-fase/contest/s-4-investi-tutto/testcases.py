import math
import random
import json

# Parametri:
# N - N dell'input
# type - 0 se G e V è random (con skew)
#      - 1 se V[i] = costante per ogni i
#      - 2 se G[i] = a or G[i] = b per ogni i
#      - 3 dalla soluzione
def gen(N, MaxG, type):
    while True:
        if type == 0:
            G = [random.randint(0, 2+(MaxG-2)*i//(N-1)) for i in range(N)]
            V = [random.randint(0, 9+2*i+(MaxG-2)*i*i//(2*N)) for i in range(N)]
            G[0] = max(G[0], 1)
            V[0] = max(V[0], random.randint(0, 5))
        elif type == 1:
            V = [random.randint(0,10*N)] * N
            G = [random.randint(0, MaxG) for _ in range(N)]
            G[0] = min(G[0], random.randint(0, MaxG))
        elif type == 2:
            a = random.randint(1, MaxG//2)
            b = random.randint(MaxG//2+1, MaxG)
            G = [a] * random.randint(1,min(9,N//2))
            G += [random.choice([a, b]) for _ in range(N-len(G))]
            V = [random.randint(0,10*N)] * N
            V[0] = min(V[0], random.randint(0,10*N))
        elif type == 3:
            G = [0] * N
            V = [0] * N
            V[-1] = random.randint(0, 10*N)
            G[-1] = random.randint(0, MaxG)
            for i in range(N-2,-1,-1):
                x = random.randint(i+1, N-1)
                G[i] = random.randint(0, G[x]-1) if G[x] > 0 else random.randint(0, MaxG)
                a, b = 1 + (i-x)*G[i], (N-x)*G[x] - 1 + (i-N)*G[i]
                V[i] = V[x] + random.randint(a, b) if 0 <= a <= b else random.randint(0, 10*N)
        if solve(N,V,G) > V[0] + N*G[0]:
            break
    return V, G

def solve(N,V,G):
    reachable = [0]
    for i in range(1,N):
        for j in reachable:
            if V[j] + (i-j)*G[j] > V[i]:
                reachable.append(i)
                break
    return max(V[i] + (N-i)*G[i] for i in reachable)

def solve2(N,V,G):
    best = [V[i] + (N-i)*G[i] for i in range(N)]
    for i in range(N-2,-1,-1):
        for j in range(i+1,N):
            if V[i] + (j-i)*G[i] > V[j]:
                best[i] = max(best[i], best[j])
    return best[0]

random.seed(42)
testcases = []

type = [1, 2, 3, 0, 0, 1, 2, 3, 0, 0]
M = [10, 10, 10, 10, 10, 100, 100, 100, 100, 100]
N = [4, 5, 6, 8, 10, 15, 20, 30, 40, 50]
for t,n,g in zip(type,N,M):
    V, G = gen(n,g,t)
    sol = solve(n,V,G)
    testcases.append({"N": n, "V": V, "G": G, "pref": [None]*n, "next": list(range(n)), "pos": 0, "taken": -1, "curval": -1, "sol": sol})
print(json.dumps(list(testcases)))
