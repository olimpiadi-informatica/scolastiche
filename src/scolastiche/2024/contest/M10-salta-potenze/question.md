import variants from "./variants.py";

_Carlo la cavalletta_ ama saltare sulla retta dei numeri interi. Inizialmente si
trova in $0$. Successivamente, per ogni $k$ =$0, 1, 2, 3, \ldots, \js{moves}$ sceglie
se saltare in avanti di $2^k$ unità, saltare indietro di $2^k$ unità oppure stare fermo.
In quanti interi $x$ tali che $\js{low} \le x \le \js{hi}$ può trovarsi **alla fine** di questo processo?
**Attenzione:** prima di finire, Carlo può anche trovarsi in posizioni $x$ maggiori di $\js{hi}$ o minori di $\js{low}$.

- [x] $\js{correct1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$

> - All'inizio, Carlo può trovarsi solo nell'intervallo $[0, 0]$ contenente solo il punto $0$.
> - Dopo la mossa con $k = 0$, Carlo può spostarsi a sinistra di $1$ (e andare nell'intervallo $[-1, -1]$), rimanere fermo (quindi nell'intervallo $[0, 0]$) o spostarsi a destra di $1$ (nell'intervallo $[1, 1]$). Unendo tutti questi intervalli, ottengo che dopo la prima mossa Carlo si può trovare in qualsiasi coordinata intera in $[-1, 1]$.
> - Alla mossa con $k = 1$, gli intervalli da unire sono $[-3, -1]$, $[-1, 1]$, $[1, 3]$, quindi Carlo può raggiungere tutte le coordinate intere in $[-3, 3]$.
> - Continuando così, dimostro che alla fine Carlo si può trovare in qualsiasi punto in $[-2^{\js{moves}+1}+1, 2^{\js{moves}+1}-1]$. In particolare, questo intervallo comprende tutti i punti interi in $[\js{low}, \js{hi}]$, che sono $\js{hi} - (\js{low}) + 1 = \js{correct1}$.
>
> ![3.1](3-1.asy)

---

Se invece Carlo non potesse mai stare fermo, quanti ne potrebbe raggiungere?


- [x] $\js{correct2}$
- [ ] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] $\js{wrong2[3]}$

> - All'inizio, Carlo può trovarsi solo nell'intervallo $[0, 0]$ contenente solo il punto $0$.
> - Dopo la mossa con $k = 0$, Carlo può spostarsi a sinistra di $1$ (e andare nell'intervallo $[-1, -1]$) o spostarsi a destra di $1$ (nell'intervallo $[1, 1]$). Unendo tutti questi intervalli, ottengo che dopo la prima mossa Carlo si può trovare in qualsiasi coordinata dispari in $[-1, 1]$. Dato che dalla mossa con $k=1$ in poi Carlo può muoversi solo di un numero pari di unità, da ora in poi in ogni intervallo considero solo le coordinate intere dispari.
> - Alla mossa con $k = 1$, gli intervalli da unire sono $[-3, -1]$, $[1, 3]$, quindi Carlo può raggiungere tutte le coordinate dispari in $[-3, 3]$.
> - Continuando così, dimostro che alla fine Carlo si può trovare in qualsiasi punto dispari in $[-2^{\js{moves}+1}+1, 2^{\js{moves}+1}-1]$. In particolare, questo intervallo comprende tutti i punti dispari in $[\js{low}, \js{hi}]$, che sono $\js{correct2}$.
>
> ![3.2](3-2.asy)
