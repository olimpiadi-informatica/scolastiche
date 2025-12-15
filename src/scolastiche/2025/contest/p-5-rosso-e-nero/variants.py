import json
import random

def __visit(nero: list[int], rosso: list[int], y, n):
	x = 0
	while x != n-1:
		if x == y:
			x = rosso[x]
		else:
			x = nero[x]

n = 10
random.seed(105)

variants_input = [
    dict(l1 = 4, r1 = 2),
    dict(l1 = 5, r1 = 1),
    dict(l1 = 6, r1 = 4),
    dict(l1 = 7, r1 = 3),
]

def randiff(m, i, d = 3):
	r = i
	while r == i:
		r = random.randint(max(0,i-d),min(m-1,i+d))
	return r

def build_variant(l1, r1):
    l2 = n-l1
    nero = [(i+1)%l1 for i in range(l1)] + [(i+1)%l2+l1 for i in range(l2)]
    rosso = [randiff(l1,i) for i in range(l1)] + [randiff(l2,i)+l1 for i in range(l2)]
    for i in random.sample(range(l1), r1):
        rosso[i] = random.randint(l1,n-1)
    for i in random.sample(range(l2), 4-r1):
        rosso[l1+i] = random.randint(0,l1-1)

    return dict(
		n=n,
		nero=nero,
		rosso=rosso,
        ans1=r1,
        wrong1=random.sample([i for i in range(1,6) if i!= r1], 3),
        ans2=l1,
    )


print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)], indent = 2))
