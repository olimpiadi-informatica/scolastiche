import json
import random

v = []

def prossimo():
    return v[0] if v else "cioccolato"

def mangia_prossimo():
    global v
    if v:
        v = v[1:]

def __q1():
    cattivo = 0
    totale = 0
    while cattivo == 0:
        if prossimo() == "carota":
            totale += 1
        else:
            totale -= 1
        if totale < 0:
            cattivo = 1
        mangia_prossimo()

def solve(data):
    global v
    v = ["cioccolato" if x == 1 else "carota" for x in data]
    __q1()
    return len(data) - len(v)

variants_input = [
    {"seed": 1}, 
    {"seed": 2}, 
    {"seed": 3}
]

foods = [
    [0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [0,1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [0,1,0,1,1,1, 0, 1, 1, 1, 1]
]
correct1 = [[7], [9], [5]]
wrong1 = [[4, 8, 6,5], [7, 8, 10,4], [7, 6, 10,8]]

correct2 = [[2], [3], [4]]
wrong2 = [[1, 0, 4,3], [2, 0, 5,1], [1, 2, 5,0]]
def check_answers(correct, wrong):
    all_answers = correct + wrong
    hashed = set([str(ans).lower().strip() for ans in all_answers])
    return len(hashed) == len(all_answers)

def build_variant(seed, foods_for_variant, correct1, wrong1, correct2, wrong2):
    random.seed(seed)
    assert correct1[0] == solve(foods_for_variant)
    assert solve([0]*correct2[0] + foods_for_variant) == correct2[0] + len(foods_for_variant)
    assert solve([0]*(correct2[0]-1) + foods_for_variant) < correct2[0]-1 + len(foods_for_variant)
    return dict(
        correct1=correct1,
        wrong1=wrong1,
        correct2=correct2,
        wrong2=wrong2,
        carrots1=foods_for_variant[:correct1[0]].count(0),
        foods=foods_for_variant,
        desc=', '.join(['cioccolato' if x == 1 else 'carota' for x in foods_for_variant])
    )

output_data = [
    build_variant(seed=variant["seed"], foods_for_variant=foods[i],correct1=correct1[i], wrong1=wrong1[i], correct2=correct2[i], wrong2=wrong2[i]) 
    for i, variant in enumerate(variants_input)
]

print(json.dumps(output_data))