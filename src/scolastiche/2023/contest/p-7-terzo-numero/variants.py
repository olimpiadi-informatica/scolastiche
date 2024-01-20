import json

variants_input = [
    dict(n = 120),
    dict(n = 100),
    dict(n = 90),
    dict(n = 80),
]


def build_variant(n):
    cont = 0
    wrong=[]
    for i in range(1, n):
        if n%i == 0:
            cont += 1
            if cont != 3:
                wrong.append(n/i)
            else:
                correct = n/i

        
    


    return dict(
        correct=correct,
        wrong=wrong,
        n=n
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
