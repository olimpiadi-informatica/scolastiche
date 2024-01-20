import json

variants_input = [
    dict(r = 12, b = 2033),
    dict(r = 14, b = 2043),
    dict(r = 16, b = 2053),
    dict(r = 18, b = 2063),
]


def build_variant(r, b):
    correct = b//2 - r + 2
    wrong=[b//2 - r//2, b-2*r, b-r, 2*b-r]

    return dict(
        correct=correct,
        wrong=wrong,
        r=r,
        b=b
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
