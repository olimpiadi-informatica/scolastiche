import json

variants_input = [
    dict(n = 7, s = 3),
    dict(n = 9, s = 2),
    dict(n = 7, s = 2),
]

def check_no_ugual_answer(c, ws):
    s = {c}
    for w in ws:
        s.add(w)

    return len(s) == 5


def build_variant(n, s):
    assert n >= s
    assert s != n - s

    ans1 = n - s
    ans2 = n//s + (n%s != 0)

    wrong1= [s, n, 0 , s+n]
    wrong2= [n//s, 1, 0 , n]
    
    assert check_no_ugual_answer(ans1, wrong1)
    assert check_no_ugual_answer(ans2, wrong2)

    return dict(
        n=n,
        s=s,
        ans1=ans1,
        wrong1=wrong1,
        ans2=ans2,
        wrong2=wrong2,
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
