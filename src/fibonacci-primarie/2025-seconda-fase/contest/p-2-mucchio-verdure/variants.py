import json
import random

variants_input = [
    {"carrots1": 19, "potatoes1": 12, "carrots2": 640, "potatoes2": 241},  #ans1: 4, ans2: 0
    {"carrots1": 15, "potatoes1": 12, "carrots2": 371, "potatoes2": 162}, #ans1: 0, ans2: 1 
    {"carrots1": 18, "potatoes1": 12, "carrots2": 472, "potatoes2": 230}, #ans1: 3, ans2: 2
    {"carrots1": 17, "potatoes1": 12, "carrots2": 283, "potatoes2": 371}, #ans1: 2, ans2: 3
    {"carrots1": 16, "potatoes1": 12, "carrots2": 519, "potatoes2": 183} #ans1: 1, ans2: 4
]

p = 0
c = 0

def patate_rimaste():
    global p
    return p

def carote_rimaste():
    global c
    return c

def mangia_carote(n):
    global c
    c -= n

def mangia_patate(n):
    global p
    p -= n

def __q1():
    while carote_rimaste() >= 5 and patate_rimaste() >= 2:
        if carote_rimaste() > patate_rimaste():
            mangia_carote(5)
        else:
            mangia_patate(2)

def get_steps(c, p):
    steps = [f"{c} carote, {p} patate"]
    while c >= 5 and p >= 2:
        if c > p:
            c -= 5
        else:
            p -= 2
        steps.append(f"{c} carote, {p} patate")
    return " → ".join(steps)

def build_variant(carrots1, potatoes1, carrots2, potatoes2):
    global c, p
    c = carrots1
    p = potatoes1
    __q1()
    res1 = c
    wrong1 = [x for x in range(5) if x != res1]
    
    explanation1 = get_steps(carrots1, potatoes1)

    c = carrots2
    p = potatoes2
    __q1()

    ans2 = c
    possible_choices2 = [x for x in range(6) if x != ans2]
    wrong2 = random.sample(possible_choices2, 4)

    return dict(
        q_carrots1=carrots1,  
        q_potatoes1=potatoes1,
        q_carrots2=carrots2,
        q_potatoes2=potatoes2,
        ans1=res1,
        wrong1=wrong1,
        ans2=ans2,
        wrong2=wrong2,
        #p1
        explanation1=explanation1,
        #p2
        abs_carrots2=carrots2//5,
    )

print(json.dumps([build_variant(**v) for v in variants_input]))
