import variants from "./variants.py";

Il tabellone del gioco del coniglio contiene $10$ caselle, numerate da $1$ a $10$, con la casella $10$ adiacente alla $1$. Tip-Tap parte dalla casella $1$ e, in $4$ turni successivi, avanza di $\js{a[0]}$, di $\js{a[1]}$, di $\js{a[2]}$ e infine di $\js{a[3]}$ caselle.

![tabellone](fig.asy)

Alla fine, su che casella si trova?

- [ ] $\js{wrong[0]}$
- [ ] $\js{wrong[1]}$
- [x] $\js{correct}$
- [ ] $\js{wrong[2]}$
- [ ] $\js{wrong[3]}$

> Potremmo contare come avanza il coniglio dopo tutti questi spostamenti, ma sarebbe lungo e noioso!
>
> Invece, pensiamo a quanto si sposterà il coniglio in totale: $\js{a[0]} + \js{a[1]} + \js{a[2]} + \js{a[3]} = \js{a[0]+a[1]+a[2]+a[3]}$ caselle.
> Inoltre, ogni 10 caselle il coniglio torna al punto di partenza! Quindi dopo i primi $\js{a[0]+a[1]+a[2]+a[3]-(a[0]+a[1]+a[2]+a[3])%10}$
> spostamenti il coniglio sarà di nuovo sulla casella 1, poi farà ancora gli ultimi $\js{(a[0]+a[1]+a[2]+a[3])%10}$ spostamenti e
> arriverà sulla casella $\js{correct}$.
>
> ![primarie](2-primarie.asy) ![secondarie](1-secondarie.asy)
