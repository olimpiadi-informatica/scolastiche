from random import randint, seed
import json
import math
seed(0)

N = [5, 7, 10, 20, 30, 100, 1000, 1000, 1000, 1000]
INF = [8, 10, 20, 20, 30, 10000, 10000, 10000, 10000, 10000]
type = [2, 2, 2, 2, 2, 2, 0, 2, 1, 2]

params = [N, INF, type]

def generate(n, INF, type):
    args = set(locals()) | set(['args'])

    # base generator
    N = n
    H = []
    if type == 0:
        H.append(randint(1, 100))
        for i in range(1, N):
            H.append(H[i-1] + randint(0, 10) + 1)
    elif type == 1:
        for i in range(N):
            if i%2:
                H.append(randint(0, 100)) 
            else:
                H.append(randint(INF - 100, INF))
    else:
        H.append(0)
        H.append(randint(2, INF//2))
        H.append(H[1] - randint(1, 2))
        H.append(randint(INF//2+1, INF-1))
        H.append(H[3] + 1)
        for i in range(5, N):
            H.append(randint(0, INF)) 

    # additional state for visualizer
    scale = 10 / max(H)
    rot = 0
    posx = 0
    posy = H[0]
    time = 0
    energy = 0
    sol = max(H) - H[0]
    charging = False

    return {k:v for k,v in locals().items() if k not in args}

testcases = []
for args in zip(*params):
    testcases.append(generate(*args))
print(json.dumps(list(testcases)))
