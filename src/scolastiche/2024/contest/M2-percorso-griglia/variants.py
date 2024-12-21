import json
import random

variants_input = [dict(s=s) for s in range(20)]

def assert_uniq(correct, wrong):
    l = [correct]
    for w in wrong:
        assert w not in l
        l.append(w)

def build_variant(s):
    random.seed(0)
    x = 303 + (s * 17) % 100
    n = x * 6

    correct1 = n * 4 - 1
    correct2 = n * 8 // 3

    wrong = [n * 5 // 2, n * 4, n * 2]
    wrong1 = wrong + [correct2]
    wrong2 = wrong + [correct1]
    assert_uniq(correct1, wrong1)
    assert_uniq(correct2, wrong2)
    random.shuffle(wrong2)
    return dict(n=n, correct1=correct1, wrong1=wrong1, correct2=correct2, wrong2=wrong2)


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
