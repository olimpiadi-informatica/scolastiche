import json

variants_input = [
    dict(perm=[3, 1, 4, 7, 2, 5, 6]),
    dict(perm=[3, 2, 6, 7, 5, 1, 4]),
    dict(perm=[1, 5, 4, 2, 7, 3, 6]),
]

def my_max(x):
    if len(x) == 0:
        return -1
    return max(x)

# va testato
# K=2
def calc_ans1(perm):
    ans = 0
    for i in range(len(perm)):
        for j in range(i+1, len(perm)):
            if my_max(perm[0:i]) > perm[i]:
                continue
            if my_max(perm[i+1:j]) > max(perm[i], perm[j]):
                continue
            if my_max(perm[j+1:]) > perm[j]:
                continue
            ans += 1
    return ans

# K=3
def calc_ans2(perm):
    ans = 0
    for i in range(len(perm)):
        for j in range(i+1, len(perm)):
            for k in range(j+1, len(perm)):
                if my_max(perm[0:i]) > perm[i]:
                    continue
                if my_max(perm[i+1:j]) > max(perm[i], perm[j]):
                    continue
                if my_max(perm[j+1:k]) > max(perm[j], perm[k]):
                    continue
                if my_max(perm[k+1:]) > perm[k]:
                    continue
                ans += 1
    return ans


def build_variant(perm):
    x = sorted(perm)
    for i in range(len(x)):
        assert (x[i] == i+1)

    ans1 = calc_ans1(perm)
    ans2 = calc_ans2(perm)

    return dict(
        perm=perm,
        ans1=ans1,
        ans2=ans2,
        pair=perm[2:4],
        reduced=perm[:2] + [max(perm[2], perm[3])] + perm[4:],
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
