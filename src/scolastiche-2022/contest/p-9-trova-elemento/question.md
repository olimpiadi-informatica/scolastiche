Considera la seguente funzione, che prende come argomenti un intero non-negativo `n` e un array di interi `v` di lunghezza `n`, e ritorna un intero.

```srs id=main inline-code-context=find.0
function find(n: integer, v: integer[]) -> integer
    for i in [0 ... n) do
        if v[i] == X then
            return i
        end if
    end for
    return -1
    <placeholder>
end function
```

Cosa viene restituito da `find(8, V)`?

---

- [x] ${correct}$
- [ ] ${wrong0}$
- [ ] ${wrong1}$
- [ ] ${wrong2}$
- [ ] ${wrong3}$

La risposta è ${correct}$.

La funzione <code className="inline-code">find</code> trova l'indice del **primo** elemento dell'array `v` uguale a ${x}$ (ricordiamo che gli indici partono da $0$), oppure restituisce $-1$ se un tale elemento non esiste.

Nell'array dato, il primo elemento uguale a ${x}$ è quello che ha indice ${correct}$.

![Statistiche risposte]({{stats}}.svg)

---

```py variants
variant_inputs = [
    (0, [5, 9, 2, 3, 0, 2, 4, 0], [-1, 2, 6, 7]),
    (1, [9, 1, 0, 2, 3, 1, 5, 4], [-1, 0, 2, 5]),
    (2, [0, 7, 1, 6, 2, 2, 6, 3], [-1, 2, 5, 6]),
    (3, [2, 9, 0, 0, 9, 3, 8, 3], [-1, 0, 1, 7]),
    (4, [1, 8, 4, 3, 8, 4, 5, 0], [-1, 1, 3, 5])
]

def build_variant(x, v, wrong):
    correct = v.index(x)
    return dict(
        replacements=dict(
            url={
                '{{stats}}': x
            },
            math={
                '{correct}': correct,
                '{wrong0}': wrong[0],
                '{wrong1}': wrong[1],
                '{wrong2}': wrong[2],
                '{wrong3}': wrong[3],
                '{x}': x
            },
            code={
                'X': x,
                'V': str(v)
            }
        )
    )

variants = {
    i: build_variant(*data) for i, data in enumerate(variant_inputs)
}
```
