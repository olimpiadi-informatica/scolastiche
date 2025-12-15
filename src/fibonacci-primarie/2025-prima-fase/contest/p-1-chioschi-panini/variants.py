import json
import random

variants_input = [
    dict(r1 = 1, r2 = 5),
    dict(r1 = 2, r2 = 6),
    dict(r1 = 3, r2 = 8),
    dict(r1 = 4, r2 = 7),
]

random.seed(42)

length = 10
heights = []
dir = []
chi = []
pos = 0
panini = 0
count = 0

def salita():
	global dir, pos
	return dir[pos] == 1

def chiosco():
	global chi, pos
	return pos > 0 and chi[pos-1] == 1

def compra_panino():
	global count
	count += 1

def mangia_panino():
	global count
	count -= 1

def cammina():
	global pos
	pos += 1

def __q1():
	if salita():
		mangia_panino()
	cammina()

def __q2():
	if chiosco():
		compra_panino()
	if salita():
		mangia_panino()
	cammina()

def gen(r1, r2):
	global heights, dir, chi, panini
	dir = [0 for _ in range(length)]
	for i in random.sample(range(length), random.randint(4,6)):
		dir[i] = 1
	heights = [0 for _ in range(length+1)]
	for i in range(length):
		heights[i+1] = heights[i] + 0.1 + random.random()*max(min(0.9-heights[i],0.3),0) if dir[i]==1 else heights[i]-0.1-random.random()*max(min(heights[i]-0.1,0.3),0)
	hmin = min(heights)
	hmax = max(heights)
	heights = [int((h-hmin)/(hmax-hmin)*100) for h in heights]
	panini = r1 + sum(dir)
	chi = [0 for _ in range(length-1)]
	for i in random.sample(range(length-1), r2 - r1):
		chi[i] = 1
	
def build_variant(r1, r2):
    global count, pos
    gen(r1, r2)
    count, pos = panini, 0
    while pos < length:
        __q1()
    ans1 = count
    count, pos = panini, 0
    while pos < length:
        __q2()
    ans2 = count
    return dict(
        length=length,
		heights=heights,
        dir=dir,
        chi=chi,
		num_chioschi=chi.count(1),
        panini=panini,
        ans1=ans1,
        wrong1=[i for i in range(1,5) if i!=ans1],
        ans2=ans2,
        wrong2=list(random.sample([i for i in range(1,9) if i!=ans2], 4)),
    )

print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
