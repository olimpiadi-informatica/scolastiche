Considera la seguente funzione, che prende come argomenti un intero **positivo** `n` e un array di interi **non-negativi** `v` di lunghezza `n`, e ritorna un intero:

```srs id=main inline-code-context=compute.0
function compute(n: integer, v: integer[]) -> integer
    variable x: integer
    x <- 0
    variable ret: integer
    ret <- 0
    for i in [0 ... n) do
        while x < v[i] do
            x <- x + 1
            ret <- ret + 1
        end while
        while x > v[i] do
            x <- x - 1
            ret <- ret + 1
        end while
    end for
    return ret
    <placeholder>
end function
```

Supponiamo di chiamare `compute(5, v)`, dove `v` è un array di lunghezza $5$ i cui elementi sono, **in qualche ordine**, ${sequence}$. Quali sono il minimo e il massimo possibile valore di ritorno della funzione?

---

- [x] ${min-correct}$ e ${max-correct}$
- [ ] ${min-wrong0}$ e ${max-wrong0}$
- [ ] ${min-wrong1}$ e ${max-wrong1}$
- [ ] ${min-wrong2}$ e ${max-wrong2}$
- [ ] ${min-wrong3}$ e ${max-wrong3}$

La risposta è **${min-correct}$ e ${max-correct}$**.

Cerchiamo di capire cosa fa la funzione.
A ogni iterazione del ciclo <code class="inline-code"><span class="srs-syntax keyword">for</span></code>, la variabile `x` viene incrementata o decrementata di $1$ alla volta finché non diventa uguale a `v[i]`.
A ogni incremento/decremento, il valore di `ret` viene incrementato di $1$.
Il valore di ritorno è il valore finale di `ret`, cioè il numero totale di volte che viene incrementato.

Gli incrementi durante l'iterazione `i` sono esattamente il valore assoluto di `v[i] - v[i - 1]` se `i` è maggiore di $0$, e sono `v[0]` se `i` è uguale a $0$ (dato che `x` parte da $0$).
Ad esempio, supponiamo di chiamare la funzione con l'array `ARRAY`.
Durante la prima iterazione, `ret` viene incrementata ${v0}$ volte e `x` diventa uguale a ${v0}$.
Durante la seconda iterazione, `x` diventa uguale a ${v1}$ e `ret` viene incrementata $|{v1} - {v0}| = {inc1}$ volte.
(Le barrette verticali denotano il valore assoluto.)
Poi, durante la terza iterazione, `ret` viene incrementata $|{v2} - {v1}| = {inc2}$ volte, e così via per altre due iterazioni.

Il numero minimo di incrementi si ha quando l'array `v` è ordinato in ordine crescente, ovvero quando coincide con `SORTED`, e vale ${sum-inc-min} = {min-correct}$.

Calcolare il massimo è un po' più complicato.
Ci si può convincere (ma non lo dimostriamo) che il modo migliore è alternare valori grandi e valori piccoli, partendo da quello massimo:
questo produce l'array `ALTERNATED`, per il quale il numero di incrementi vale ${sum-inc-max} = {max-correct}$.

![Statistiche risposte]({{stats}}.svg)

---

```py variants
variant_inputs = [
    [5, 3, 0, 3, 10],
    [4, 0, 12, 8, 4],
    [2, 7, 2, 9, 0],
    [9, 11, 5, 5, 0],
    [13, 0, 7, 10, 7]
]

def build_variant(sequence):
    # Compute answer
    min_correct = max(sequence)
    max_correct = 0
    sorted_seq = sequence.copy()
    sorted_seq.append(0)
    sorted_seq.sort()
    i, j = 0, len(sorted_seq) - 1
    alternated_seq = []
    while i < j:
        alternated_seq.append(sorted_seq[j])
        if i + 1 != j:
            alternated_seq.append(sorted_seq[i + 1])
        max_correct += 2 * sorted_seq[j] - sorted_seq[i] - sorted_seq[i + 1]
        i += 1
        j -= 1
    seq_sum = sum(sequence)
    
    return dict(
        replacements=dict(
            url={
                '{{stats}}': ''.join(map(str, sequence))
            },
            math={
                '{sequence}': r', \, '.join([str(x) for x in sequence]),
                '{min-correct}': min_correct,
                '{max-correct}': max_correct,
                '{min-wrong0}': 0,
                '{max-wrong0}': min_correct,
                '{min-wrong1}': seq_sum,
                '{max-wrong1}': max_correct,
                '{min-wrong2}': min_correct,
                '{max-wrong2}': seq_sum,
                '{min-wrong3}': 0,
                '{max-wrong3}': seq_sum,
                '{v0}': sequence[0],
                '{v1}': sequence[1],
                '{v2}': sequence[2],
                '{inc1}': abs(sequence[1] - sequence[0]),
                '{inc2}': abs(sequence[2] - sequence[1]),
                '{sum-inc-min}': ' + '.join(str(abs(x - y)) for x, y in zip(sorted_seq[1:], sorted_seq[:-1])),
                '{sum-inc-max}': ' + '.join(str(abs(x - y)) for x, y in zip(alternated_seq, [0] + alternated_seq[:-1]))
            },
            code={
                'ARRAY': '[' + ', '.join(str(x) for x in sequence) + ']',
                'SORTED': '[' + ', '.join(str(x) for x in sorted_seq[1:]) + ']',
                'ALTERNATED': '[' + ', '.join(str(x) for x in alternated_seq) + ']'
            }
        )
    )

variants = {
    i: build_variant(sequence) for i, sequence in enumerate(variant_inputs)
}
```