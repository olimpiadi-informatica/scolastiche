import random
import json

# Impostiamo il seed per avere risultati riproducibili
random.seed(42)

# Diverse dimensioni per i livelli di difficoltà
N_VALUES = [4, 6, 8, 12]

testcases = []

for n in N_VALUES:
    # Generazione base dei prezzi (tra 1 e 20)
    prezzi = [random.randint(1, 20) for _ in range(n)]
    
    # Per N più grandi, creiamo scenari specifici per rendere il test più interessante
    if n >= 8:
        # Scenario "Crollo e Risalita": 
        # Inizia alto, scende molto (invita a non comprare), poi risale (invita a comprare)
        mid = n // 2
        # Prima metà: tendenza a scendere o bassi
        for i in range(mid):
            prezzi[i] = random.randint(1, 8)
        # Seconda metà: tendenza a salire o alti
        for i in range(mid, n):
            prezzi[i] = random.randint(10, 20)
            
        # Assicuriamoci che ci sia almeno un "buco" nel mezzo per testare il non-acquisto
        prezzi[mid] = 1 
        prezzi[mid-1] = 15

    elif n == 4:
        # Scenario semplice: alternanza basso-alto
        prezzi = [5, 10, 2, 8] # Due opportunità di guadagno chiare

    # Creiamo la descrizione testuale (utile per il debug o la UI)
    prezzi_desc = ', '.join([str(p) for p in prezzi])

    # Costruiamo l'oggetto JSON per il testcase
    # Nota: Inizializziamo pos=0, dir=1 (destra), guadagno=0 come da logica standard
    testcases.append({
        "N": n,
        "prezzo": prezzi,     # L'array dei prezzi richiesto dallo State
        "pos": 0,             # Posizione iniziale (primo coniglio/mela)
        "dir": 1,             # Direzione iniziale (verso destra)
        "guadagno": 0,        # Guadagno iniziale
        "prezziDesc": prezzi_desc, # Stringa descrittiva (opzionale ma utile)
    })

# Stampa l'output formattato come JSON
print(json.dumps(testcases))