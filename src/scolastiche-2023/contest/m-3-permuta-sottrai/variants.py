import json

variants_input = [
    dict(array=[5, 2, 10, 8, 2, 0], correct=17, wrong=[-8, -3, 0, 7]),
]


def build_variant(array, correct, wrong):
    return dict(
        array=array,
        correct=correct,
        wrong=wrong,
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
