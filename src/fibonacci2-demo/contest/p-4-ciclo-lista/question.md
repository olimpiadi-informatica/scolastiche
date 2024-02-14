Considera questo procedimento, che si riferisce ad un **lista** di numeri $A$, di dimensione rappresentata dalla **variabile** numerica $N$, e con l'ausilio della **variabile** numerica $P$.

![code](code.asy)

Il procedimento viene eseguito tre volte, sempre con $N$ pari a $9$ e con i tre seguenti valori per la lista $A$:

![array](fig1.asy?w=650)

Per quali di questi valori di $A$ il procedimento stampa _"trovato"_?

- [x] Solo il valore 1.
- [ ] Solo il valore 2.
- [ ] Solo il valore 3.
- [ ] Tutti.
- [ ] Solo i valori 1 e 3.

> Il procedimento scandisce la lista di numeri dall'inizio, andando a cercare una posizione che contiene uno zero seguito da un uno: se la trova stampa _"trovato"_, altrimenti non stampa nulla.
>
> Nel primo caso il procedimento stampa _"trovato"_, infatti quando $P$ è uguale a $2$ il valore in posizione $P$ di $A$ è $0$ e il valore in posizione $P+1$ è $1$.
>
> Nel secondo e nel terzo caso invece il procedimento non stampa nulla, dato che non esiste nessun valore di $P$ tale che la posizione $P$ di $A$ sia uguale a $0$ e la posizione $P+1$ di $A$ sia uguale a $1$.
