import variants from "./variants.py";

Hai due numeri $a$ e $b$, puoi fare due tipi di operazioni:
- diminuire $a$ di $10^k$, per un qualche $k$ intero non negativo.
- diminuire $a$ di $b$.

Se $a = \js{a1}$ e $b = \js{b1}$, quante mosse servono al minimo per rendere $a = 0$?

?> {ans1}

> Per la proprietà commutativa, l'ordine delle sottrazioni non importa, quindi possiamo prima sottrarre $\js{b1}$ e poi sottrarre $10^k$ (diminuendo quindi una cifra di $1$: non conviene mai fare riporto).
> Proviamo a sottrarre $\js{b1}$ un po' di volte ($0, 1, 2, \ldots$), e il numero di mosse rimanenti è la somma delle cifre del numero sulla lavagna.
> Sottraendo $\js{b1}$ il numero giusto di volte, la somma delle cifre diventa particolarmente piccola, per un numero totale di $\js{ans1}$ operazioni.
>
> ![4.1](4-1.asy)

---

Se invece $a = \js{a2}$ e $b = \js{b2}$, quante mosse servono al minimo per rendere $a = 0$?

?> {ans2}

> Qui $b$ è piccolo, quindi provare a sottrarre $b$ finché il numero sulla lavagna non è negativo è troppo lungo.
> Ma possiamo notare che, dopo aver trovato una sequenza di $\js{ans2}$ operazioni che porta il totale a zero, non ha senso sottrarre $\js{b2}$ più di $\js{ans2}$ volte, e questo accorcia i conti.
>
> ![4.2](4-2.asy)
