import json

variants_input = [dict(s=s) for s in range(20)]


def get_correct(n):
    ans = 0
    for i in range(n):
        if i % 2 != 0 and i % 3 != 0:
            ans += 1
    return ans


def assert_uniq(correct, wrong):
    l = [correct]
    for w in wrong:
        assert w not in l
        l.append(w)


def build_variant(s):
    n1 = 8 + s % 3
    n2 = (106 + (-(s+1) * 13 % 50)) * 6

    correct1 = get_correct(n1) 
    correct2 = get_correct(n2)
    wrong1 = [n1, n1 // 2, n1 // 6, n1 * (n1 - 1) // 2]
    wrong2 = [n2, n2 // 2, n2 // 6, n2 * (n2 - 1) // 2]
    assert_uniq(correct1, wrong1)
    assert_uniq(correct2, wrong2)
    return dict(
        n1=n1, correct1=correct1, wrong1=wrong1, n2=n2, correct2=correct2, wrong2=wrong2
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
