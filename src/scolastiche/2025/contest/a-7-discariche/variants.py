import json
import random

variants_input = [
    dict(l = 18, k1 = 4, n = 8, m = 6, k2 = 9),
    dict(l = 19, k1 = 4, n = 9, m = 5, k2 = 9),
    dict(l = 19, k1 = 5, n = 8, m = 6, k2 = 8),
    dict(l = 18, k1 = 5, n = 9, m = 5, k2 = 8),
]

random.seed(42)

def solve(n, m, v):
    d = {}
    for i in range(m):
        for j in range(n):
            if v[i][j] > 0:
                d[i,j] = v[i][j]
    sol = 0
    for i in range(m):
        for j in range(n):
            found = False
            for k, x in d.items():
                if abs(k[0]-i) + abs(k[1]-j) <= x:
                    found = True
                    break
            if not found:
                sol += 1
    return sol

def add(n, m, v, k):
    x, y = random.randint(0,m-1), random.randint(0,n-1)
    while v[x][y] > 0:
        x, y = random.randint(0,m-1), random.randint(0,n-1)
    v[x][y] = k

tries = 0

def gen(n, m, d, k, banned):
    assert k >= d
    global tries
    sol = 0
    while sol in banned and tries < 50:
        v = [[0 for __ in range(n)] for _ in range(m)]
        for i in range(1,d+1):
            add(n, m, v, i)
        for i in range(d,k):
            add(n, m, v, min(random.randint(1, d-1),random.randint(1, d-1)))
        sol = solve(n, m, v)
        tries += 1
    tries -= 1
    banned.add(sol)
    return v, sol

ban1 = set([0,1,2,7,8,9,10,11,12])
ban2 = set([0,1,2,3,4,5,11,12,13,14,15])

def build_variant(l, n, m, k1, k2):
    global tries
    part1, sol1 = gen(l, 1, 3, k1, ban1)
    part2, sol2 = gen(n, m, 4, k2, ban2)
    k = 1
    return dict(
        l=l,
        n=n,
        m=m,
        part1=part1,
        ans1=sol1,
        wrong1=list(random.sample([i for i in range(10) if i != sol1], 4)),
        part2=part2,
        ans2=sol2,
        wrong2=list(random.sample([i for i in range(13) if i != sol2], 4)),
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
