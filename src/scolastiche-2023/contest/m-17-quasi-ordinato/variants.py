import json

variants_input = [
    dict(
        A = [5, 1, 4, 7, 9, 13, 15, 6]
    ),
    dict(
        A = [4, 1, 13, 7, 9, 2, 15, 8]
    ),    
    dict(
        A = [7, 11, 4, 2, 9, 12, 3, 8, 14]
    ),    
    dict(
        A = [1, 11, 4, 17, 9, 13, 5, 2, 12]
    ),
    dict(
        A = [1, 11, 4, 9, 13, 5, 2]
    ),
    dict(
        A = [12, 1, 7, 9, 13, 15, 2]
    )
]

def fact(n):
    if n <= 1:
        return 1
    else:
        return n * fact(n-1)

def build_variant(A):

    assert(len(A) == len(set(A)))
    N = len(A)

    correct = 2**N - N
    wrong = [
        2**N,
        2**(N-1) + N,
        fact(N-1),
        N*(N-1)/2+1
    ]

    return dict(
        A = list(sorted(A)),
        N = N,
        correct = correct,
        wrong = wrong
    )

print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))

