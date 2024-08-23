from random import randint, seed
import json
import math

seed(42)

L = [2, 5, 10, 10, 10, 90, 900, 900, 900, 900]
U = [3, 10, 20, 20, 20, 100, 1000, 1000, 1000, 1000]
type = [0, 1, 2, 3, 0, 3, 0, 2, 0, 4]

params = [L, U, type]

def solve(n, m, k):
    if n > m:
        n, m = m, n
    d = min(k, m - n)
    k -= d
    m -= d
    n -= k // 2
    m -= k // 2 + k % 2
    return n*m

def generate(L, U, type):
    args = set(locals()) | set(['args'])

    # base generator
    if type == 1:
        # M = 1
        N = randint(L, U)
        M = 1
    elif type == 2:
        #quadrato
        N = M = randint(L, U)
    elif type == 3:
        #rettangolo stretto e allungato
        M = randint(L, U)
        N = randint(1, L)
    else:
        #generico
        N = randint(L, U)
        M = randint(L, U)

    if type == 4:
        K = randint(max(N+M-5, 1), N+M-2)
    else:
        K = randint(1, N+M-2)

    # additional state for visualizer
    sol = solve(N, M, K)
    cuts = []

    state = {k:v for k,v in locals().items() if k not in args}
    state["initialK"] = K
    return state

testcases = []
for args in zip(*params):
    testcases.append(generate(*args))
print(json.dumps(list(testcases)))
