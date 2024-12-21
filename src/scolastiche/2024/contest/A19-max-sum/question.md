import variants from "./variants.py";

Elia è nel suo negozio di quaderni preferito. Davanti a sé ha una fila di quaderni, e ha assegnato ad ognuno di essi un valore in base a quanto gli piace. Vuole comprare alcuni di essi, ma ha deciso di non comprare $2$ quaderni che si trovano vicini.
Qual è la massima somma dei valori dei quaderni che può comprare?
Per esempio se i valori fossero questi:

![Immagine](esempio.asy?v=variants.py)

la somma massima ottenibile sarebbe $16$.

Rispondi considerando che questa è la lista dei valori dei quaderni, in ordine da sinistra a destra.

![Immagine](array1.asy?v=variants.py)

?> {ans1}

> Non ha senso comprare quaderni di valore $0$ (se non li compro, ottengo una soluzione con la stessa somma).
> Quindi guardo gli intervalli massimali contenenti solo quaderni di valore $1$, e da ogni intervallo mi conviene prendere il primo quaderno, il terzo, il quinto, e così via.
> Se ho un intervallo lungo $x$, posso prendere metà dei quaderni, arrotondata per eccesso. Adesso basta sommare il numero di quaderni che posso prendere su tutti gli intervalli.
> 
> In alternativa, anche la strategia "guardo i quaderni da sinistra a destra, e se ne trovo uno di valore $1$ che posso prendere lo prendo" funziona.
> In entrambi i modi si può calcolare la risposta corretta che è quindi $\js{ans1}$.
>
> ![7.1](7-1.asy)

---

Quale sarebbe invece la massima somma se i valori fossero questi?

![Immagine](array2.asy?v=variants.py)

?> {ans2}

> Qui non sembra esserci una strategia semplice (senza memoria) per prendere i quaderni. Ad esempio, "guardo da sinistra a destra e prendo un quaderno se posso e ha valore positivo" non funziona.
> Neanche "guardo i quaderni partendo da quello di valore massimo e se posso prenderne uno lo prendo" funziona!
> Ad esempio, se ho quaderni di valore $[2, 1, 1, 2]$, conviene saltare il terzo quaderno e prendere il primo e il quarto. Se i valori sono $[1, 3, 1]$, conviene prendere solo il secondo quaderno. Se i valori sono $[2, 3, 2]$, conviene prendere il primo e il terzo quaderno.
> Le possibilità diverse sembrano troppe!
> 
> Per gestirle, possiamo provare a creare un algoritmo che in qualche modo considera tutti i modi possibili di prendere i quaderni. Ad esempio, posso calcolare $f(i) = $ _massima somma dei valori se guardo solo $i$ quaderni, dal primo fino all'$i$-esimo da sinistra_.
> In questo modo, ho due casi:
> - non prendo il quaderno in posizione $i$, quindi la risposta è $f(i-1)$ perché mi riconduco a guardare i quaderni fino alla posizione $i-1$;
> - prendo il quaderno in posizione $i$, e a quel punto non posso più prendere quello in posizione $i-1$ ma mi riconduco a guardare quelli fino alla posizione $i-2$. Se i quaderni hanno valori $a_1, a_2, \ldots, a_n$, la risposta sarebbe quindi $f(i - 2) + a_i$.
> 
> Quindi posso calcolare tutti i valori di $f(i)$ da sinistra a destra usando $f(i) = \max(f(i - 1), f(i - 2) + a_i)$, considerando che se $i \leq 0$, $f(i) = 0$.
> i valori di $f(i)$ per $i=1 \ldots \js{test2.length}$ che ottengo in questo modo sono questi (riportati per comodità sotto alla lista dei valori corrispondenti):
>
> ![Immagine](array3.asy?v=variants.py)
> 
> e la risposta corretta è quindi $\js{ans2}$!
> Questo problema è un classico esempio di _programmazione dinamica_. Se vuoi approfondire l'argomento, queste sono alcune guide che potresti leggere:
> 
> - [Guida per le selezioni territoriali - Capitolo 7 (italiano)](https://training.olinfo.it/bugatti.pdf#page=66)
> - [Dispense di programmazione dinamica (italiano)](https://wiki.olinfo.it/extra/unimi/dinamica.pdf)
> - [Competitve Programmer's Handbook - Capitolo 7 (inglese)](https://training.olinfo.it/cph.pdf#page=75)
> - [USACO Guide - Introduction to DP (inglese)](https://usaco.guide/gold/intro-dp)
>
> ![7.2](7-2.asy)
