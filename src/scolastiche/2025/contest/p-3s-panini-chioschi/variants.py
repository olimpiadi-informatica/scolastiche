import json
import random

variants_input = [
    dict(r1 = 1),
    dict(r1 = 2),
    dict(r1 = 3),
    dict(r1 = 4),
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

def compra_panini(n):
	global count
	count += n

def mangia_panini(n):
	global count
	count -= n

def cammina():
	global pos
	pos += 1

def __prog():
	if chiosco():
		compra_panini(2)
		if salita():
			mangia_panini(2)
	else:
		if salita():
			mangia_panini(1)
	cammina()


def solve():
	global count, pos
	k = 0
	free_down = 0
	cfd = []
	cfu = []
	new = []
	while pos < length:
		if chiosco():
			compra_panini(2)
			if salita():
				mangia_panini(2)
		else:
			if salita():
				cfu.append(pos)
				if count == 0:
					k += 1
					compra_panini(2)
					if free_down > 0:
						free_down -= 1
						new.append(cfd.pop())
					else:
						new.append(cfu.pop())
						mangia_panini(1)
				mangia_panini(1)
			else:
				cfd.append(pos)
				free_down += 1
		cammina()
	return k, new

def gen(r1):
	global heights, dir, chi, panini, count, pos
	dir = [0 for _ in range(length)]
	chi = [0 for _ in range(length-1)]
	ups = random.sample(range(length), random.randint(4,6))
	for i in ups:
		dir[i] = 1
	ups = [x-1 for x in ups if x > 0]
	downs = [x for x in range(length-1) if x not in ups]
	for i in random.sample(ups, random.randint(1,len(ups)-1)):
		chi[i] = 1
	for i in random.sample(downs, random.randint(1,len(downs)-1)):
		chi[i] = 1

	heights = [0 for _ in range(length+1)]
	for i in range(length):
		heights[i+1] = heights[i] + 0.1 + random.random()*max(min(0.9-heights[i],0.3),0) if dir[i]==1 else heights[i]-0.1-random.random()*max(min(heights[i]-0.1,0.3),0)
	hmin = min(heights)
	hmax = max(heights)
	heights = [int((h-hmin)/(hmax-hmin)*100) for h in heights]
	count, pos, panini = 0, 0, 0

	while pos < length:
		__prog()
		panini = max(panini, -count)

	panini += r1
	count, pos = panini, 0
	while pos < length:
		__prog()
	ans1 = count
	count, pos = 0, 0
	ans2, sol2 = solve()
	return ans1, ans2, sol2

ban1 = set()
ban2 = set([0])

def build_variant(r1):
	global ban1, ban2
	ans1, ans2 = 0, 0
	while ans1 in ban1 or ans2 in ban2:
		ans1, ans2, sol2 = gen(r1)
	ban1.add(ans1)
	ban2.add(ans2)
	return dict(
		length=length,
		heights=heights,
		dir=dir,
		chi=chi,
		panini=panini,
		ans1=ans1,
		sol1=[len([i for i in range(1,length) if chi[i-1]==1 and dir[i]==0]), len([i for i in range(length) if (i==0 or chi[i-1]==0) and dir[i]==1])],
		wrong1=list(random.sample([i for i in set([ans1-2,ans1-1,ans1+1,ans1+2,panini]) if i!=ans1 and i>0], 3)),
		ans2=ans2,
		wrong2=list(random.sample([i for i in range(1,6) if i!=ans2], 3)),
		sol2=sol2,
	)

print(json.dumps([build_variant(**data) for i, data in enumerate(variants_input)]))
