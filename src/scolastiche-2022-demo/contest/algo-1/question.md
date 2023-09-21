Vuoi costruire una percorso da parkour, composto da alcune piattaforme disposte in fila una dopo l'altra. La piattaforma $i$-esima può essere alta al massimo $M_i$ e deve essere alta almeno tanto quanto la piattaforma alla sua sinistra (se esiste).

Ad esempio, considera $M = [1, \, 3, \, 2, \, 4]$. Posizionare le piattaforme ad altezza $[1, \, 2, \, 2, \, 4]$ sarebbe una disposizione valida. Invece, $[1, \, 3, \, 2, \, 4]$ e $[1, \, 2, \, 2, \, 6]$ non lo sono: nel primo caso la terza piattaforma è più bassa della precedente, nel secondo l'ultima piattaforma è più alta del suo limite.

Considera ora

$$
M = [4, \, 3, \, 1, \, 2, \, 5, \, 4, \, 4, \, 6, \, 9, \, 9, \, 10, \, 8, \, 10].
$$

1. Qual è la massima somma delle altezze ottenibile?

?> 65

> La risposta è $65$.
>
> La sequenza di altezze deve essere debolmente crescente. Se chiamiamo $i$ l'indice del valore minimo della sequenza $M$, conviene porre tutte le piattaforme $0, \, \dots, \, i$ ad altezza esattamente $M_i$ (non possiamo farle più alte, altrimenti ci sarebbe almeno una piattaforma più bassa della sua precedente). A questo punto, troviamo il minimo degli elementi rimanenti (quelli da $i + 1$ in poi) e ripetiamo lo stesso procedimento. Continuando così fino ad aver assegnato tutte le altezze, si trova la soluzione per la quale la somma delle altezze è massima.
>
> Di seguito uno schema della soluzione, in cui le altezze massime sono segnate in rosso, e l'area blu è proprio la somma totale delle altezze.
>
> ![Soluzione](sol.asy)

---

Aggiungiamo una seconda condizione da rispettare: la differenza tra le altezze di due piattaforme consecutive non può mai essere maggiore di $1$.

1. Qual è la massima somma delle altezze ottenibile con entrambi i vincoli?

?> 59

> La risposta è $59$.
>
> Partiamo dalla soluzione della sezione precedente. Questa rispetta già il vincolo di non essere decrescente, ma potenzialmente fa dei "salti" troppo grandi tra elementi consecutivi. Per adattarla e rispettare anche il secondo vincolo, possiamo scorrere da sinistra la lista di altezze, e abbassarle quando necessario. In particolare, per ogni elemento $x$, se il successivo è maggiore di $x+1$ lo abbassiamo a $x+1$, il massimo valore ammissibile.
>
> Graficamente, la soluzione parte da quella della parte precedente (ora in grigio) e risale più lentamente in corrispondenza dei gradini:
>
> ![Soluzione](sol2.asy)
>
> In questo modo abbassiamo ogni elemento solo se strettamente necessario, mentre non è mai possibile alzare un valore rispetto alla soluzione del punto precedente, perché violeremmo il primo vincolo. Questo procedimento porta quindi alla soluzione ottima.
