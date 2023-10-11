import json


def build_variant(i, table, x, y, z, w, t, k):
    n = 8

    def flatten(matrix):
        content = []
        for line in matrix:
            content.extend(line)
        return content

    content = flatten(table)
    content.sort()

    assert len(content) == n * n
    assert content[0] == 1 and content[-1] == n * n
    assert len(set(content)) == n * n

    # Compute answers
    ans1, ans2 = 0, 0

    for x1 in range(n):
        for y1 in range(n):
            for z1 in range(x1 + 1, n + 1):
                for w1 in range(y1 + 1, n + 1):
                    rect = flatten([table[i1][y1:w1] for i1 in range(x1, z1)])
                    rect.sort()
                    if rect[-1] <= len(rect) + 1:
                        if len(rect) <= 5:
                            ans1 += 1
                        else:
                            ans2 += 1

    return dict(
        i=i,
        ans1=ans1,
        ans2=ans2,
        t=t,
        nums=r", \, ".join(str(i1) for i1 in range(1, 8) if i1 != t),
        n=n,
        k=k,
        x=x,
        y=y,
        z=z,
        w=w,
        table=table,
    )


variant_inputs = [
    dict(
        table=[
            [59, 63, 58, 62, 64, 61, 60, 52],
            [54, 20, 25, 22, 21, 23, 24, 16],
            [55, 18, 15, 9, 5, 7, 6, 27],
            [57, 19, 13, 4, 2, 1, 3, 26],
            [53, 17, 11, 14, 12, 8, 10, 29],
            [47, 32, 30, 28, 33, 31, 35, 34],
            [56, 43, 40, 36, 37, 41, 39, 38],
            [51, 49, 48, 45, 50, 46, 44, 42],
        ],
        x=4,
        y=2,
        z=6,
        w=3,
        t=4,
        k=15,
    ),
    dict(
        table=[
            [60, 61, 56, 63, 62, 58, 64, 59],
            [47, 51, 54, 57, 53, 55, 52, 50],
            [43, 41, 39, 38, 40, 28, 42, 49],
            [27, 16, 8, 17, 14, 21, 20, 44],
            [25, 10, 13, 12, 11, 18, 23, 37],
            [29, 5, 2, 1, 4, 15, 19, 48],
            [26, 9, 7, 3, 6, 24, 22, 45],
            [34, 30, 36, 32, 35, 33, 31, 46],
        ],
        x=2,
        y=5,
        z=4,
        w=6,
        t=5,
        k=16,
    ),
    dict(
        table=[
            [62, 48, 32, 2, 7, 5, 10, 30],
            [64, 52, 41, 1, 3, 4, 13, 26],
            [44, 43, 36, 8, 11, 9, 6, 28],
            [59, 56, 39, 12, 16, 17, 14, 31],
            [61, 47, 40, 20, 21, 19, 18, 27],
            [60, 53, 37, 24, 15, 25, 23, 22],
            [63, 46, 29, 33, 35, 38, 42, 34],
            [58, 51, 49, 54, 57, 55, 45, 50],
        ],
        x=3,
        y=0,
        z=5,
        w=1,
        t=6,
        k=16,
    ),
]

print(json.dumps([build_variant(i, **data) for i, data in enumerate(variant_inputs)]))
