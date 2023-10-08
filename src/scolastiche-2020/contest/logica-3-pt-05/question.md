---
variants:
  - espressione: \lnot P \lor (R \land (\lnot Q))
    sol: 11110100
  - espressione: \lnot R \lor (P \land (\lnot Q))
    sol: 10101110
  - espressione: \lnot P \lor (Q \land (\lnot R))
    sol: 11110010
  - espressione: \lnot R \lor (Q \land (\lnot P))
    sol: 10111010
---

Siano $P$, $Q$, $R$ tre variabili booleane, ossia variabili che possono assumere solo uno dei due valori 1 (VERO) e 0 (FALSO). Ricordiamo che gli operatori booleani sono:

- **not** $A$, che si indica con $\lnot A$, vale VERO se A è FALSO, e FALSO se A è VERO;
- $A$ **and** $B$, che si indica con $A\land B$, vale VERO se sia A sia B sono VERO, e FALSO in tutti gli altri casi;
- $A$ **or** $B$, che si indica con $A\lor B$, vale FALSO se sia A sia B sono FALSO, e VERO in tutti gli altri casi. In assenza di parentesi l’ordine di valutazione degli operatori è quello sopra riportato (prima il not, poi l’and, infine l’or).

Si consideri la seguente tabella di verità per le due variabili booleane $P$ e $Q$ e l'espressione logica $\lnot P \lor Q$:

$$
\begin{array}{ll|c}
P & Q &  \lnot P  \lor Q\\
\hline
0 & 0 & 1 \\
0 & 1 & 1 \\
1 & 0 & 0 \\
1 & 1 & 1 \\
\end{array}
$$

La tabella di verità fornisce, in funzione dei valori di P e Q, i valori di verità dell'espressione logica, che possiamo rappresentare con una unica stringa di quattro caratteri zero o uno, in questo caso 1101 (leggendo dall'alto al basso i quattro valori di verità dell'espressione).

Considerate la seguente tabella di verità corrispondente all'espressione logica $\js{espressione}$.

$$
\begin{array}{lll|c}
P & Q & R &  \js{espressione}\\
\hline
0 & 0 & 0 &  \\
0 & 0 & 1 &  \\
0 & 1 & 0 &  \\
0 & 1 & 1 &  \\
1 & 0 & 0 &  \\
1 & 0 & 1 &  \\
1 & 1 & 0 &  \\
1 & 1 & 1 &  \\
\end{array}
$$

Quale è la stringa, di otto caratteri zero o uno, che rappresenta l'espressione logica di questa tabella di verità (sempre leggendo dall'alto al basso)?

?> {sol}
