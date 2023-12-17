import json

variants_input = [
    dict(
        table1 = [
            [2,3,4,7,8,12],
            [1,5,6,9,11,10]
        ],
        table2 = [
            [1,5,12,8,15],
            [3,4,6,14,9],
            [2,7,10,11,13]
        ]
    ),
    dict(
        table1 = [
            [1,3,5,8,11,12],
            [2,4,7,6,9,10]
        ],
        table2 = [
            [1,4,5,9,15],
            [2,6,8,10,14],
            [3,7,11,12,13]
        ]
    ),
    dict(
        table1 = [
            [3,2,5,8,11,12],
            [1,4,6,7,9,10]
        ],
        table2 = [
            [1,7,10,8,9],
            [2,5,6,11,15],
            [3,4,12,14,13]
        ]
    ),
]

def build_variant(table1, table2):
    N1 = len(table1[0])
    K1 = len(table1)

    assert K1 == 2
    ans1 = 2

    for i in range(1,N1):
        prev = sorted([table1[j][i-1] for j in range(K1)])
        cur = sorted([table1[j][i] for j in range(K1)])

        smaller = 0
        for j in range(K1):
            while smaller < K1 and prev[smaller] < cur[j]:
                smaller += 1
            ans1 *= max(0, smaller - j)
        if ans1 == 0:
            break

    N2 = len(table2[0])
    K2 = len(table2)

    assert K2 == 3
    ans2 = 6

    for i in range(1,N2):
        prev = sorted([table2[j][i-1] for j in range(K2)])
        cur = sorted([table2[j][i] for j in range(K2)])

        smaller = 0
        for j in range(K2):
            while smaller < K2 and prev[smaller] < cur[j]:
                smaller += 1
            ans2 *= max(0, smaller - j)
        if ans2 == 0:
            break

    # esempi

    Nes = 3
    Kes = 2
    example = [
        [1,3,6],
        [2,5,4]
    ]
    example_res = [
        [2,3,4],
        [1,5,6]
    ]

    return dict(
        N1 = N1,
        K1 = K1,
        table1 = table1,
        ans1 = ans1,
        N2 = N2,
        K2 = K2,
        table2 = table2,
        ans2 = ans2,
        Nes = Nes,
        Kes = Kes,
        example = example,
        example_res = example_res
    )

print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))

