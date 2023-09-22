---
variants:
  - i: 0
    esempio: nella prima piazza ci sono 15 unità di energia e se uno si sposta dalla prima alla seconda piazza consuma 8 unità di energia.
    badpiazza: 3
    badenergia: 2
    sol: 27
  - i: 1
    esempio: nella terza piazza ci sono 19 unità di energia e se uno si sposta dalla terza alla quarta piazza consuma 16 unità di energia.
    badpiazza: 4
    badenergia: 10
    sol: 58
  - i: 2
    esempio: nella prima piazza ci sono 20 unità di energia e se uno si sposta dalla prima alla seconda piazza consuma 17 unità di energia.
    badpiazza: 2
    badenergia: 11
    sol: 36
  - i: 3
    esempio: nella prima piazza ci sono 24 unità di energia e se uno si sposta dalla prima alla seconda piazza consuma 5 unità di energia.
    badpiazza: 6
    badenergia: 9
    sol: 14
---

Elon Musk vuole fare in grande stile la presentazione del nuovo modello della sua Tesla. Il problema è l'autonomia, e quindi hanno predisposto, nel giro che faranno tra otto diversi piazze della città (numerate da 1 a 8 in senso orario partendo dalla prima piazza in alto a sinistra), un pacco di batterie. La nuova Tesla dovrà fare un giro completo, partendo e terminando nella stessa piazza, non necessariamente la prima.

Vista la fretta, non ci si è accorti di un problema: non da tutte le piazze è possibile partire (dopo aver assorbito la carica delle batterie in quella piazza) e compiere un giro completo. Ovviamente in ogni piazza visitata la Tesla si ricarica di quella quantità di energia.

Per semplicità, nella mappa schematica riportata qui sotto (dove, come detto in precedenza, ogni piazza è rappresentata da un numero compreso tra 1 e 8, in senso orario partendo dalla prima piazza in alto a sinistra) si è indicato:

- il numero di unità di energia disponibili nella piazza;
- il numero di unità di energia che vengono consumate nel tragitto tra le due piazze.

![Mappa](mappa-{i}.svg?w=400)

Per esempio, {esempio}

Il tuo compito è di scoprire quali sono le due piazze $P1$ e $P2$ da cui è possibile fare il giro completo, rispettivamente, in senso orario e in senso antiorario. Ad esempio, sicuramente non si può partire dalla piazza $\js{badpiazza}$, dove le $\js{badenergia}$ unità di energia non consentono di andare in nessuna delle due piazze collegate.

Per rispondere al quesito devi scrivere di seguito i due numeri delle due piazza $P1$ e $P2$ **scrivendo prima il più piccolo e poi il più grande dei due**.

Ad esempio, se pensi che le due piazze siano la $5$ e la $1$, devi scrivere $15$ (mi raccomando, **non scrivere $51$**!).

?> {sol}
