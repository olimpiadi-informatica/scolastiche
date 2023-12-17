import json

variants_input = [
    dict(n=2024), 
    dict(n=2027),
    dict(n=1025),
    dict(n=2000),
]


def build_variant(n):
    
    correct = (n//3)*2 + 2

    wrong = [0, n//3+1, n//3, n//2]

    return dict(
        n=n,
        correct=correct,
        wrong=wrong,
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))

