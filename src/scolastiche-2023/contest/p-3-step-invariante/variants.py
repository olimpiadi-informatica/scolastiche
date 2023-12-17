import json

variants_input = [
    dict(n = 2100),
    dict(n = 2200),
    dict(n = 2300),
    dict(n = 2400),
]


def build_variant(n):
    seed = 995087726813569967983841
    t = seed % (n-4) + 2
    correct = (t, n-t)
    t = (t*seed) % (n-4) + 2
    u = seed % (n-t-10) + 2
    wrong=[(t, u), (1, n+1), (n, n), (n, 1)]

    return dict(
        correct=correct,
        wrong=wrong,
        n=n
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
