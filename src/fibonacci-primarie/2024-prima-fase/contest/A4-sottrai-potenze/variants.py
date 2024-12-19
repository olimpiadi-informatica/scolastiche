import json
import random

variants_input = [dict(s=s) for s in range(5)]

def check_no_ugual_answer(c, ws):
    s = {c}
    for w in ws:
        s.add(w)

    return len(s) == 5

def solve(a, b):
    return min(
        x + sum(int(digit) for digit in str(a - x * b)) for x in range(a // b + 1)
    )


def sumdigits(x):
    return sum(map(int, str(x)))


def solve_step(a, b):
    cur = 1000000000
    i = 0
    while i < cur:
        s = sumdigits(a - i * b) + i
        cur = min(cur, s)
        i = i + 1
    return i


def build_variant(s):
    random.seed(s)
    a_base1 = int(random.choice("45") + random.choice("12"))
    b1 = random.randrange(5, 8)
    a1 = a_base1 + b1
    ans1=solve(a1, b1)
    wrong1 = [ans1-3, ans1+1, ans1+2, ans1+5]

    random.seed(s + 100)
    a_base2 = int(random.choice("45") + "0" + random.choice("36"))
    b2 = random.randrange(2, 4) * 10 + random.randrange(3, 9)

    nxt_cent = 100 * (a_base2 // 100 + 1)
    sol2 = random.randint(2, (nxt_cent - a_base2) // b2)
    a2 = a_base2 + b2 * sol2
    ans2=solve(a2, b2)
    wrong2 = [ans2-3, ans2+1, ans2+2, ans2+5]

    assert check_no_ugual_answer(ans1, wrong1)
    assert check_no_ugual_answer(ans2, wrong2)

    # DEBUG
    # steps = [
    #     (i, a2 - b2 * i, b2, sumdigits(a2 - b2 * i), i + sumdigits(a2 - b2 * i))
    #     for i in range(solve_step(a2, b2))
    # ]
    # steps_text = "\n".join(
    #     [f"({i=}, {x=}, {y=}, {s=}, {ans=})" for i, x, y, s, ans in steps]
    # )

    return dict(
        a1=a1,
        a2=a2,
        b1=b1,
        b2=b2,
        ans1=ans1,
        wrong1=wrong1,
        ans2=ans2,
        wrong2=wrong2,
        # exp=steps_text,
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
