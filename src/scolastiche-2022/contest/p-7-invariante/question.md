---
variants:
  - n: 1000
  - n: 2000
  - n: 4000
  - n: 5000
---

Qual è il valore restituito da una chiamata alla seguente funzione?

```srs
function transform() -> integer
    variable i: integer
    variable j: integer
    i <- 0
    j <- {n}
    while (4 * i * i) - j < (2 * j * j) + i do
        i <- i + 2
        j <- j - 1
    end while
    return i + 2 * j
end function
```

- [x] $\js{2 * n}$
- [ ] $\js{n / 1000}$
- [ ] $\js{Math.floor(2 * n / 3)}$
- [ ] $\js{n}$
- [ ] $\js{Math.floor(5 * n / 3)}$

> La risposta è $\js{2 * n}$.
>
> Il valore di `i + 2 * j` non cambia quando `i` viene incrementato di $2$ e `j` viene decrementato di $1$: questo segue dall'uguaglianza matematica $(i + 2) + 2 \cdot (j - 1) = i + 2 \cdot j$. Quindi il valore finale di tale espressione (che è quello che viene restituito) coincide con quello iniziale, ovvero $0 + 2 \cdot \js{n} = \js{2 * n}$ (e questo indipendentemente da quante volte viene eseguito il ciclo `while`).
>
> _Precisazione:_ A essere onesti, bisognerebbe verificare che il programma esce dal ciclo, cioè che prima o poi la condizione `(4 * i * i) - j < (2 * j * j) + i` diventa falsa. Questa verifica è lasciata come esercizio.
>
> ![Statistiche risposte]({n}.svg)
