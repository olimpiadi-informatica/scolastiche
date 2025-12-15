import json
import random

variants_input = [
    dict(r1 = 4),
    dict(r1 = 5),
    dict(r1 = 6),
    dict(r1 = 7),
]

random.seed(42)

length = 10
light = []
door = []
switch = []
pos = 0

def luce_accesa():
	return light[pos] != switch[pos-1]

def porta_chiusa():
	return door[pos] == 0

def premi_interruttore():
	global switch
	switch[pos] = 1 - switch[pos]

def apri_porta():
	pass

def avanza():
	global pos
	pos += 1

def arretra():
	global pos
	pos -= 1

def __q1():
	while luce_accesa():
		if porta_chiusa():
			premi_interruttore()
			apri_porta()
		avanza()

def __q2():
	while luce_accesa():
		"???"
	def _blocco_1():
		if porta_chiusa():
			apri_porta()
	def _blocco_2():
		avanza()
	def _blocco_3():
		if not luce_accesa():
			arretra()
			premi_interruttore()
			avanza()
	def _blocco_4():
		if porta_chiusa():
			premi_interruttore()
			apri_porta()
	def _blocco_5():
		if not luce_accesa():
			premi_interruttore()

def randvec(n, mn, mx):
	v = [0 for _ in range(n)]
	for i in random.sample(range(n), random.randint(mn,mx)):
		v[i] = 1
	return v

def gen(r1):
	global light, door, switch, pos
	door = randvec(r1-2, 1, r1-3) + [random.randint(0,1)] + randvec(length-r1+1, 2, length-r1-1)
	light = [1] + [door[i-1] for i in range(1,r1-1)] + [1 - door[r1-2]] + randvec(length-r1, 1, length-r1-1) + [0]
	switch = [0 for _ in range(length)]
	pos = 0
	__q1()
	return pos+1

def build_variant(r1):
	ans1 = gen(r1)
	door[-1] = 0
	wrong = []
	for i in range(light.index(0)+1,length):
		if light[i] != door[i-1] and i+1 != ans1:
			wrong.append(i+1)
	random.shuffle(wrong)
	wrong = [light.index(0)+1] + wrong
	perm = list(range(1,6))
	random.shuffle(perm)
	return dict(
		length=length,
		light=list(light),
		door=list(door),
		perm=perm,
		ans1=ans1,
		wrong1=wrong,
	)

print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
