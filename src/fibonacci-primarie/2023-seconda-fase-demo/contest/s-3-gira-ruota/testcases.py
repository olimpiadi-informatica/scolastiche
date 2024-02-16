import random
import json

random.seed(0)
testcases = []
S = [5, 9, 13]
N = [3, 4, 6]
for s, n in zip(S, N):
    P = [random.randrange(10) for i in range(s)]
    F = sorted(random.sample(range(s), k=n))
    c = [sum(P[(F[i] - j) % s] for i in range(n)) for j in range(s)]
    c.sort()
    c = c[1]
    G = [j for j in range(s) if sum(P[(F[i] - j) % s] for i in range(n)) <= c]
    testcases.append(
        {"S": s, "N": n, "C": c, "prizes": P, "friends": F, "pos": 0, "good_pos": G}
    )
print(json.dumps(list(testcases)))
