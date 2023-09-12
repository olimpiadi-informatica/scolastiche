Tip-Tap è andato in viaggio alla fattoria di Turing, e vuole riportare tante
carote ai suoi compagni di fattoria.

Nella fattoria di Turing ogni settimana si svolge il Mercato delle Carote, nel quale
è possibile comprare tante scatole di carote, ognuna al costo di $10$ carote.

Le carote fanno bene alla vista, e Tip-Tap ne mangia così tante che riesce a vedere attraverso le scatole!

Questi sono i numeri di carote contenuti in ogni scatola:

![fig1](fig1.asy?w=900)

Quante carote può guadagnare al massimo Tip-Tap comprando tutte le scatole che vuole?

?> 37

> Tip-Tap ottiene il massimo guadagno comprando e rivendendo tutte le scatole che contengono più di 10 carote. Ad esempio, per comprare e rivendere una scatola contenente 12 carote, Tip-Tap spende 10 carote e ne ricava 12, per un guadagno di 12-10=2 carote. Comprando quindi tutte le scatole tranne quelle di valore 1, 4, 9, 9, 8, 2, 3 il suo guadagno sarà di 37 carote.

---

Visto il grande successo del suo primo viaggio, Tip-Tap ha deciso di
tornare alla fattoria di Turing.

Questa volta, i coniglietti della fattoria di Turing hanno capito le intenzioni
di Tip-Tap, e hanno deciso di modificare le condizioni del Mercato delle Carote.
Utilizzano due tipi di scatole, le scatole blu quadrate e le scatole rosse tonde,
e hanno deciso che se Tip-Tap compra una scatola tonda e rossa, non gli venderanno nessuna scatola quadrata blu alla sua destra.

![fig2](fig2.asy?w=900)

Per esempio, se Tip-Tap compra la scatola con 8 carote, non potrà comprare
le scatole da 2, 3, 17 o 13 carote.

Quante carote può guadagnare al massimo Tip-Tap comprando tutte le scatole che vuole?

?> 22

> Come nella prima parte, a Tip-Tap conviene comprare e rivendere solo le scatole con più di 10 carote. Inoltre, per via della condizione imposta dal mercato, deve dividere le scatole in un punto, comprando solo scatole blu quadrate a destra di quel punto e solo scatole rosse tonde a partire da quel punto. 
> 
> Tip-Tap deve quindi capire efficientemente in quale punto dividere i due tipi di scatole. Si può procedere ad esempio partendo dal primo taglio possibile, tra la scatola blu quadrata 1 e la scatola tonda rossa 20. In questo caso Tip-Tap guadagna zero dalle scatole blu quadrate, ma guadagna 10+2+5 = 17 dalle scatole tonde rosse.
> 
> Il successivo taglio possibile è quello tra la scatola blu quadrata 11 e la scatola tonda rossa 9. Per capire quanto guadagna in questo caso, Tip-Tap può partire dalla stima precedente (17) e modificarla delle scatole cambiate. Per le scatole blu quadrate, Tip-Tap guadagna uno in più per la scatola 11, e quindi 1 in totale. Per le scatole tonde rosse, Tip-Tap guadagna 10 in meno per la scatola 20, e quindi 7 in totale. Questo taglio gli consente quindi di guadagnare 1+7=8 in totale, ed è pertanto peggiore di prima. 
> 
> Procedendo a provare tutti i possibili tagli, Tip-Tap arriva quindi a provare il migliore, che è tra la scatola blu quadrata 17 e la scatola tonda rossa 15. In questo caso Tip-Tap può comprare le scatole blu quadrate da 11, 18, 11 e 17 carote e la scatola rossa tonda da 15 carote, guadagnando 22 carote in totale.
