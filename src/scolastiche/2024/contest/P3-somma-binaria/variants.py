import json
import random
import math

variants_input = [dict(s=s) for s in range(20)]


def solve(l, r):
    # assuming l being a power of 2
    a = [0] * r
    for i in range(l, r):
        j = i
        while j != 0:
            a[j] = 1
            j //= 2

    ans = 0
    while l != 0:
        ans += r - l
        r = math.ceil(r / 2)
        l //= 2

    assert ans == sum(a)
    return ans


def assert_uniq(correct, wrong):
    l = [correct]
    for w in wrong:
        assert w not in l
        l.append(w)


def build_variant(s):
    random.seed(s)
    l1 = 2**3
    r1 = random.randrange(l1 + 4, l1 + 7)
    correct1 = solve(l1, r1)
    wrong1_raw = [l1, r1, r1 - l1, (r1 + l1) // 2]
    wrong1 = []
    for i in wrong1_raw:
        while i == correct1 or i in wrong1:
            i = i - 1
        wrong1.append(i)

    l2 = 2**9
    d2 = random.randrange(l2 // 2, 3 * l2 // 4)
    r2 = l2 + d2
    correct2 = solve(l2, r2)
    wrong2 = [r2, l2, (r2 - l2), (r2 + l2) // 2]
    assert_uniq(correct1, wrong1)
    assert_uniq(correct2, wrong2)

    return dict(
        correct1=correct1,
        correct2=correct2,
        wrong1=wrong1,
        wrong2=wrong2,
        l1=l1,
        r1=r1,
        l2=l2,
        r2=r2,
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
