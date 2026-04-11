import random
import json
random.seed(0)

def genera_gruppi(N, K, contiguos=True, sorted=False):
    if N == K:
        return list(range(1,N+1))
    valori = list(range(1, K + 1))

    # assegna 1 a ciascun blocco
    lunghezze = [1] * K
    restanti = N - K

    # distribuisci il resto casualmente
    for _ in range(restanti):
        i = random.randrange(K)
        lunghezze[i] += 1

    # crea i blocchi
    gruppi = [
        [valori[i]] * lunghezze[i]
        for i in range(K)
    ]

    # mescola l’ordine dei blocchi
    random.shuffle(gruppi)

    # appiattisci
    G = [x for gruppo in gruppi for x in gruppo]

    if sorted:
        G.sort()    
    
    return G

N = [7, 5, 10, 15, 17, 50, 100, 200, 500, 1000]
M = [3, 5, 1, 6, 7, 10, 20, 1, 70, 100]

testcases = []

for n,m in zip(N, M):
    testcases.append({"N": n, "Ris": m, "G": genera_gruppi(n, m), "P": 0, "posizione_taxi": 0})

print(json.dumps(testcases))
