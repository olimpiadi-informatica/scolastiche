import json

variants_input = [
    dict(n=90),
    dict(n=95),
    dict(n=100),
    dict(n=105),
    dict(n=110),
    dict(n=115),
    dict(n=120)
]


def build_variant(n):
    ans1 = n*10 - 1 + (n-1)
    ans2 = ans1 + 2

    return dict(
        n=n,
        ans1=ans1,
        ans2=ans2,
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
