Considera il seguente procedimento, rappresentato come diagramma di flusso.

Il procedimento si riferisce ad un **lista** di numeri $a$, di dimensione rappresentata dalla **variabile** $n$.

```mermaid Diagramma di flusso
flowchart TD
    Inizio --> B[p ← 0]
    B --> C{{p è più grande di n-2?}}
    C -->|sì| H[scrivi 0]
    C -->|no| D{{la posizione di p in a vale 0?}}
    D --->|sì| E{{la posizione di p+1 in a vale 1?}}
    D -->|no| F[p ← p + 1]
    F --> C
    E --> G[scrivi 1]
    G --> Fine
    H --> Fine
```

Il procedimento viene eseguito tre volte, sempre con $n = 9$ e con i tre seguenti valori per la lista $a$:

![array](fig1.asy?w=650)

Per quali di questi valori di $a$ il procedimento scrive 1?

- [x] Solo il valore 1.
- [ ] Solo il valore 2.
- [ ] Solo il valore 3.
- [ ] Tutti.
- [ ] Solo i valori 1 e 3.

> Il procedimento scandisce la lista di numeri dall'inizio, andando a cercare una posizione che contiene uno zero seguito da un uno: se la trova scrive $1$, altrimenti scrive $0$.
>
> Nel primo caso il procedimento stampa $1$, infatti quando $p$ è uguale a $2$ il valore in posizione $p$ di $a$ è $0$ e il valore in posizione $p+1$ è $1$.
>
> Nel secondo e nel terzo caso invece il procedimento stampa $0$, dato che non esiste nessun valore di $p$ tale che la posizione $p$ di $a$ sia uguale a $0$ e la posizione $p+1$ di $a$ sia uguale a $1$.
