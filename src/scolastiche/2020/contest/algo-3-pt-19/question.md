---
variants:
  - numeri: 7, 11, 4, 8, 21, 15
    sol: 162
  - numeri: 7, 11, 4, 8, 21, 18
    sol: 168
  - numeri: 7, 11, 4, 8, 21, 16
    sol: 164
  - numeri: 9, 11, 4, 8, 22, 17
    sol: 174
---

Avete un insieme di numeri di cui volete calcolare la somma totale. Potete sommare due numeri alla volta, inserendo il risultato nell’insieme di numeri, fino ad arrivare ad avere un numero solo, pari alla somma totale. Il costo di una somma è pari al valore della somma stessa. Ad esempio, se volete sommare i numeri $2$,$3$ e $7$, possiamo ad esempio sommare $2$ e $3$, con costo $5$, e poi sommare $5$ e $7$, con costo $12$. Il costo totale è quindi $5+12=17$. In alternativa, sommando prima $3$ e $7$ (costo $10$) e poi $2$ e $10$ (costo $12$), il costo totale per arrivare alla somma è $10+12=22$.

Se i numeri da sommare sono i seguenti:

$$
\js{numeri}
$$

qual è il costo minimo per sommarli tutti tra di loro?

?> {sol}
