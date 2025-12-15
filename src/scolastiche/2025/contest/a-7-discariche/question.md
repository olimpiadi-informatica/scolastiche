import variants from "./variants.py";


La città di _Scart City_ è famosa per le sue numerose discariche. Ogni discarica ha un _livello di odorosità_ $k$, che vuol dire che se ne sente l'odore in tutte le case fino ad una distanza di $k$. Per esempio, in questa configurazione solo la casa più a destra è abbastanza lontana dalla discarica:

![esempio](esempio0.asy)

Vuoi acquistare alcune case nel _quartiere stretto_, che è una linea di $\js{l}$ isolati come in figura:

![quartiere stretto](part1.asy?v=variants.py)

Quante sono le case del quartiere stretto da cui non si sente l'odore di nessuna discarica?

- [x] $\js{ans1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$

> Se simuliamo la situazione descritta su un pezzo di carta,
> escludendo le case troppo vicine ad una discarica e contando quelle valide,
> otteniamo che la risposta è $\js{ans1}$.
>
> ![soluzione](part1sol.asy?v=variants.py)

---

Sei anche interessato alle case nel _quartiere quadro_, che è composto da $\js{n} \times \js{m}$ isolati come in figura:

![quartiere quadro](part2.asy?v=variants.py)

Attenzione che l'odore **a ogni passo** si propaga a tutti gli isolati direttamente adiacenti, ma **non in diagonale** (ma diversi passi di propagazione possono avvenire in direzioni diverse).
Per esempio, in questa configurazione ci sono $8$ case abbastanza lontane dalla discarica:

![esempio](esempio1.asy)

Quante sono le case del quartiere quadro da cui non si sente l'odore di nessuna discarica?

- [x] $\js{ans2}$
- [ ] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] $\js{wrong2[3]}$

> Anche in questo caso è possibile simulare la situazione descritta, come nella prima domanda.
> Il modo migliore è riportare la mappa su un pezzo di carta, e poi segnare le aree verso
> cui si espande l'odore di ciascuna discarica, come nella figura seguente. Contando le aree
> che restano fuori dall'espansione di ogni discarica otteniamo la risposta, che è $\js{ans2}$.
>
> ![soluzione](part2sol.asy?v=variants.py)
>
> **Approfondimento:** l'espansione dell'odore da una discarica si può pensare come ad una
> [_visita in ampiezza_](https://it.wikipedia.org/wiki/Ricerca_in_ampiezza) sulle celle della
> griglia, fino ad una certa ampiezza massima data.
