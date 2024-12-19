import json

variants_input = [
    dict(c = 3, b = 6),
    dict(c = 4, b = 8),
    dict(c = 3, b = 10),
    dict(c = 2, b = 12),
]

def check_no_ugual_answer(c, ws):
    s = {c}
    for w in ws:
        s.add(w)

    return len(s) == 5

def build_variant(c, b):
    assert b%2 == 0

    correct1 = min(c, b)
    wrong1=[c + b, max(c, b), (c + b) // 2, min(c, b) - 1]

    assert check_no_ugual_answer(correct1, wrong1)

    correct2 = b // 2
    wrong2=[c + b // 2, b + c // 2, b + c, c // 2]

    assert check_no_ugual_answer(correct2, wrong2)

    return dict(
        correct1=correct1,
        wrong1=wrong1,
        correct2=correct2,
        wrong2=wrong2,
        c=c,
        b=b
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
