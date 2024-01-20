import json

variants_input = [
    dict(n = 5, rettangoli = [[4, 5], [10, 2], [3, 9], [7, 3], [5, 8]]),
]

def build_variant(n, rettangoli):
    max_h = 0
    max_b = 0

    wa1 = 0
    wa2 = 0

    a = 0

    for i in range(n): 
        h = rettangoli[i][0]
        b = rettangoli[i][1]
        if h < b: 
            b, h = h, b

        max_h = max(max_h, h)
        max_b = max(max_b, b)

        if(h > wa1):
            wa2 = wa1
            wa1 = h
        elif h > wa2:
            wa2 = h

        a = max(a, h*b)    
            
    correct = max_h * max_b
    wrong = [max_h * max_h,
            wa1 * wa2,
            a,
            200]

    return dict(
        correct=correct,
        wrong=wrong,
        n=n,
        rettangoli = rettangoli
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
