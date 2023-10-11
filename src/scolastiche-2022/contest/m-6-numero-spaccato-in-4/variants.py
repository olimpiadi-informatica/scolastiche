import json

variants_input = [
    dict(n=51498735, wrong=[15, 24, 26, 42]),
    dict(n=78234159, wrong=[12, 28, 39, 44]),
    dict(n=52729913, wrong=[7, 20, 29, 38]),
    dict(n=57123169, wrong=[7, 25, 34, 36]),
]


def build_variant(n, wrong):
    n_str = str(n)
    assert len(n_str) == 8

    example_split = [
        n_str[0:2],
        n_str[2:3],
        n_str[3:6],
        n_str[6:8],
    ]
    example_sum = sum(int(x) for x in example_split)

    # Solution (sliding window)
    max_piece = max(int(n_str[i : i + 5]) for i in range(4))
    max_piece_idx = sum(i for i in range(4) if int(n_str[i : i + 5]) == max_piece)
    split = (
        list(n_str[:max_piece_idx])
        + [str(max_piece)]
        + list(n_str[max_piece_idx + 5 :])
    )
    max_sum = max(
        sum(
            [
                int(n_str[i : i + 5]),
                *[int(d) for j, d in enumerate(n_str) if j < i or j >= i + 5],
            ]
        )
        for i in range(4)
    )

    return dict(
        n=n,
        exampleSplit=example_split,
        exampleSum=example_sum,
        wrong=wrong,
        maxPiece=max_piece,
        split=split,
        correct=sum(int(d) for d in str(max_sum)),
        result=sum(map(int, split)),
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
