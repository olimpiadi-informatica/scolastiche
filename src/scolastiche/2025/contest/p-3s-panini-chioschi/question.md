import variants from "./variants.py";

Vuoi andare a fare una passeggiata in montagna, portandoti dietro {panini} panini:

![montagne](fig.asy?v=variants.py)

La passeggiata prevede {length} tratti di percorso e passa per alcuni chioschi del pane. In ogni tratto seguirai questo procedimento, partendo dall'inizio del tratto:

```srs
if chiosco() then
    compra_panini(2)
    if salita() then
        mangia_panini(2)
    end if
else
    if salita() then
        mangia_panini(1)
    end if
end if
cammina()
```

![code](code.asy?s=0.7)

Con quanti panini rimarrai alla fine del percorso?

- [x] $\js{ans1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] non ti rimarrà nessun panino

> In ogni posizione abbiamo quattro possibili situazioni:
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

Una volta arrivato, ti sei accorto di aver dimenticato i panini!
C'è solo una soluzione: sperare che aprano altri chioschi nel frattempo. I chioschi possono aggiungersi all'inizio di ogni tratto (incluso il primo) in cui non c'è già un chiosco.
Quanti chioschi dovrebbero aggiungersi **al minimo**, perché tu possa riuscire ad arrivare fino in fondo al percorso rispettando il procedimento, e partendo **senza panini**?

- [x] $\js{ans2}$
- [ ] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] non serve aggiungere nessun chiosco

> Proviamo a simulare il percorso partendo senza panini. Ogni volta che ci ritroveremmo
> a dover mangiare un panino ma non ne abbiamo, andiamo ad aggiungere un chiosco in una
> posizione libera nella parte di percorso dall'inizio fino alla posizione corrente.
> Ci conviene sempre aggiungere un chiosco in un tratto in discesa, se ce n'è uno senza
> chioschi, perché in quel caso guadagnamo due panini. Se non è possibile, ci accontentiamo
> di aggiungerlo in un tratto in salita, e in quel caso guadagnamo un solo panino (perché
> evitiamo di perdere 1 panino in quel tratto in salita). Simulando questo procedimento
> troviamo la soluzione, che richiede di aggiungere $\js{ans2}$ chioschi:
>
> ![soluzione](sol.asy?v=variants.py)
