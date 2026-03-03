import math
import random
import json

def solve(N,V,G):
    reachable = [0]
    for i in range(1,N):
        for j in reachable:
            if V[j] + (i-j)*G[j] > V[i]:
                reachable.append(i)
                break
    return max(V[i] + (N-i)*G[i] for i in reachable)

testcases = []

v = [[10, 7, 11, 10], [6,4,7,5,9], [2,1,3,5,6,12], [16, 15, 10, 17, 20, 20, 26]]
g = [[1, 3, 3, 2], [1,2,3,4,8], [1,2,3,4,3,6], [1, 2, 1, 3, 4, 5, 9]]
for V,G in zip(v,g):
    n = len(V)
    sol = solve(n,V,G)
    testcases.append({"N": n, "V": V, "G": G, "pref": [None]*n, "next": list(range(n)), "pos": 0, "taken": -1, "curval": -1, "sol": sol})
print(json.dumps(list(testcases)))
