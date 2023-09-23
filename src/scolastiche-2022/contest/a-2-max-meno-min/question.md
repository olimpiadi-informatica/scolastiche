Considera la seguente sequenza formata da $12$ numeri interi distinti compresi tra $1$ e $1000$:

<center>

$$
{numbers}
$$

</center>

Un _intervallo_ è una sequenza di numeri consecutivi nella sequenza data (formata da almeno un numero). Dato un intervallo $J$, indichiamo con $\max(J)$ e $\min(J)$, rispettivamente, il massimo e minimo valore di $J$. Ad esempio, se $J = [{interval}]$ (l'intervallo dal quarto al settimo numero) si ha $\max(J) = {max}$ e $\min(J) = {min}$.

Per ogni $k = 0, \, \dots, \, 1000$, chiamiamo $L_k$ la **massima** lunghezza di un intervallo $J$ tale che $\max(J) - \min(J) \le k$. Nota che $J$ può essere formato anche da un solo numero, nel qual caso $\max(J) = \min(J)$.

1. Quanto vale $L_{{k}}$?

---

{{ans1}}

La risposta è **{{ans1}}**.

Per calcolare $L_{{k}}$, possiamo scorrere tutti i possibili intervalli $J$, per ciascuno calcolare $\max(J) - \min(J)$, e considerare solo quelli per cui questo valore non supera ${{k}}$. Il valore cercato sarà la massima lunghezza di un intervallo considerato.

Gli intervalli sono, in totale, $12 \cdot 13 = 156$, quindi scorrerli tutti è un processo lento ma fattibile. Per velocizzarlo si possono fare osservazioni che riducono di molto il numero di intervalli da considerare. Per esempio, possiamo iterare su tutte le **coppie** di numeri della sequenza, diciamo $(x, \, y)$, imponendo che $x$ sia il minimo dell'intervallo e $y$ il massimo. Per la maggior parte delle coppie, questo non sarà possibile, perché tra $x$ e $y$ c'è un numero più piccolo di $x$ o più grande di $y$ (come accade per la coppia $({x}, \, {y})$). Per le altre coppie, controlliamo se $y - x \le {k}$ e, in quel caso, troviamo la massima lunghezza di un intervallo che contiene $x$ e $y$ e nessun numero minore di $x$ o maggiore di $y$.

Qualunque sia la strategia impiegata, alla fine si determina che l'intervallo più lungo che soddisfa la condizione è $J = {J}$, che ha lunghezza ${correct1}$ (e $\max(J) - \min(J) = {max-minus-min}$).

![Statistiche risposte]({{stats-0}}.svg)

---

Immagina di scrivere su un foglio i numeri $L_0, \, L_1, \, \dots, \, L_{1000}$.

2. Quanti numeri **distinti** compaiono sul foglio?

---

{{ans2}}

La risposta è **{{ans2}}**.

Per prima cosa, occorre osservare che la risposta non cambia se ci restringiamo ai $k$ che coincidono **esattamente** con $\max(J) - \min(J)$ per un qualche intervallo $J$. Questo perché per tutti gli altri $k$ il valore di $L_k$ è sicuramente uguale a uno dei precedenti. Infatti, sia $J$ un intervallo di lunghezza massima tale che $\max(J) - \min(J) \le k$. Allora, posto $k' = \max(J) - \min(J)$, si ha $L_k = L_{k'}$.

A questo punto l'idea è simile a quella della parte precedente, ma più raffinata. Scorriamo tutti gli intervalli $J$, per ciascuno calcoliamo il numero $k = \max(J) - \min(J)$ e, su un foglio, scriviamo $k$ e la lunghezza di $J$. Alla fine, raggruppiamo le coppie con lo stesso $k$, e in ogni gruppo prendiamo il valore massimo della lunghezza dell'intervallo, che coincide con $L_k$. La risposta è il numero di valori di $L_k$ distinti tra tutti i gruppi, che risulta essere ${correct2}$.

Con la stessa strategia di prima si può velocizzare molto il processo di iterazione sugli intervalli.

![Statistiche risposte]({{stats-1}}.svg)

---

```py variants
variant_inputs = [
    ([751, 12, 222, 844, 98, 189, 384, 502, 720, 608, 631, 407], 650),
    ([234, 81, 127, 657, 635, 782, 390, 628, 921, 95, 589, 678], 578),
    ([546, 764, 235, 872, 954, 23, 241, 891, 754, 345, 658, 812], 551)
]

def build_variant(ii, numbers, k):
    # Compute answers
    ans1 = 0
    J = []
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers) + 1):
            if max(numbers[i:j]) - min(numbers[i:j]) <= k and j - i > ans1:
                ans1 = j - i
                J = numbers[i:j]
    L = {}
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers) + 1):
            w = max(numbers[i:j]) - min(numbers[i:j])
            L[w] = max(L.get(w, 0), j - i)
    ans2 = len(set(L.values()))

    return dict(
        replacements=dict(
            text={
                '{{ans1}}': ans1,
                '{{ans2}}': ans2
            },
            url={
                '{{stats-0}}': f'{ii}-0',
                '{{stats-1}}': f'{ii}-1'
            },
            math={
                '{numbers}': r', \; '.join(str(x) for x in numbers),
                '{interval}': r', \, '.join(str(x) for x in numbers[3:7]),
                '{k}': k,
                '{max}': max(numbers[3:7]),
                '{min}': min(numbers[3:7]),
                '{correct1}': ans1,
                '{correct2}': ans2,
                '{x}': numbers[2],
                '{y}': numbers[7],
                '{J}': '[' + r', \, '.join(map(str, J)) + ']',
                '{max-minus-min}': max(J) - min(J)
            }
        )
    )

variants = {
    i: build_variant(i, *data) for i, data in enumerate(variant_inputs)
}
```
