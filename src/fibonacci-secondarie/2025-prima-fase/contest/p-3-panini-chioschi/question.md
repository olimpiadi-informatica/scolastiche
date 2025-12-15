import variants from "./variants.py";

Bunny è andato a fare una passeggiata in montagna, portandosi dietro {panini} panini:

![montagne](fig.asy?v=variants.py)

La passeggiata prevede {length} tratti di percorso e passa per alcuni chioschi del pane. In ogni tratto seguirà questo procedimento, partendo dall'inizio del tratto:

![code](code.asy?s=0.7)

Con quanti panini rimarrà alla fine del percorso?

- [x] $\js{ans1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] non gli rimarrà nessun panino

> In ogni posizione, Bunny si può trovare in quattro possibili situazioni:
> 
> - c'è un chiosco e la strada è in salita (compri $2$ panini ma li mangi subito);
> - c'è un chiosco e la strada è in discesa (compri $2$ panini);
> - non c'è un chiosco e la strada è in salita (mangi $1$ panino);
> - non c'è un chiosco e la strada è in discesa.
>
> Quindi, nel primo e nell'ultimo caso il numero di panini non cambia.
> A questo punto è sufficiente contare quante volte si presentano il 
> secondo e terzo caso, moltiplicarli per le loro rispettive variazioni 
> di panini e aggiungere i panini iniziali. La risposta è quindi
> $\js{panini} + \js{sol1[0]} \cdot 2 - \js{sol1[1]} \cdot 1 = \js{ans1}$.

---

Una volta arrivato, Bunny si è accorto che Tip-Tap gli ha mangiato tutti i panini!
Per farsi perdonare, Tip-Tap vuole aprire alcuni chioschi **aggiuntivi** lungo il percorso: può aggiungere chioschi all'inizio di ogni tratto (incluso il primo) in cui non c'è già un chiosco.
Quanti ne deve aggiungere **al minimo**, perché Bunny possa finire il percorso rispettando il suo procedimento, anche se parte **senza panini**?

- [x] $\js{ans2}$
- [ ] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] non serve aggiungere nessun chiosco

> Proviamo a simulare il percorso partendo senza panini. Ogni volta che Bunny si ritroverebbe
> a dover mangiare un panino ma non ne ha, andiamo ad aggiungere un chiosco in una
> posizione libera nella parte di percorso dall'inizio fino alla posizione corrente.
> Ci conviene sempre aggiungere un chiosco in un tratto in discesa, se ce n'è uno senza
> chioschi, perché in quel caso guadagnamo due panini. Se non è possibile, ci accontentiamo
> di aggiungerlo in un tratto in salita, e in quel caso guadagnamo un solo panino (perché
> evitiamo di perdere 1 panino in quel tratto in salita). Simulando questo procedimento
> troviamo la soluzione, che richiede di aggiungere $\js{ans2}$ chioschi:
>
> ![soluzione](sol.asy?v=variants.py)
