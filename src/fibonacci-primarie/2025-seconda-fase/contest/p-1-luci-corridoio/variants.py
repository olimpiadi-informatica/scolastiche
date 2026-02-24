import json
import random
from copy import deepcopy

random.seed(4422)

d = []
l = []
pos = 0

def porta_chiusa():
    global d, pos
    return d[pos] == 0

def apri_porta():
    global d, pos
    d[pos] = 1

def premi_interruttore():
    global l, pos
    l[pos] = 1 - l[pos]

def avanza():
    global pos
    pos += 1

def __q1():
	if porta_chiusa():
		apri_porta()
	else:
		premi_interruttore()
	avanza()

def randvec(n, k):
    v = [0]*n
    for i in random.sample(range(n), k):
        v[i] = 1
    return v

variants_input = [
    {"n": 6, "correct1": 1, "correct2": 2, "door2": 4}, 
    {"n": 6, "correct1": 2, "correct2": 3, "door2": 5},
    {"n": 6, "correct1": 4, "correct2": 5, "door2": 3},
    {"n": 6, "correct1": 5, "correct2": 4, "door2": 2},
]

def check_answers(correct, wrong):
    all_answers = [correct] + wrong
    hashed = set([str(ans).lower().strip() for ans in all_answers])
    return len(hashed) == len(all_answers)

def solve(door, light):
    global d, l, pos
    d = deepcopy(door)
    l = deepcopy(light)
    pos = 0
    while pos < len(door):
        __q1()
    return sum(l)

def build_variant(n, correct1, correct2, door2):
    door = randvec(n, correct1)

    correct1 = sum(door)
    wrong1 = [n-correct1] + random.sample([i for i in range(1,n) if i not in [correct1, n-correct1]], 3)
    assert check_answers(correct1, wrong1)
    assert correct1 == solve(door, [0]*n)

    door2 = randvec(n, door2)
    ones = [i for i, x in enumerate(door2) if x == 1]
    zeros = [i for i, x in enumerate(door2) if x == 0]
    ones = random.sample(ones, 2)
    zeros = random.sample(zeros, 1)
    vals = [(ones[0], 0), (ones[1], 1), (zeros[0], 1)]
    vals.sort()
    light = randvec(n-3, correct2-2)
    light = light[:vals[0][0]] + [vals[0][1]] + light[vals[0][0]:vals[1][0]-1] + [vals[1][1]] + light[vals[1][0]-1:vals[2][0]-2] + [vals[2][1]] + light[vals[2][0]-2:]
    light = [light[i]^door2[i] for i in range(n)]
    closelight = sum([i for i,j in zip(light, door2) if j == 0])
    open = sum(door2)

    correct2 = sum(door2[i]^light[i] for i in range(n))
    wrong2 = random.sample([i for i in range(n+1) if i not in [correct2]], 4)
    assert check_answers(correct2, wrong2)
    assert correct2 == solve(door2, light)

    return dict(
        correct1=correct1,
        wrong1=wrong1,
        correct2=correct2,
        wrong2=wrong2,
        n=n,
        door=door,
        desc=', '.join(["aperta" if x == 1 else "chiusa" for x in door]),
        door2=door2,
        desc2=', '.join(["aperta" if x == 1 else "chiusa" for x in door2]),
        light=light,
        desc3=', '.join(["accesa" if x == 1 else "spenta" for x in light]),
        closelight=closelight,
        open=open,
    )


print(json.dumps([build_variant(**variant_input) for variant_input in variants_input]))
