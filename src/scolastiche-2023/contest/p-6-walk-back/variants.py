import json

variants_input = [
    dict(a = [2, 0, 4, 0, 9, 12, 1]),
    dict(a = [2, 6, 3, 0, 9, 2, 7]),
    dict(a = [2, 0, 7, 10, 9, 14, 1])
]


def build_variant(a):
    correct = max(a)
    n=len(a)
    s=sum(a)
    wrong=[n,s,s+n, 10]

    return dict(
        correct=correct,
        wrong=wrong,
        a=a
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
