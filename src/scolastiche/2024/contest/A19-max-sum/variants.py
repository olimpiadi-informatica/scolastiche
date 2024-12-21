import json
import sys
import random


def get_random_array(n, m):
    return [random.randint(0, m) for i in range(n)]


def solve(v):
    # indice zero ho preso il precedente
    ma = [0, 0]
    for x in v:
        ma.append(max(ma[-1], ma[-2] + x))
    return ma[-1], ma[2:]


def build_variant(seed):
    random.seed(seed)
    test1 = get_random_array(14, 1)
    test2 = get_random_array(14, 20)
    ans1 = solve(test1)[0]
    ans2, arr = solve(test2)
    return dict(
        test1=test1,
        ans1=ans1,
        test2=test2,
        ans2=ans2,
        arr=arr
    )


def build_variants():
    return [build_variant(i) for i in range(20)]


print(json.dumps(build_variants()))
