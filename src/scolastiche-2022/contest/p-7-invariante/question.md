---
variants: 
- N: 1000
- N: 2000
- N: 4000
- N: 5000
---

Qual è il valore restituito da una chiamata alla seguente funzione?

```srs id=main inline-code-context=transform.0
function transform() -> integer
    variable i: integer
    variable j: integer
    i <- 0
    j <- {N}
    while (4 * i * i) - j < (2 * j * j) + i do
        i <- i + 2
        j <- j - 1
    end while
    return i + 2 * j
    <placeholder>
end function
```

- [x] $\js{2 * N}$
- [ ] $\js{N / 1000}$
- [ ] $\js{2 * N / 3}$
- [ ] $\js{N}$
- [ ] $\js{5 * N / 3}$

> La risposta è $\js{2 * N}$.
> 
> Il valore di `i + 2 * j` non cambia quando `i` viene incrementato di $2$ e `j` viene decrementato di $1$:
> questo segue dall'uguaglianza matematica $(i + 2) + 2 \cdot (j - 1) = i + 2 \cdot j$.
> Quindi il valore finale di tale espressione (che è quello che viene restituito) coincide con quello iniziale, ovvero $0 + 2 \cdot \js{N} = \js{2 * N}$ (e questo indipendentemente da quante volte viene eseguito il ciclo <code className="inline-code"><span className="srs-syntax keyword">while</span></code>).
> 
> *Precisazione:* A essere onesti, bisognerebbe verificare che il programma esce dal ciclo, cioè che prima o poi la condizione `(4 * i * i) - j < (2 * j * j) + i` diventa falsa.
> Questa verifica è lasciata come esercizio.
> 
> ![Statistiche risposte]({N}.svg)
