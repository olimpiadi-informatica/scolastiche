import json

variants_inputs = [2012, 1112, 1023, 2211, 3013, 4120]


def build_variant(n):
    digits = [int(d) for d in str(n)]
    correct = sum(digits)
    wrong = list(range(3, 8))
    wrong.remove(correct)

    return dict(
        n=n,
        correct=correct,
        wrong=wrong,
        decimal=" + ".join(
            str(digits[i]) + r" \cdot 10^" + str(len(digits) - i - 1)
            for i, d in enumerate(digits)
        ),
        sumDigits=" + ".join(map(str, digits)),
    )


print(json.dumps([build_variant(n) for i, n in enumerate(variants_inputs)]))
