---
variants:
  - a: 10
    b: 7
  - a: 9
    b: 11
  - a: 12
    b: 5
  - a: 15
    b: 8
  - a: 7
    b: 12
  - a: 8
    b: 13
---

Considera la seguente funzione, che prende come argomento un intero **positivo** `n` e ritorna un intero:

```srs
function increase(n: integer) -> integer
    variable k: integer
    k <- 0
    for i in [0 ... {a}) do
        if k < n then
            k <- k + {b}
        end if
    end for
    return k
end function
```

Per quanti valori di `n` si ha che `increase(n)` è uguale a `n`?

- [x] $\js{a}$
- [ ] $1$
- [ ] $\js{b}$
- [ ] $\js{a * b}$
- [ ] Infiniti

> La risposta è $\js{a}$.
>
> Il valore di `k` parte da $0$ e incrementa sempre di $\js{b}$, quindi alla fine sarà sicuramente un multiplo di $\js{b}$. Inoltre, gli incrementi sono al massimo $\js{a}$ (il numero d'iterazioni del ciclo `for`), per cui il valore finale di `k` è al massimo $\js{a} \cdot \js{b} = \js{a * b}$.
>
> I multipli di $\js{b}$ (positivi) minori o uguali di $\js{a * b}$ sono esattamente $\js{a * b} / \js{b} = \js{a}$. È facile vedere che, se `n` è uno di tali numeri, il valore finale di `k` coincide con `n`.
>
> ![Statistiche risposte]({a},{b}.svg)
