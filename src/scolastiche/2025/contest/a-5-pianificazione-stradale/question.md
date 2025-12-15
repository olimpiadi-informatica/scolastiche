import variants from "./variants.py";

A Olinfolandia ci sono 12 città collegate da strade. Solo alcune di queste strade, tuttavia, sono ad alta velocità (rosso tratteggiato):

![immagine](immagine.asy?v=variants.py)

Qual è il numero minimo di strade normali (nere) che dovrebbero essere potenziate ad alta velocità (colorate di rosso), di modo che sia possibile raggiungere qualsiasi città partendo da qualsiasi altra città percorrendo solo strade ad alta velocità?

- [x] $\js{ans1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$

> Olinfolandia è descritto da un insieme di città collegate da strade. In informatica questo si chiama _grafo_, chiamando _nodi_ i punti (in questo caso le città) e _archi_ i collegamenti (in questo caso le strade).
> Quando si studiano i grafi, sono spesso importanti le _componenti connesse_: ovvero quegli insiemi di nodi tali per cui tutti i nodi di una stessa componente connessa si possono raggiungere l'un l'altro
> tramite gli archi del grafo, mentre non ci sono archi che collegano componenti connesse diverse.
>
> Nel caso di Olinfolandia disegnato in figura, possiamo contare le componenti connesse considerando **solo** le strade ad alta velocità (rosso tratteggiato), che sono $\js{ans1_plus}$ (attenzione: anche i singoli
> nodi scollegati da tutto contano come componenti connesse!). Per ogni strada che potenziamo ad alta velocità, il numero di componenti connesse diminuisce al massimo di una unità. Quindi, se vogliamo arrivare
> a collegare tutte le città (e quindi ad avere una sola componente connessa), dobbiamo aggiungere $\js{ans1_plus} - 1 = \js{ans1}$ strade.

---

Ora vorresti sapere anche quanto ti _costerebbe_ al minimo collegare tutta Olinfolandia all'alta velocità, sapendo che ogni strada normale ha un diverso costo per essere potenziata (il numero riportato sopra la strada). Qual è il costo totale minimo?

?> {ans2}

> Sappiamo dalla domanda precedente che dobbiamo aggiungere $\js{ans1}$ strade: ora dobbiamo scegliere quali per minimizzare il costo.
> Aggiungiamo quindi le strade una alla volta, considerando solo strade utili (che uniscono due diverse componenti connesse).
> Quando possiamo scegliere tra più strade, visto che vogliamo minimizzare il costo, scegliamo sempre **quella che costa meno**.
> Seguendo questo procedimento fino a collegare tutte le città otteniamo la risposta ottimale, che è $\js{ans2}$.
>
> **Approfondimento**: in informatica, questo algoritmo viene chiamato [_Algoritmo di Kruskal_](https://it.wikipedia.org/wiki/Algoritmo_di_Kruskal) per calcolare il _minimo albero ricoprente_.