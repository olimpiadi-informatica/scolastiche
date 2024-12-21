import variants from "./variants.py";

Considera la seguente funzione, che prende come parametri due interi **positivi** `l`, `r`, e restituisce un intero:

```srs
function calcola(l: integer, r: integer) -> integer
    variable a: integer[]
    variable sum: integer

    for i in [0...r) do
        a[i] <- 0
    end for

    for i in [l...r) do
        variable j: integer
        j <- i
        while j >= 1 do
            a[j] <- 1
            j <- j / 2
        end while
    end for

    sum <- 0
    for i in [0...r) do
        sum <- sum + a[i]
    end for
    return sum
end function
```

Che valore viene restituito da `calcola({l1}, {r1})`?

- [x] $\js{correct1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$

> Questa versione del problema si può risolvere a mano, simulando l'esecuzione del codice su carta.
>
> ![9.1](9-1.asy)

---

Che valore viene restituito da `calcola({l2}, {r2})`?

- [x] $\js{correct2}$
- [ ] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] $\js{wrong2[3]}$

> Qui invece conviene capire cosa fa effettivamente il codice. Intanto, tutti i valori in $[l, r)$ diventano $1$ (prima che $j$ venga diviso per $2$).
> Anche i valori in $[\lfloor l/2 \rfloor, \lceil r/2 \rceil)$ diventano $1$ (quando $j$ viene diviso per $2$ esattamente una volta).
> Notiamo che $j$ viene diviso per $2$ poche volte ($O(\log r)$). Quindi, continuando in questo modo, otteniamo pochi intervalli, che sono anche disgiunti, e possiamo calcolarne la lunghezza totale.
>
> ![9.2](9-2.asy)
