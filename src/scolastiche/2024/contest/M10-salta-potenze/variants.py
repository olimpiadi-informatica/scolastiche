import json

variants_input = [
    dict(moves=16, low=-2024, hi=2023),
    dict(moves=17, low=-2025, hi=2024),
    dict(moves=16, low=-1024, hi=2024),
    dict(moves=17, low=-2023, hi=1023),
    dict(moves=18, low=-1024, hi=2025),
    dict(moves=17, low=-1023, hi=2025),
]

def assert_uniq(correct, wrong):
    l = [correct]
    for w in wrong:
        assert w not in l
        l.append(w)


def build_variant(moves, low, hi):
    ans1 = hi-low+1
    if low % 2:
        ans2 = (hi - low + 2)//2
    else:
        ans2 = (hi - low + 1)//2
    wrong1=[ans1-1, ans2, ans2-1, ans1//3]
    wrong2=[ans1-1, ans1, ans2-1, ans1//3]
    assert_uniq(ans1, wrong1)
    assert_uniq(ans2, wrong2)

    return dict(
        moves=moves,
        low=low,
        hi=hi,
        correct1=ans1,
        correct2=ans2,
        wrong1=wrong1,
        wrong2=wrong2
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
