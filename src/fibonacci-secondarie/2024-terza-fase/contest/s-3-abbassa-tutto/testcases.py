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

def solve(n, p, c):
    p = [x[0] for x in p]
    p.reverse()
    c = copy.deepcopy(c)
    c.reverse()

    s = [0] * n
    s[0] = p[0]
    for i in range(1, n):
        s[i] = s[i-1] + p[i]

    st = [(c[0], 0)]
    for i in range(1, n):
        while st and st[-1][0] >= c[i]:
            st.pop()
        st.append((c[i], i))

    ris = st[0][0] * s[st[0][1]]
    for i in range(1, len(st)):
        ris += st[i][0] * (s[st[i][1]] - s[st[i-1][1]])

    return ris


# Parametri:
# N - N dell'input
# MaxC - massimo valore per C[i]
# MaxP - massimo valore per P[i]
# type - -1: decrescente, 0: random, 1: crescente, 2: costante

def gen(N, MaxC, MaxP, type):
    P = [(random.randint(0, MaxP), i, randname(8, 12)) for i in range(N)]
    P.sort(reverse=True)  # Sort P in decreasing order

    MinC = MaxC if type == 2 else 0
    if MaxC == 1:
        C = [min(random.randint(0, 2), 1) for _ in range(N)]
        C[0] = 1
    else:
        C = [random.randint(MinC, MaxC) for _ in range(N)]
    if abs(type) == 1:
        C.sort(reverse=type<0)

    return P, C

type = [2, 1, -1, 0, 0, 0, -1, 1, 0, 0]
N = [5, 6, 4, 7, 6, 8, 9, 10, 11, 12]
mC = [10, 20, 30, 1, 50, 100, 1, 300, 1000, 3000]
mP = [7, 8, 9, 10, 11, 12, 13, 14, 15, 15]
for t,n,mc,mp in zip(type,N,mC,mP):
    P, C = gen(n, mc, mp, t)
    testcases.append({"N": n, "P": P, "C": C, "count": 0, "sol": solve(n,P,C), "pos": n, "highlight": 0, "stress": [0]*n})
print(json.dumps(list(testcases)))
