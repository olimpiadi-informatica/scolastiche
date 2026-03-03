from random import randint, sample, seed
import json
import math

seed(0)

N = [2, 5, 7, 10]
INF = [15, 30, 25, 10]
type = [0, 0, 0, 0]

params = [N, INF, type]

def solve(N, H, A, B):
    sol = 0
    for x in range(N):
        sol += min(abs(H - A[x]), abs(H - B[x])) * 2
    return sol

def generate(n, INF, type):
    args = set(locals()) | set(['args'])

    # base generator
    N = n
    A = []
    B = []

    for _ in range(N):
        a, b = sorted(sample(range(1, INF), 2))
        A.append(b)
        B.append(a)

    H = (randint(min(B), max(A)) + randint(min(B), max(A))) / 2

    # additional state for visualizer
    sol = solve(N, H, A, B)
    posx = 0
    posy = H
    time = 0

    return {k:v for k,v in locals().items() if k not in args}

testcases = []
for args in zip(*params):
    testcases.append(generate(*args))
print(json.dumps(list(testcases)))
