import random
import json
import math
random.seed(0)

MIN = [2, 2, 2, 500, 1e4-500, 1e6-500, 1e7, 1e11, 1e15-1e9, 1e15-1e9]
MAX = [5, 10, 20, 1e3, 1e4, 1e6, 1e9, 1e12, 1e15, 1e15]
type = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

params = [MIN, MAX, type]

def solve(N):
    risposta = 1
    while N > 2:
        if N%2 == 1:
            N += 1
        else:
            N /= 2
        risposta += 1
    return risposta

def generate(MIN, MAX, type):
    args = set(locals()) | set(['args'])

    # base generator
    N = random.randint(int(MIN), int(MAX))

    # additional state for visualizer
    sol = solve(N)

    return {k:v for k,v in locals().items() if k not in args}

testcases = []
for args in zip(*params):
    testcases.append(generate(*args))
print(json.dumps(list(testcases)))
