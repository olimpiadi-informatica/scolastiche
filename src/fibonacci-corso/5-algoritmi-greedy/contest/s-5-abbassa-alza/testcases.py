import random
import json
import string
import copy
random.seed(42)
testcases = []

def randscheme(minL, maxL):
    s = list('ab')
    random.shuffle(s)
    s = ' ' + ''.join(s)
    while True:
        if s[-1] == ' ':
            l = list('ab')
            random.shuffle(l)
            s += ''.join(l)
        elif s[-2:] == 'aa':
            s += 'b'
        elif s[-2:] == 'bb':
            s += 'a'
        elif s[-2:] == 'ba' and (random.random() < 0.5 or len(s) >= maxL-1):
            s += ' '
            if len(s) >= minL+2:
                return s
        else:
            s += random.choice('ab')

def randname(minL, maxL):
    ita = {' a': {' ': 'uoeia'}, ' b': {' ': 'znlbgvftdmrpsc'}, 'aa': {'e': 'iuoa', 'a': 'oeiu', 'u': 'oeia', 'i': 'ueoa', 'o': 'ei'}, 'bb': {'m': 'mbp', 'p': 'tlpr', 's': 'bfmvpsct', 'n': 'vfgsnzcdt', 'v': 'rv', 'd': 'dr', 'r': 'fpzblvgdncmrst', 'l': 'zfbpsdcmgvtl', 'c': 'lrc', 'z': 'z', 'f': 'lfr', 't': 'rt', 'g': 'rlgn', 'b': 'lbr'}, 'a ': {'e': ' ', 'o': ' ', 'i': ' ', 'a': ' '}, 'ab': {'a': 'fzbpdgcmvsltnr', 'e': 'fpzbcmvdgltsnr', 'u': 'fbpgmcdlsntr', 'i': 'bpfzdgvrmltscn', 'o': 'zfbdgpcvtmslrn'}, 'ba': {'m': 'uioea', 'p': 'uieao', 's': 'uaoie', 'n': 'uiaeo', 'v': 'uoiea', 'd': 'uaoei', 'r': 'uoaie', 'l': 'uaoie', 'c': 'uieao', 'z': 'ueoai', 'f': 'uaeoi', 't': 'uieao', 'g': 'uoaei', 'b': 'uoeai'}}
    while True:
        scheme = randscheme(minL, maxL)
        for _ in range(10):
            s = ' '
            for i in range(1, len(scheme)):
                d = ita[scheme[i-1:i+1]]
                if s[-1] not in d:
                    break
                s += random.choice(d[s[-1]])
            if s[-1] == ' ':
                return s[1:-1]


# Parametri:
# N - N dell'input
# MaxC - massimo valore per C[i]
# MaxP - massimo valore per P[i]
# type - -1: decrescente, 0: random, 1: crescente, 2: costante

def gen(N, MaxP):
    P = [[random.randint(1, MaxP), i, randname(8, 12).title()] for i in range(N)]
    P.sort(reverse=True)  # Sort P in decreasing order
    return P

N = [5, 6, 4, 7]
mC = [1, 5, 10, 7]
mP = [7, 8, 9, 10]
for n,mc,mp in zip(N,mC,mP):
    P = gen(n, mp)
    C = mc
    allie = max(random.randint(0, n-1), random.randint(0, n-1))
    K = random.randint(1, allie*C)
    P[allie][2] = "Allie Muschio"
    sol = P.index(P[K//C])
    sol = sum(x[0] - P[K//C][0] for x in P[:sol]) * C + (P[K//C][0]+1 - P[allie][0]) * K
    testcases.append({"N": n, "P": P, "C": C, "K": K, "count": 0, "sol": sol, "pos": n, "allie": allie, "highlight": 0, "stress": [0]*n})
print(json.dumps(list(testcases)))
