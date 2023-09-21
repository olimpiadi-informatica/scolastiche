---
variants:
  - espressione: (C \land (\lnot B)) \lor \lnot A
    sol: 11110100
  - espressione: (A \land (\lnot B)) \lor \lnot C
    sol: 10101110
  - espressione: (B \land (\lnot C)) \lor \lnot A
    sol: 11110010
  - espressione: (B \land (\lnot A)) \lor \lnot C
    sol: 10111010
---

Siano A, B, C tre variabili booleane, ossia variabili che possono assumere solo uno dei due valori 1 (VERO) e 0 (FALSO). Ricordiamo che gli operatori booleani sono:

1. **not** A, che si indica con $\lnot$A, vale VERO se A è FALSO, e FALSO se A è VERO;
2. A **and** B, che si indica con A$\land$B, vale VERO se sia A sia B sono VERO, e FALSO in tutti gli altri casi;
3. A **or** B, che si indica con A$\lor$B, vale FALSO se sia A sia B sono FALSO, e VERO in tutti gli altri casi.

Si consideri la seguente tabella di verità per le due variabili booleane A e B e l'espressione logica $\lnot A \lor B$:

| A   | B   | $\lnot A  \lor B$ |
| --- | --- | ----------------- |
| 0   | 0   | 1                 |
| 0   | 1   | 1                 |
| 1   | 0   | 0                 |
| 1   | 1   | 1                 |

La tabella di verità fornisce, in funzione dei valori di A e B, i valori di verità dell'espressione logica, che possiamo rappresentare con una unica stringa di quattro caratteri zero o uno, in questo caso 1101 (leggendo dall'alto al basso i quattro valori di verità dell'espressione).

Considerate la seguente tabella di verità corrispondente all'espressione logica $\js{espressione}$ definita sulle variabili booleane A, B e C.

| A   | B   | C   | $\js{espressione}$ |
| --- | --- | --- | ------------------ |
| 0   | 0   | 0   |                    |
| 0   | 0   | 1   |                    |
| 0   | 1   | 0   |                    |
| 0   | 1   | 1   |                    |
| 1   | 0   | 0   |                    |
| 1   | 0   | 1   |                    |
| 1   | 1   | 0   |                    |
| 1   | 1   | 1   |                    |

Quale è la stringa, di otto caratteri zero o uno, che rappresenta l'espressione logica di questa tabella di verità (sempre leggendo dall'alto al basso)?

?> {sol}
