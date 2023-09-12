Ti viene data la tabella $8 \times 8$ mostrata sotto, che contiene tutti i numeri interi da $1$ a $64$:

![Tabella 8 per 8 riempita con i numeri da 1 a 64](table.asy)

Un _rettangolo_ è una sotto-tabella ottenuta intersecando un insieme di righe consecutive e un insieme di colonne consecutive. Nota che anche una singola casella è un rettangolo. Diciamo che un rettangolo è _interessante_ se, detto $N$ il numero di caselle da cui è formato, esso contiene tutti i numeri da $1$ a $N + 1$, **tranne uno**.

Ad esempio, il rettangolo evidenziato nella figura che segue è interessante: esso è formato da $N = 6$ caselle e contiene i numeri ${nums}$, ovvero tutti i numeri tra $1$ e $N + 1 = 7$ tranne il ${t}$.

![Stessa tabella di prima, in cui è evidenziato un rettangolo 2 per 3](highlighted-rectangle.asy)

1. Quanti sono i rettangoli interessanti formati da **al massimo** $5$ caselle?

---

{{ans1}}

La risposta è **{{ans1}}**.

Nella seconda parte mostreremo una strategia che funziona in generale, ma per ora ne descriviamo una più semplice che permette di calcolare la risposta ristretta a rettangoli ``piccoli''.

I rettangoli interessanti formati da al massimo $5$ caselle sicuramente contengono solo numeri minori o uguali di $6$, e quindi sono interamente contenuti nella regione evidenziata in grigio:

![Tabella con numeri minori o uguali di 6 colorati in grigio](highlighted-small.asy)

Pertanto, possiamo controllare uno per uno tutti questi rettangoli, e per ciascuno determinare se è interessante oppure no.
Nota, in particolare, che i rettangoli $1 \times 1$ formati dalla singola casella con il numero $1$ e dalla singola casella con il numero $2$ sono sicuramente interessanti (perché?).

In totale si contano ${correct1}$ rettangoli interessanti.

![Statistiche risposte]({{stats-0}}.svg)

---

2. Quanti sono i rettangoli interessanti formati da **almeno** $6$ caselle?

---

{{ans2}}

La risposta è **{{ans2}}**.

In questo caso, provare tutti i rettangoli è decisamente troppo dispendioso in termini di tempo.
Tuttavia, ragionando come prima, si può osservare che i rettangoli interessanti formati da $k$ caselle sono sicuramente contenuti nel sottoinsieme della tabella formato dalle caselle $1, \, 2, \, \dots, \, k + 1$.
Più precisamente, tali rettangoli devono consistere di tutte queste caselle tranne una.

Ad esempio, i rettangoli formati da $k = {k}$ caselle sono contenuti nella regione evidenziata in grigio nella figura qui sotto (costituita da tutti i numeri tra $1$ e ${k-plus-1}$), ed è facile notare (a colpo d'occhio) che c'è esattamente un tale rettangolo formato da esattamente ${k}$ caselle, quello con il bordo spesso.

![Tabella con numeri da 1 a k+1 colorati in grigio e rettangolo evidenziato con bordo spesso](highlighted-big.svg)

(Per molti valori di $k$, ovviamente, non ci sarà nessun rettangolo interessante formato da $k$ caselle.)

Un modo per fare questa operazione velocemente ``su carta'' è annerire le caselle della tabella una alla volta, partendo da quella con il numero $1$ e procedendo in ordine crescente.
Ogni volta che anneriamo una casella, controlliamo se ci sono rettangoli che consistono di tutte le caselle annerite tranne una, e in tal caso quanti sono (ricordandoci che dobbiamo considerare solo i rettangoli interessanti con almeno $6$ caselle).

In totale, si verifica che ci sono ${correct2}$ rettangoli interessanti.

![Statistiche risposte]({{stats-1}}.svg)

---

```py variants
def build_variant(i, table, x, y, z, w, t, k):
    asy_str = 'int n = 8;\n' \
        + f'int x = {x}, y = {y}, z = {z}, w = {w};\n' \
        + f'int k = {k};\n' \
        + 'int[][] table = {\n' \
        + ',\n'.join('\t{' + ', '.join(map(str, row)) + '}' for row in table) \
        + '};\n'

    n = 8

    def flatten(matrix):
        content = []
        for line in matrix:
            content.extend(line)
        return content

    content = flatten(table)
    content.sort()
    assert len(content) == n * n
    assert content[0] == 1 and content[-1] == n * n
    assert len(set(content)) == n * n

    # Compute answers
    ans1, ans2 = 0, 0

    for x in range(n):
        for y in range(n):
            for z in range(x + 1, n + 1):
                for w in range(y + 1, n + 1):
                    rect = flatten([table[i][y:w] for i in range(x, z)])
                    rect.sort()
                    if rect[-1] <= len(rect) + 1:
                        if len(rect) <= 5:
                            ans1 += 1
                        else:
                            ans2 += 1
    
    return dict(
        asy=asy_str,
        replacements=dict(
            text={
                '{{ans1}}': ans1,
                '{{ans2}}': ans2
            },
            url={
                '{{stats-0}}': f'{i}-0',
                '{{stats-1}}': f'{i}-1'
            },
            math={
                '{t}': t,
                '{nums}': r', \, '.join(str(i) for i in range(1, 8) if i != t),
                '{correct1}': ans1,
                '{correct2}': ans2,
                '{k}': k,
                '{k-plus-1}': k + 1
            }
        )
    )

variant_inputs = [
    dict(
        table=[
            [59, 63, 58, 62, 64, 61, 60, 52],
            [54, 20, 25, 22, 21, 23, 24, 16],
            [55, 18, 15, 9, 5, 7, 6, 27],
            [57, 19, 13, 4, 2, 1, 3, 26],
            [53, 17, 11, 14, 12, 8, 10, 29],
            [47, 32, 30, 28, 33, 31, 35, 34],
            [56, 43, 40, 36, 37, 41, 39, 38],
            [51, 49, 48, 45, 50, 46, 44, 42]
        ],
        x=4, y=2, z=6, w=3,
        t=4, k=15
    ),
    dict(
        table=[
            [60, 61, 56, 63, 62, 58, 64, 59],
            [47, 51, 54, 57, 53, 55, 52, 50],
            [43, 41, 39, 38, 40, 28, 42, 49],
            [27, 16, 8, 17, 14, 21, 20, 44],
            [25, 10, 13, 12, 11, 18, 23, 37],
            [29, 5, 2, 1, 4, 15, 19, 48],
            [26, 9, 7, 3, 6, 24, 22, 45],
            [34, 30, 36, 32, 35, 33, 31, 46]
        ],
        x=2, y=5, z=4, w=6,
        t=5, k=16
    ),
    dict(
        table=[
            [62, 48, 32, 2, 7, 5, 10, 30],
            [64, 52, 41, 1, 3, 4, 13, 26],
            [44, 43, 36, 8, 11, 9, 6, 28],
            [59, 56, 39, 12, 16, 17, 14, 31],
            [61, 47, 40, 20, 21, 19, 18, 27],
            [60, 53, 37, 24, 15, 25, 23, 22],
            [63, 46, 29, 33, 35, 38, 42, 34],
            [58, 51, 49, 54, 57, 55, 45, 50]
        ],
        x=3, y=0, z=5, w=1,
        t=6, k=16
    )
]

variants = {
    i: build_variant(i, **data) for i, data in enumerate(variant_inputs)
}
```