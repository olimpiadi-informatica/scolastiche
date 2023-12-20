In quale ordine vanno messe queste istruzioni, per ottenere il numero $6$ nella variabile $x$?

![x=2](opz1.asy)

- [ ] $2$, $1$, $3$
- [x] $1$, $3$, $2$
- [ ] $3$, $2$, $1$
- [ ] $1$, $2$, $3$
- [ ] $2$, $3$, $1$

> All'inizio non sappiamo quale numero potrebbe esserci nella variabile $x$!
> Per essere sicuri di un risultato, dobbiamo iniziare mettendoci un valore definito, e quindi con il blocco $1$ che ci mette il valore $2$.
>
> A questo punto, se mettiamo prima il blocco $2$ la variabile $x$ raddoppierà a $4$, e poi con il blocco $3$ crescerà a $5$. Non va bene, perché dovevamo arrivare a $6$.
>
> Se invece mettiamo prima il blocco $3$ la variabile cresce a $3$, e poi con il blocco $2$ raddoppia a $6$, ottenendo il risultato voluto!
>
> ![primarie](6-primarie.asy) ![secondarie](6-secondarie.asy)