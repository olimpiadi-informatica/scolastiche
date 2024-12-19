import json

variants_input = [
    dict(n=4, s=4),
    dict(n=4, s=5),
    dict(n=5, s=3),
    dict(n=5, s=4),
    dict(n=3, s=5),
]

def check_no_ugual_answer(c, ws):
    s = {c}
    for w in ws:
        s.add(w)

    return len(s) == 5


def build_variant(n, s):
    ans1 = n*(s-1) + (n-1) * 2
    ans2 = ans1 + 2

    wrong1=[ans2]+[n*s, n*s + n + 2, n+s]
    wrong2=[ans1]+[n*s, n*s + n + 2, n*s + 4*(s-1)]
    
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
