---
variants:
  - n: 10
    k: 7
    ns: [6, 13, 4, 7, 9]
    ks: [3, 8, 2, 6, 7]
  - n: 12
    k: 8
    ns: [8, 14, 5, 10, 11]
    ks: [4, 9, 2, 7, 9]
  - n: 14
    k: 9
    ns: [9, 17, 10, 7, 12]
    ks: [4, 10, 7, 3, 8]
  - n: 11
    k: 7
    ns: [6, 13, 7, 8, 9]
    ks: [2, 8, 4, 5, 7]
  - n: 13
    k: 9
    ns: [7, 14, 11, 10, 8]
    ks: [3, 10, 9, 7, 5]
---

I numeri da $1$ a $2022$ sono stati colorati con $\js{n}$ colori diversi, in modo che ogni gruppo di $\js{n}$ numeri consecutivi contenga **almeno** $\js{k}$ colori distinti. Quale delle seguenti affermazioni è necessariamente vera?

- [x] Ogni gruppo di $\js{ns[0]}$ numeri consecutivi contiene almeno $\js{ks[0]}$ colori distinti
- [ ] Ogni gruppo di $\js{ns[1]}$ numeri consecutivi contiene almeno $\js{ks[1]}$ colori distinti
- [ ] Ogni gruppo di $\js{ns[2]}$ numeri consecutivi contiene almeno $\js{ks[2]}$ colori distinti
- [ ] Ogni gruppo di $\js{ns[3]}$ numeri consecutivi contiene almeno $\js{ks[3]}$ colori distinti
- [ ] Ogni gruppo di $\js{ns[4]}$ numeri consecutivi contiene almeno $\js{ks[4]}$ colori distinti

> La riposta è **Ogni gruppo di $\js{ns[0]}$ numeri consecutivi contiene almeno $\js{ks[0]}$ colori distinti**.
>
> Tutte le opzioni sono della forma ``Ogni gruppo di $n$ numeri consecutivi contiene almeno $k$ colori distinti''. Facciamo vedere che quella con $n = \js{ns[0]}$ e $k = \js{ks[0]}$ è sempre vera. Procediamo per assurdo: supponiamo che esista un modo di colorare i numeri da $1$ a $2022$ (rispettando la regola del testo) che rende l'affermazione falsa. Allora esiste un gruppo di $\js{ns[0]}$ numeri consecutivi che contiene meno di $\js{ks[0]}$ colori distinti. Se estendiamo questo intervallo a sinistra e/o a destra di altri $\js{n} - \js{ns[0]} = \js{n - ns[0]}$ numeri, il nuovo intervallo contiene $\js{n}$ numeri e **al massimo** $\js{ks[0]} - 1 + \js{n - ns[0]} = \js{ks[0] - 1 + n - ns[0]} < \js{k}$ colori, che è una contraddizione.
>
> L'opzione con $n = \js{ns[1]}$ e $k = \js{ks[1]}$ è sbagliata perché, ad esempio, i numeri potrebbero essere stati colorati con esattamente $\js{k}$ colori. Poiché $\js{k} < \js{ks[1]}$, in questo caso sicuramente l'affermazione non sarebbe vera.
>
> Per quanto riguarda le altre, facciamo vedere che, se $n - k < \js{n} - \js{k} = \js{n - k}$, l'affermazione potrebbe non essere vera. Infatti, possiamo colorare i numeri nel modo che segue:
>
> - i primi $n - k + 2$ numeri con lo stesso colore;
> - tutti i numeri successivi con altri $\js{n - 1}$ colori, ripetuti a blocchi di $\js{n - 1}$ sempre nello stesso ordine.
>
> È facile verificare che questa colorazione rispetta le condizioni del testo, ma i primi $n$ numeri contengono solo $k - 1$ colori distinti. Dato che, nelle tre opzioni rimaste, si ha sempre $n - k < {n - k}$, tali risposte non sono corrette.
>
> ![Statistiche risposte]({n},{k}.svg)
