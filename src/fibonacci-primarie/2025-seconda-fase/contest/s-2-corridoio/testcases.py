import random
import json
random.seed(0)

N = [6, 4, 8, 10]

testcases = []

for n in N:
    l, h = sorted(random.sample(range(1, n-1), 2))
    if n >= 8:
        l, h = sorted(random.sample(range(2, n-2), 2))
        l -= 1
        h += 1
    L = [random.choice([True, False]) for _ in range(l-1)] + [False] + [True]*(h-l+1) + [False] + [random.choice([True, False]) for _ in range(n-h-2)]
    pos = random.randint(l, h)
    C = [random.choice([True, False]) for _ in range(n)]
    if n >= 8:
        C[l] = False
        C[h] = False
        C[random.randint(l+1, h-1)] = True
    elif n == 4:
        C[l] = False
        C[h] = True
    else:
        C[l] = True
        C[h] = True
    lightDesc = ', '.join(["illuminata" if x else "buia" for x in L])
    carrotDesc = ', '.join([str(i+1) for i in range(n) if C[i]])
    testcases.append({"N": n, "light": L, "pos": pos, "dir": 1, "carrot": C, "lightDesc": lightDesc, "carrotDesc": carrotDesc})

print(json.dumps(testcases))
