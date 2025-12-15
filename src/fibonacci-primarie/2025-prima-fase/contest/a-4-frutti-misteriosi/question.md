import variants from "./variants.py";

Allie ha comprato alcuni frutti. Ha provato a pesarli sulla sua bilancia, come vedi qui:

<div class="print:hidden">
![scale1](scale1.asy?v=variants.py)
![scale2](scale2.asy?v=variants.py)
</div>

<div class="hidden print:block">
![scale1](scale1.asy?v=variants.py)

![scale2](scale2.asy?v=variants.py)
</div>

In tutte e due le prove le bilance sono squilibrate! Il peso totale dei frutti a destra è maggiore del peso totale dei frutti a sinistra.
Sai che i frutti di tipo uguale pesano tutti uguale. Qual è l'ordine di peso dei frutti (dal più leggero al più pesante)?

- [ ] <span>![A](A.asy?v=variants.py&s=0.6)</span>
- [ ] <span>![B](B.asy?v=variants.py&s=0.6)</span>
- [ ] <span>![C](C.asy?v=variants.py&s=0.6)</span>
- [ ] <span>![D](D.asy?v=variants.py&s=0.6)</span>
- [x] <span>![E](E.asy?v=variants.py&s=0.6)</span>

> Dalla prima pesata, togliendo da entrambi i piatti una {names[perm[2]]} (frutti uguali hanno sempre lo stesso peso!), capiamo che la {names[perm[0]]} pesa meno che la {names[perm[1]]}.
> Con la seconda pesata capiamo invece che la {names[perm[2]]} pesa più della {names[perm[1]]}. Infatti, se sostituiamo nel piatto destro la {names[perm[0]]} con la {names[perm[1]]}
> (che è più pesante), quel piatto deve rimanere il più pesante.
> Di conseguenza l'ordine è {names[perm[0]]} (leggero) - {names[perm[1]]} (medio) - {names[perm[2]]} (pesante).

---

Allie ha comprato anche alcune verdure: patate, carote e melanzane. Le pesa sulla bilancia, come vedi qui:

<div class="print:hidden">
![scale3](scale3.asy?v=variants.py)
![scale4](scale4.asy?v=variants.py)
</div>

<div class="hidden print:block">
![scale3](scale3.asy?v=variants.py)

![scale4](scale4.asy?v=variants.py)
</div>

Cosa puoi capire sul peso di queste tre verdure?

- [x] la {names[perm[3]]} è la più leggera, ma non si sa niente sulle altre due verdure
- [ ] la {names[perm[3]]} è la più leggera, la {names[perm[5]]} è intermedia e la {names[perm[4]]} è la più pesante
- [ ] la {names[perm[5]]} è la più leggera, ma non si sa niente sulle altre due verdure
- [ ] la {names[perm[4]]} è la più leggera, la {names[perm[5]]} è intermedia e la {names[perm[3]]} è la più pesante
- [ ] non si sa niente sui pesi delle tre verdure

> Togliendo da ognuna delle pesate le verdure presenti su entrambi i piatti, possiamo vedere che sia la {names[perm[4]]} che la {names[perm[5]]}
> sono più pesanti della media delle altre due verdure. L'unico caso in cui questo può succedere è se la {names[perm[3]]} è la verdura più leggera.
> Invece, non possiamo dire nulla su {names[perm[4]]} e {names[perm[5]]}: infatti, la seconda pesata è identica alla prima scambiando
> {names[perm[4]]} con {names[perm[5]]}, e quindi tutto quello che si potrebbe dire di una delle due verdure si dovrebbe poter dire anche dell'altra.