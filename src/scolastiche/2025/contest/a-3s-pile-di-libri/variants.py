import math
import json
import random
from collections import Counter

variants_input = [
    dict(n = 5, h = 7, r1 = 5),
    dict(n = 5, h = 4, r1 = 6),
    dict(n = 5, h = 6, r1 = 8),
    dict(n = 5, h = 5, r1 = 7),
]


def sample_sum(N, H, S):
    T = S-H-N+1
    assert T >= 0
    u = [0]
    while sum(u)*H-1 < T:
        u = [random.random() for _ in range(N-1)]
    u = [ui * (T / sum(u)) for ui in u]
    u = list(sorted([(-(ui%1), math.floor(ui)) for ui in u]))
    K = T-sum([ui[1] for ui in u])
    u = [ui[1]+2 for ui in u[:K]] + [ui[1]+1 for ui in u[K:]] + [H]
    assert sum(u) == S
    return u

def generate_pile(n, h, r1):
    tot = n*h - r1
    pile = [0]
    while len(set(pile)) < 3:
        pile = sample_sum(n, h, tot)
    random.shuffle(pile)
    while len(set([i for i in range(4) if pile[i+1] == pile[i]])) > 0:
        random.shuffle(pile)
    return pile

def check_no_ugual_answer(c, ws):
    s = {c}
    for w in ws:
        s.add(w)

    return len(s) == 5

def build_variant(n, h, r1):
    random.seed(11)

    assert h * 2 >= n
    pile = generate_pile(n, h, r1)

    tot = sum(pile)
    mx = max(pile)
    mn = min(pile)

    ans1 = mx * n - tot
    hf = tot // n + int(tot%n != 0)

    # DEBUG: stampa hf e tutti gli hp
    # print("---- DEBUG ----")
    # print(f"pile = {pile}")
    # print(f"hf (altezza finale) = {hf}")
    # for i, hp in enumerate(pile):
    #     print(f"hp[{i}] = {hp}")

    spostamenti = sum(max(hp - hf, 0) for hp in pile)
    aggiunte = hf * n - tot
    ans2 = spostamenti + aggiunte

    # DEBUG sui calcoli
    # print(f"spostamenti = {spostamenti}")
    # print(f"aggiunte = {aggiunte}")
    # print(f"ans2 = {ans2}")
    # print("---------------")

    wrong1 = [mx-mn] + random.sample([i for i in range(max(ans1-2, mx-mn+1), ans1+3) if i != ans1], 3)
    wrong2 = [ans2-1,ans2+1] + random.sample([i for i in range(max(ans2-2,1),ans1+1) if abs(i-ans2)>1], 2)

    assert check_no_ugual_answer(ans1, wrong1)
    assert check_no_ugual_answer(ans2, wrong2)

    return dict(
        n=n,
        h=h,
        hf=hf,
        altezze=pile,
        wrong1=wrong1,
        wrong2=wrong2,
        ans1=ans1,
        ans2=ans2,
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)], indent=2))
