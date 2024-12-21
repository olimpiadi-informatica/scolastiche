import json
import random

variants_input = [
    dict(s = s) for s in range(20)
]

def solve(a, b):
    return min(x + sum(int(digit) for digit in str(a - x*b)) for x in range(a//b + 1))


def build_variant(s):
    random.seed(s)
    a_base = int("".join([random.choice("456789") for i in range(1)] + [random.choice("012") for i in range(3)]))
    b2 = random.randrange(17, 20)
    a = a_base + b2 * random.randrange(3, 6)
    b1 = random.randrange(a//3, a//2)
    ans1 = solve(a, b1)
    ans2 = solve(a, b2)

    return dict(
        a1=a,
        a2=a,
        b1=b1,
        b2=b2,
        ans1=ans1,
        ans2=ans2
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
