import json

variants_input = [
    dict(a = [7, 6, 5, 4]),
    dict(a = [5, 7, 8, 6]),
    dict(a = [9, 4, 8, 7]),
    dict(a = [5, 8, 7, 5])
]

def build_variant(a):
    sum = 0
    for x in a:
        sum += x

    correct = (sum%10) + 1
   
    wrong=[ (correct + 1)%10 + 1, 
            (correct + 4)%10 + 1,
            (correct + 5)%10 + 1,
            (correct + 3)%10 + 1 ]

    return dict(
        correct=correct,
        wrong=wrong,
        a=a
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
