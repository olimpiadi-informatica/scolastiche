import variants from "./variants.py";

Per esercitarsi nelle sottrazioni, Tip-Tap e Allie hanno inventato un gioco. Hanno scritto il numero $\js{a1}$ sulla lavagna e devono renderlo uguale a $0$ con una sequenza, la più breve possibile, di operazioni di questo tipo:
- diminuire di ${1}$ una qualsiasi cifra del numero;
- sottrarre $\js{b1}$ al numero (se il numero è almeno $\js{b1}$).

Ad ogni operazione, dopo aver calcolato il risultato, lo sostituiscono al numero scritto sulla lavagna.
Qual è il numero minimo di operazioni che devono fare per rendere il numero pari a $0$, partendo da $\js{a1}$?

![Lavagna](lavagna1.asy?v=variants.py)

- [x] $\js{ans1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$

> Per la proprietà commutativa, l'ordine delle sottrazioni non importa, quindi possiamo ipotizzare di fare prima le operazioni di sottrarre $\js{b1}$, e poi le operazioni per diminuire le cifre di $1$.
> Proviamo a sottrarre $\js{b1}$ un po' di volte ($0, 1, 2, \ldots$), e il numero di mosse rimanenti è la somma delle cifre del numero sulla lavagna.
> Sottraendo $\js{b1}$ il numero giusto di volte, la somma delle cifre diventa particolarmente piccola.
>
> ![4.1 primarie](4-1-primarie.asy)
> ![3.1 secondarie](3-1-secondarie.asy)

---

Tip-Tap e Allie ora hanno scritto un nuovo numero $\js{a2}$ sulla lavagna, e le operazioni consentite sono:
- diminuire di ${1}$ una qualsiasi cifra del numero;
- sottrarre $\js{b2}$ al numero (se il numero è almeno $\js{b2}$).

Qual è il numero minimo di operazioni che devono fare per rendere il numero pari a $0$, partendo da $\js{a2}$?

![Lavagna](lavagna2.asy?v=variants.py)

- [x] $\js{ans2}$
- [ ] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] $\js{wrong2[3]}$

> Qui $\js{a2}$ è grande, quindi provare a sottrarre $\js{b2}$ finché il numero sulla lavagna non è negativo è troppo lungo.
> Ma possiamo notare che, se troviamo una sequenza con risposta $\js{ans2}$, non ha senso sottrarre $\js{b2}$ più di $\js{ans2}$ volte, e questo accorcia i conti.
>
> ![4.2 primarie](4-2-primarie.asy)
> ![3.2 secondarie](3-2-secondarie.asy)
