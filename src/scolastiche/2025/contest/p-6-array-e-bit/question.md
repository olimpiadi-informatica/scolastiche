import variants from "./variants.py";

Un _array_ $a$ di lunghezza $n$ è una sequenza di numeri interi indicizzati da zero, che indichiamo con $a[0], a[1], \ldots a[n-1]$.

Durante una pausa dallo studio del greco antico hai scoperto la funzione `ribalta`! Questa funzione dato un `array`, un indice di `inizio` e una `lunghezza`, modifica l'array invertendo l’ordine dei suoi primi `lunghezza` elementi a partire da `array[inizio]`:

```srs
function ribalta(array: integer[], inizio: integer, lunghezza: integer)
    fine <- inizio + lunghezza - 1
    for i in [0 ... lunghezza / 2) do
        (array[inizio + i], array[fine - i]) ← (array[fine - i], array[inizio + i])
    end for
end function
```

![ribalta](ribalta.asy?s=0.7)

Ora vuoi usare questa funzione per generare un codice segreto!
Dato un `array` di lunghezza totale $t = \js{l1}$, esegui questo procedimento:

```srs
for i in [0 ... t) do
    array[i] <- i
end for
len <- t
while len >= 2 do
    for i in [0 ... t / len) do
        ribalta(array, i * len, len)
    end for
    len <- len / 2
end while
```

![code](code.asy?s=0.7)

Alla fine del procedimento, che numero sarà contenuto in `array[{x1}]`?

- [x] $\js{ans1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$

> Proviamo a replicare il procedimento passo dopo passo.
> Dopo il primo ciclo for (contatore), l'array conterrà i valori:
>
> $[0, 1, 2, 3, 4, 5, 6, 7]$
>
> A questo punto inizia il ciclo while (ripeti mentre) con `len` pari a 8.
> Questa prima iterazione chiama la funzione `ribalta` una sola volta, con
> $i = 0$, su tutto l'array. Questo ribalta tutti i valori, ottenendo:
>
> $[7, 6, 5, 4, 3, 2, 1, 0]$
>
> Nella seconda iterazione, `len` diventa pari a 4. Quindi viene chiamata la
> funzione `ribalta` due volte, con $i= 0$ e $1$, sulla prima metà e poi sulla
> seconda metà dell'array. A questo punto, `array` diventa:
>
> $[4, 5, 6, 7, 0, 1, 2, 3]$
>
> Similmente, nella terza iterazione vengono ancora ribaltati tutti gli elementi
> dell'array a coppie, ottenendo:
>
> $[5, 4, 7, 6, 1, 0, 3, 2]$
>
> Ne segue che `array[{x1}]` è pari a $\js{ans1}$ (attenzione che gli indici partono da zero).

---

Non essendo soddisfatto di un codice così corto, decidi di ripetere il procedimento con un `array` di lunghezza totale $t = \js{l2}$.
Alla fine del procedimento, che numero sarà contenuto in `array[{x2}]`?

?> {ans2}

> Questa volta non possiamo replicare il procedimento passo dopo passo, ma dobbiamo ragionare sul suo comportamento in generale.
> All’inizio l’array contiene `array[i] = i`.
> A ogni iterazione, il procedimento applica una serie di ribaltamenti su tutti i blocchi di una data lunghezza `len` dell'array.
> Se pensiamo alla rappresentazione binaria dei valori dell'array, questi ribaltamenti **invertono i `len` bit meno significativi**
> di ogni valore nell'array.
>
> La prima iterazione inverte quindi tutti i bit; la seconda tutti i bit tranne quello più significativo, e così via.
> In totale, il bit più significativo viene invertito una volta, il secondo più significativo due volte, eccetera:
> dato che invertire un bit due volte equivale a non fare niente, possiamo considerare che il procedimento alla fine
> inverte i bit in posizione dispari di tutti gli elementi (contando le posizioni a partire dal bit più significativo).
>
> Dato che $1024 = 2^{10}$, dobbiamo considerare la rappresentazione binaria in 10 bit.
> Inizialmente `array[{x2}] = {x2}`, che in binario corrisponde a `{b2}`. Invertendo i bit dispari dal più significativo,
> otteniamo `{i2}`, che in decimale corrisponde a $\js{ans2}$.