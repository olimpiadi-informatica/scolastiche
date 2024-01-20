import json

variant_inputs = [
    ([751, 12, 222, 844, 98, 189, 384, 502, 720, 608, 631, 407], 650),
    ([234, 81, 127, 657, 635, 782, 390, 628, 921, 95, 589, 678], 578),
    ([546, 764, 235, 872, 954, 23, 241, 891, 754, 345, 658, 812], 551),
]


def build_variant(ii, numbers, k):
    # Compute answers
    ans1 = 0
    J = []
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers) + 1):
            if max(numbers[i:j]) - min(numbers[i:j]) <= k and j - i > ans1:
                ans1 = j - i
                J = numbers[i:j]
    L = {}
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers) + 1):
            w = max(numbers[i:j]) - min(numbers[i:j])
            L[w] = max(L.get(w, 0), j - i)
    ans2 = len(set(L.values()))

    return dict(
        i=ii,
        ans1=ans1,
        ans2=ans2,
        numbers=numbers,
        k=k,
        J=J,
    )


print(json.dumps([build_variant(i, *data) for i, data in enumerate(variant_inputs)]))
