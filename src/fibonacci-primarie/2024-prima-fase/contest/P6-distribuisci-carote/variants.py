import json

variants_input = [ # NO SEQUENZE PALINDROME
        dict(seq="01101", ans1=5, k2=6),
        dict(seq="11001", ans1=5, k2=6),
        dict(seq="10011", ans1=6, k2=7),
        dict(seq="11010", ans1=7, k2=8),
        dict(seq="10110", ans1=6, k2=8),
]

def invert(x, seq):
    for i in seq[::-1]:
        if i == "0":
            x *= 2
        else:
            x += 1
    return x

def forward(x, seq):
    ok = True
    for i in seq:
        if i == "0":
            if x % 2 == 1:
                ok = False
            x /= 2
        else:
            x -= 1
    return x, ok

def unduplicate(correct, wrong, min=0, check=None):
    res = []
    
    def ok(x):
        return x != correct and x not in res

    for w in wrong:
        ww = w
        while not ok(ww) and ww >= min:
            ww -= 1
        if ww < min:
            ww = w
            while not ok(ww):
                ww += 1
        res.append(ww)
    return res
        


def build_variant(seq, ans1, k2):
    k1 = invert(ans1, seq)
    wrong1 = [
            ans1 - 1,
            k1-len(seq),
            ans1 - 2,
            ans1 + 2
            ]

    ans2 = invert(k2, seq)
    wrong2 = [
            invert(k2-1, seq),
            invert(k2+1, seq),
            invert(1, seq),
            invert(k2*2, seq),
            ]

    return {
        "k1": k1,
        "ans1": ans1,
        "wrong1": unduplicate(ans1, wrong1),
        "k2": k2,
        "ans2": ans2,
        "wrong2": wrong2,
        "seq": list(map(int, seq))
    }


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
