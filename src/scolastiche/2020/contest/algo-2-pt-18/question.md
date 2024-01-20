---
variants:
  - numA: 2
    numB: 8
    numC: 9
    sol: 37
  - numA: 3
    numB: 5
    numC: 10
    sol: 39
  - numA: 4
    numB: 6
    numC: 11
    sol: 41
  - numA: 5
    numB: 7
    numC: 12
    sol: 43
---

Considerate una piramide di numeri, come quella mostrata nella figura che segue. Definiamo una **discesa** come _una sequenza di numeri ottenuti partendo dalla cima della piramide e giungendo alla base, passando ogni volta per uno dei due numeri sottostanti_. Inoltre, il **valore** di una discesa è definito come _la somma dei numeri della discesa_. La discesa massima di una piramide è quella che ha il massimo valore tra tutte le discese della piramide.

Nell’esempio seguente è stata evidenziata la discesa ottenuta partendo dalla cima scendendo prima a sinistra e poi sempre a destra fino alla base. I numeri che compongono tale discesa sono $(1, 2, 7, 11)$ e la loro somma vale $21$, che è il valore di questa discesa.

$$
\begin{array}{ccccccc}
	&    &    &  \textbf{1} &  &  &  \\
	&    &  \textbf{2}  &   & \js{numC} &  &  \\
	& \js{numA}    &    &  \textbf{7} &  & 5  &  \\
\js{numB}	&      &  4   &   &  \textbf{11} &   & 6  \\
\end{array}
$$

Sia `Min` il valore della discesa di somma minima, `Max` il valore della discesa di somma massima. Quanto vale `Min + Max`?

?> {sol}
