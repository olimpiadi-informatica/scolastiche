import json
import sys
import random


def get_random_array(n):
    x = [random.randint(0, 9) for i in range(n-1)]
    i = random.randint(0, n-2)
    x.insert(i, x[i])
    return x


def solve1(v):
    ans = 0
    for i in range(len(v)-1):
        if v[i] == v[i+1]:
            ans += 1
        else:
            ans += v[i+1]-v[i]
    return ans


def solve2(len):
    return len-2+9+9+1


def build_variant(seed):
    random.seed(seed)
    array1 = get_random_array(10)
    len2 = random.randint(11, 13)
    return dict(
        array1=array1,
        ans1=solve1(array1),
        len2=len2,
        ans2=solve2(len2)
    )


def build_variants():
    return [build_variant(i) for i in range(20)]


print(json.dumps(build_variants()))
