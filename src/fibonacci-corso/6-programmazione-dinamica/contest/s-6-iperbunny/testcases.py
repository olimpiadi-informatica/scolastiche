from random import randint, seed
import json
import math

seed(0)

N = [2, 5, 10, 25, 50, 100, 200, 500, 800, 1000]
INF = [15, 30, 25, 10, 20, 100, 300, 1000, 3000, 10000]
type = [0, 0, 0, 1, 0, 1, 0, 0, 0, 0]

params = [N, INF, type]

def solve(N, A, B):
    A = [0] + A
    B = [0] + B
    TA = [0, 0]
    TB = [0, 0]
    
    for i in range(N):
        TA[(i+1)%2] = min(abs(A[i+1]-A[i]) + TA[i%2], abs(A[i+1]-B[i]) + TB[i%2])
        TB[(i+1)%2] = min(abs(B[i+1]-A[i]) + TA[i%2], abs(B[i+1]-B[i]) + TB[i%2])

    return min(TA[N%2], TB[N%2])

def generate(n, INF, type):
    args = set(locals()) | set(['args'])

    # base generator
    N = n
    A = []
    B = []

    if type == 1:
        # rottura greedy
        goal = randint((INF*4)//5, INF)
        for i in range(N):
            A.append(randint(goal-2, goal+2))
            B.append(randint(1, INF//5))
    else:
        for i in range(N):
            A.append(randint(1, INF))
            B.append(randint(1, A[i]))

    VA = [0 for _ in range(N)]
    VB = [0 for _ in range(N)]

    # additional state for visualizer
    sol = solve(N, A, B)

    return {k:v for k,v in locals().items() if k not in args}

testcases = []
for args in zip(*params):
    testcases.append(generate(*args))
print(json.dumps(list(testcases)))
