import json

variants_input = [
    dict(n = 5000),
    dict(n = 2000),
    dict(n = 3000),
    dict(n = 6000)
]


def build_variant(n):
    
    c = int(n/9) 
    c -= c%10

    correct = "Poco più di " + str(c)

    wrong = ["Due volte", 
             "Poco meno di " + str(int(n/2)),
             "Circa " + str(int(c*2)), 
             "Circa " + str(int(c*3))]

    return dict(
        correct=correct,
        wrong=wrong,
        n=n
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
