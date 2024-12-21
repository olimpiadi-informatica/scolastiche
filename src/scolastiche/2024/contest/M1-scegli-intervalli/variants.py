import json


def solve1(l):
    return (l*l-l)//2


def solve2(l):
    return (l-3)*(l-2)//2

def assert_uniq(correct, wrong):
    l = [correct]
    for w in wrong:
        assert w not in l
        l.append(w)


def build_variant(l):
    correct1=solve1(l),
    wrong1=[l*l, l*l//2, l*(l+1)//2, 2*l]

    correct2=solve2(l),
    wrong2=[(l-3)*(l-4)//2, l*l//2, l*(l+1)//2, 2*l]

    assert_uniq(correct1, wrong1)
    assert_uniq(correct2, wrong2)
    return dict(
        l=l,
        correct1=correct1,
        wrong1=wrong1,
        correct2=correct2,
        wrong2=wrong2
    )


def build_variants():
    return [build_variant(i) for i in range(20, 26)]


print(json.dumps(build_variants()))
