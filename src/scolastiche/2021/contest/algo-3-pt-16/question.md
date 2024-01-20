---
variants:
  - vettore: [2, -3, -1, 3, -2, 4, -3, 5, 1, -3, 2, -4, 3, -1, -1, 3]
    sol: 8
  - vettore: [2, -3, -1, 3, -2, 4, -3, 4, 1, -3, 2, -4, 3, -2, -1, 3]
    sol: 7
  - vettore: [2, -3, -1, 3, -2, 4, -3, 5, 3, -3, 1, -4, 3, -1, -1, 3]
    sol: 10
  - vettore: [2, -3, -1, 3, -2, 4, -3, 5, 2, -3, 5, -4, 2, -1, -1, 3]
    sol: 11
---

Dato un vettore di interi, positivi o anche negativi, si definisce **somma di sottovettore** il valore ottenuto sommando gli elementi di un sottovettore, ovvero un insieme **contiguo** di elementi del vettore.

Ad esempio, considerato il seguente vettore:

$$
[2,-4,3,1,-1,4,-2,1]
$$

La somma del sottovettore ottenuto considerando i primi tre elementi $[2,-4,3]$ vale 1. La massima somma di sottovettore che si può ottenere in questo vettore vale invece 7 e corrisponde al sottovettore $[3,1,-1,4]$.

Quanto vale la **massima somma di sottovettore** del vettore seguente?

$$
[\js{vettore}]
$$

?> {sol}
