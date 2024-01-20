---
variants:
  - i: 0
    sol: 25
  - i: 1
    sol: 27
  - i: 2
    sol: 23
  - i: 3
    sol: 24
---

In una zona di montagna, abbastanza isolata, sta per arrivare finalmente una connessione internet di qualità, basata sul 5G. Nella mappa qui sotto vedete le case di un piccolo comprensorio; esiste una connessione di rete tra alcune coppie di case, come mostrato nella mappa qui sotto.

![](graph-{i}.svg?w=500)

Gli abitanti del comprensorio, per massimizzare la velocità, decidono che alcune case si doteranno di una antenna 5G in maniera da rispettare la seguente regola:
**ogni casa deve avere l'antenna 5G oppure deve essere collegata _direttamente_ a una casa con l'antenna 5G**.
Nota bene: due case collegate tra di loro possono, se conveniente, montare entrambe l'antenna 5G; la cosa importante, come detto in precedenza, è che se una casa non è dotata di antenna allora deve essere obbligatoriamente collegata a una con l'antenna.

A seconda delle case, il costo per installare l'antenna è diverso. Per esempio, come mostrato in figura, il costo per installare l'antenna nella casa A è pari a 11.

Aiuta gli abitanti del comprensorio a decidere dove costruire le antenne, in maniera da rispettare la regola descritta e da minimizzare la spesa complessiva, ovvero la somma dei costi delle antenne. Qual è il valore della spesa minima complessiva?

?> {sol}
