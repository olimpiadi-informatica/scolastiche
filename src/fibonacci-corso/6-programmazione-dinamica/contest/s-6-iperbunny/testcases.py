from random import randint, seed, sample
import json
import math

seed(0)

N = [4, 6, 8, 10]
INF = [15, 30, 25, 10]
type = [0, 0, 0, 1]

params = [N, INF, type]

def solve(N, H, A, B):
    A = [H] + A + [H]
    B = [H] + B + [H]
    TA = [0, 0]
    TB = [0, 0]
    
    for i in range(N+1):
        TA[(i+1)%2] = min(abs(A[i+1]-A[i]) + TA[i%2], abs(A[i+1]-B[i]) + TB[i%2])
        TB[(i+1)%2] = min(abs(B[i+1]-A[i]) + TA[i%2], abs(B[i+1]-B[i]) + TB[i%2])

    return min(TA[(N+1)%2], TB[(N+1)%2])

def wrong(N, H, A, B):
    A = [H] + A + [H]
    B = [H] + B + [H]
    C = A
    t = 0
    for i in range(1, N+2):
        if abs(A[i]-C[i-1]) < abs(B[i]-C[i-1]):
            t += abs(A[i]-C[i-1])
            C = A
        else:
            t += abs(B[i]-C[i-1])
            C = B
    return t

def generate(n, INF, type):
    args = set(locals()) | set(['args'])

    while True:
        # base generator
        N = n
        A = [0]*N
        B = [0]*N
        for i in range(N):
            B[i], A[i] = sorted(sample(range(1, INF), 2))

        VA = [0]*N
        VB = [0]*N
        DA = [0]*N
        DB = [0]*N
        H = (randint(min(B), max(A)) + randint(min(B), max(A))) // 2
        V = [0, 0]
        D = [0, 0]

        # additional state for visualizer
        sol = solve(N, H, A, B)
        posx = 0
        posy = H
        time = 0

        if sol != wrong(N, H, A, B):
            return {k:v for k,v in locals().items() if k not in args}

testcases = []
for args in zip(*params):
    testcases.append(generate(*args))
print(json.dumps(list(testcases)))
