import variants from "./variants.py";

Considera la seguente funzione, che prende come parametri un intero **positivo** `n`, e restituisce un intero:

```srs
function f(n: integer) -> integer
    variable arr: integer[]
    variable i: integer
    variable sum: integer
    for i in [1...n) do
        arr[i] <- 0
    end for
    i <- 0
    while i < n do
        arr[i] <- i
        i <- i + 2
    end while
    i <- 0
    while i < n do
        arr[i] <- i
        i <- i + 3
    end while
    for i in [1...n) do
        arr[i] <- max(arr[i-1], arr[i])
    end for
    sum <- 0
    for i in [0...n) do
        sum <- sum + i - arr[i]
    end for
    return sum
end function
```

<div className="break-inside-avoid">
Cosa viene restituito da `f({n1})`?

- [x] $\js{correct1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$
</div>

> Questo primo quesito si può risolvere anche eseguendo il programma a mano, e calcolando quindi il valore di `arr`, che si può osservare conterrà, in ogni posizione $i$, il massimo multiplo di $2$ o di $3$ minore o uguale di $i$.
>
> ![8.1](8-1.asy)

---

Cosa viene restituito da `f({n2})`?

- [x] $\js{correct2}$
- [ ] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] $\js{wrong2[3]}$

> Qui invece conviene accorgersi che `i - arr[i]` dipende solo dal resto di `i` quando viene diviso per $6$ (in particolare, fa $1$ se il resto è $1$ o $5$, $0$ altrimenti).
> Quindi il problema chiede di contare gli interi in $[1, n]$ che danno resto $1$ o $5$ divisi per $6$: di questi numeri ce ne sono due ogni sei, e quindi dato che $\js{n2}$ è multiplo di sei la risposta è $\js{n2} \times 2 / 6 = \js{n2/3}$.
>
> ![8.2](8-2.asy)
