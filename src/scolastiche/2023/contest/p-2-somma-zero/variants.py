import json

variants_input = [
    dict(a = [2, 3, 6, 4, 4, 5, 8, 2, 8]),
    dict(a = [2, 3, 6, 4, 9, 5, 8, 2, 8]),
    dict(a = [2, 3, 6, 3, 4, 5, 8, 2, 8])
]


def build_variant(a):
    ans = 0
    sum = 0
    rev = 0
    n = len(a)
    for i in range(n):
        if a[i] == i:
            ans = ans + i
        else:
            rev = rev + a[i]
        sum = sum + a[i]

    correct = ans

    if rev == ans:
        rev += 1

    wrong=[n+5,sum,rev, 0]

    return dict(
        correct=correct,
        wrong=wrong,
        a=a,
        n=len(a)
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
