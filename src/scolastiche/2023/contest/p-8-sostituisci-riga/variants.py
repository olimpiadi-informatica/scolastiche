import json

variants_input = [
    dict(c = 1, w = [0, 1, 3, 4]),
    dict(c = 0, w = [0, 2, 3, 5]),
    dict(c = 2, w = [1, 2, 4, 5]),
    dict(c = 3, w = [0, 1, 4, 5])
]


def build_variant(c, w):
    possible_correct = ["y[0] ← y[0]",
                        "y[1] ← y[1]",
                        "y[2] ← y[2]",
                        "y[3] ← y[3]"]
    
    correct = possible_correct[c]

    possible_wrong = ["x ← x[2]", 
                      "y ← x",
                      "x + y[2] ← 2",
                      "x[0] ← 2 + y",
                      "y ← x + 2",
                      "y[0] ← x[0] + 2"]
    
    wrong=[]   
    for i in w:
        wrong.append(possible_wrong[i])

    return dict(
        correct=correct,
        wrong=wrong,
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
