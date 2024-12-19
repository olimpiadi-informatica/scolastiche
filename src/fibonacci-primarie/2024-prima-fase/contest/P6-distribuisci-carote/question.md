import variants from "./variants.py";

Carol ha $\js{k1}$ carote da distribuire agli altri conigli, che sono in fila ad aspettare.

![I coniglietti in fila](fila.asy?v=variants.py)

Per ogni coniglio in fila, da sinistra a destra, Carol decide quante carote dargli in base alla seguente regola:

![Algoritmo](code.asy)

Quante carote gli rimarranno alla fine, se all'inizio ne ha $\js{k1}$?

- [x] $\js{ans1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$

> Se incontra un coniglio adulto, Carol rimane con metà delle carote che aveva, arrotondate per difetto. Altrimenti, Carol perde una carota.
> Ripetendo l'operazione per ogni coniglio presente, si arriva alla soluzione.
>
> ![5.1 primarie](5-1-primarie.asy)
> ![5.1 secondarie](5-1-secondarie.asy)

---

Se alla fine della distribuzione Carol volesse rimanere con almeno $\js{k2}$ carote, quante ne deve avere almeno all'inizio?

- [x] $\js{ans2}$
- [ ] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] $\js{wrong2[3]}$

> Possiamo ripercorrere il numero di carote di Carol al contrario (dalla fine all'inizio).
> - Se l'ultimo coniglio è bambino, prima di incontrarlo Carol aveva una carota in più.
> - Se l'ultimo coniglio è adulto, prima di incontrarlo Carol aveva il doppio delle carote, oppure il doppio delle carote più una. Dato che vogliamo minimizzare il numero di carote iniziali, conviene dare a Carol il doppio delle carote (e mai il doppio delle carote più una).
>
> ![5.2 primarie](5-2-primarie.asy)
> ![5.2 secondarie](5-2-secondarie.asy)
