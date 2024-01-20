---
variants:
  - sol: 233
    sequenza: 11,50
  - sol: 100
    sequenza: 8,28
  - sol: 80
    sequenza: 8,24
  - sol: 154
    sequenza: 10,38
---

La successione di Fibonacci, i cui primi numeri sono $1, 1, 2,3, 5, 8, 13, \dots$ si ottiene in base alla seguente definizione ricorsiva:

$$
\begin{array}{lcll}
\mathrm{Fib}(1) &=& 1 & \\
\mathrm{Fib}(2) &=& 1 & \\
\mathrm{Fib}(n) &=& \mathrm{Fib}(n-2) + \mathrm{Fib}(n-1) & \text{ se $n$ maggiore di $2$}
\end{array}
$$

Si consideri invece la successione
$$1,2,\js{sequenza},C$$
ottenuta in base alla seguente definizione ricorsiva:

$$
\begin{array}{lcll}
\mathrm{Gib}(1) &=& 1 & \\
\mathrm{Gib}(2) &=& 2 & \\
\mathrm{Gib}(n) &=& A \times \mathrm{Gib}(n-2) + B \times \mathrm{Gib}(n-1) & \text{ se $n$ maggiore di $2$}
\end{array}
$$

$A$, $B$ e $C$ sono numeri di cui dovete desumere il valore. Quanto vale $C$?

?> {sol}
