---
variants:
  - maxINT: 36
    minINT: 32
    sol: 6
  - maxINT: 46
    minINT: 42
    sol: 9
  - maxINT: 52
    minINT: 48
    sol: 12
  - maxINT: 68
    minINT: 64
    sol: 7
---

Consideriamo il seguente algoritmo, che prende in ingresso un intero positivo $N$:

- Se $N$ vale $1$, l’algoritmo termina.
- Se $N$ è pari, dividi $N$ per $2$, altrimenti (se $N$ è dispari) moltiplicalo per $3$ e aggiungi $1$.

Per esempio, applicato al valore $N = 6$, l’algoritmo produce la seguente sequenza (di lunghezza $9$, contando anche il valore iniziale $N = 6$ e il valore finale $1$): $6, \, 3, \, 10, \, 5, \, 16, \, 8, \, 4, \, 2, \, 1$.

La congettura di Collatz, chiamata anche congettura $3N+1$, afferma che l’algoritmo qui sopra termini sempre per qualsiasi valore $N$; in altre parole, se prendo un qualsiasi numero intero maggiore di $1$, applicare la regola numero $2$ conduce sempre al numero $1$.

Considerando i numeri compresi tra $\js{minINT}$ e $\js{maxINT}$ (estremi inclusi), qual è il valore **minimo** della lunghezza della sequenza (calcolata usando l’algoritmo descritto qui sopra)?

?> {sol}
