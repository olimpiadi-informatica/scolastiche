import json

variant_inputs = [
    [12, 27, 42, 27, 35, 30, 16, 50, 5],
    [23, 10, 31, 8, 41, 31, 38, 29, 60],
    [9, 25, 45, 11, 25, 59, 37, 20, 51],
]


def build_variant(i, weights):
    # Compute answers
    sorted_weights = sorted(weights)
    ans1 = sum(sorted_weights[4:])
    ans2 = 2022 + sum(sorted_weights[:4]) - ans1

    return dict(
        i=i,
        ans1=ans1,
        ans2=ans2,
        w=sorted_weights[::-1],
        weights=weights,
        sumWeights=sum(weights),
        diff=2 * ans1 - sum(weights),
    )


print(
    json.dumps(
        [build_variant(i, variant_inputs[i]) for i in range(len(variant_inputs))]
    )
)
