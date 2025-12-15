import json
import random

def ribalta(array: list[int], inizio: int, lunghezza: int):
    fine = inizio + lunghezza - 1
    for i in range(lunghezza // 2):
        array[inizio + i], array[fine - i] = array[fine - i], array[inizio + i]

def __process(array: list[int], t: int):
    for i in range(t):
        array[i] = i
    len = t
    while len >= 2:
        for i in range(t // len):
            ribalta(array, i * len, len)
        len = len // 2


l1 = 8
l2 = 1024

arr1 = [0]*l1
arr2 = [0]*l2
__process(arr1, l1)
__process(arr2, l2)

random.seed(666)

variants_input = [
    dict(x1 = 3),
    dict(x1 = 4),
    dict(x1 = 5),
    dict(x1 = 6)
]

def check_no_ugual_answer(c, ws):
    s = {c}
    for w in ws:
        s.add(w)

    return len(s) == 5

def build_variant(x1):
    ans1 = arr1[x1]
    wrong1 = random.sample([i for i in range(l1) if i != ans1], 4)
    assert check_no_ugual_answer(ans1, wrong1)

    x2 = random.randint(0, l2-1)
    ans2 = arr2[x2]
    b2 = bin(x2)[2:]
    b2 = '0'*(10-len(b2)) + b2
    i2 = ''.join([b2[i] if i%2==1 else str(1-int(b2[i])) for i in range(len(b2))])

    return dict(
        l1=l1,
        l2=l2,
        x1=x1,
        x2=x2,
        b2=b2,
        i2=i2,
        ans1=ans1,
        wrong1=wrong1,
        ans2=ans2,
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)], indent = 2))
