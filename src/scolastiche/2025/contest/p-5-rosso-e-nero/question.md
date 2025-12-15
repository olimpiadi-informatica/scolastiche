import variants from "./variants.py";

Un _array_ $a$ di lunghezza $n$ è una sequenza di numeri interi indicizzati da zero, che indichiamo con $a[0], a[1], \ldots a[n-1]$.

Durante la tua ultima passeggiata in montagna, hai trovato due array lungo il percorso: `nero` e `rosso`, entrambi della stessa lunghezza $n = \js{n}$.
Rappresentando `nero[x]` con una freccia nera da `x` a `nero[x]`, e `rosso[x]` con una freccia rossa tratteggiata da `x` a `rosso[x]`, gli array sono:

![rappresentazione](fig.asy?v=variants.py)

Vorresti ora passeggiare lungo i due array seguendo questo procedimento, dato un certo valore `y` che devi scegliere:

```srs
x <- 0
while x != n - 1 do
    if x == y then
        x <- rosso[x]
    else
        x <- nero[x]
    end if
end while
```

![code](code.asy?s=0.7)

Quanti diversi valori di `y` tra $0$ e $\js{n-1}$ potresti scegliere di modo che la passeggiata termini, senza andare avanti all'infinito?

- [x] $\js{ans1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] non ce ne sono, la passeggiata va sempre avanti all'infinito

> Potremmo risolvere il problema simulando la passeggiata per ogni possibile valore di `y`.
> Ma possiamo fare di meglio! Leggendo il programma, capiamo che la passeggiata parte
> dalla posizione `x` uguale a zero (inizio dell'array), e si ferma se raggiungiamo la
> posizione `x` uguale a `n-1` (fine dell'array). A ogni passo, nella passeggiata seguiamo
> un arco nero, a meno che `x` sia proprio uguale a `y`: solo in quel caso seguiamo un arco rosso.
> 
> Nota che i primi $\js{ans2}$ elementi neri formano un ciclo,
> e i successivi $\js{n-ans2}$ elementi formano un secondo ciclo.
> Dato che `x` parte da zero (nel primo ciclo), e la passeggiata
> termina in `n-1` (nel secondo ciclo), l'unico modo per cui la
> passeggiata non vada avanti all'infinito è che l'arco rosso
> che parte in posizione `y` ci consenta di uscire dal primo
> ciclo e arrivare nel secondo, cioè `y` deve essere minore di
> $\js{ans2}$ e `rosso[y]` deve essere maggiore o uguale a $\js{ans2}$.
>
> Questi valori si possono vedere facilmente nella figura,
> scandendo gli archi dalla prima alla seconda metà dell'array,
> che sono $\js{ans1}$. 

---

Oltre a non voler passeggiare all'infinito, vorresti anche assicurarti di visitare **tutte le posizioni** tra $0$ e $\js{n-1}$.
Per fortuna, ti sei accorto che potresti anche modificare un valore dell'array `rosso`!
Per quale coppia di valori `y` e `rosso[y]` riusciresti a visitare tutti i numeri?

Indica la risposta come **AB**, dove **A** è il valore di `y` e **B** è il nuovo valore da assegnare a `rosso[y]`.

?> {ans2-1}{ans2}

> Dal ragionamento di prima, sappiamo che `y` deve essere nella prima metà
> dell'array e `rosso[y]` nella seconda. Dati tali valori, notiamo che la
> passeggiata salterebbe tutti i valori intermedi tra `y` e `rosso[y]`.
> Segue che `y` e `rosso[y]` devono essere consecutivi, e quindi
> `y` $= \js{ans2-1}$ e `rosso[y]` $= \js{ans2}$. 