import json

variants_input = [
    dict(ans1=1, ans2=4),
    dict(ans1=4, ans2=1),
    dict(ans1=3, ans2=2),
    dict(ans1=2, ans2=3),
]

def build_variant(ans1, ans2):
    assert 1 <= ans1 <= 5
    assert 1 <= ans2 <= 5

    # Tutti i numeri tranne la risposta corretta
    wrong1 = [x for x in range(1, 6) if x != ans1]
    wrong2 = [x for x in range(1, 6) if x != ans2]

    return dict(
        ans1=ans1,
        ans2=ans2,
        wrong1=wrong1,
        wrong2=wrong2
    )

print(json.dumps([build_variant(**data) for data in variants_input], indent=2))
