---
variants:
  - n: 30291
    correct: 303
    wrong: [30292, 3030, 3029]
  - n: 83495
    correct: 835
    wrong: [83496, 8350, 8349]
  - n: 77293
    correct: 773
    wrong: [77294, 7730, 7729]
  - n: 67898
    correct: 679
    wrong: [67899, 6790, 6789]
  - n: 55193
    correct: 552
    wrong: [55194, 5520, 5519]
---

Considera la seguente funzione ricorsiva, che prende come argomento due interi `n` e `x`:

```srs
function print_numbers(n: integer, x: integer)
    if x > n then
        return
    end if
    output(x)
    for i in [0 ... 10) do
        if x != 0 or i != 0 then
            print_numbers(n, 10 * x + i)
        end if
    end for
end function
```

Supponiamo di chiamare `print_numbers(N, 0)`. Quale numero viene stampato in output immediatamente dopo $\js{n}$?

- [x] $\js{correct}$
- [ ] $\js{n}$ è l'ultimo numero stampato
- [ ] $\js{wrong[0]}$
- [ ] $\js{wrong[1]}$
- [ ] $\js{wrong[2]}$

> La risposta è $\js{correct}$.
>
> Si tratta di capire quali numeri stampa la funzione `print_numbers`, e in che ordine li stampa. Notiamo intanto che:
>
> - il valore di `n` è costante e uguale a $\js{n}$;
> - il valore di `x` è sempre maggiore o uguale di $0$;
> - non vengono mai stampati numeri maggiori di $\js{n}$, perché se `x` è maggiore di $\js{n}$ la funzione ritorna immediatamente.
>
> Ora, l'osservazione cruciale è che, dopo aver stampato `x`, la funzione chiama se stessa con tutti i numeri ottenuti aggiungendo in fondo a `x` una cifra da $0$ a $9$ (è questo il significato dell'espressione `10 * x + i`). Ad esempio, se il valore di `x` è $28$, la funzione si chiama ricorsivamente passando (come secondo argomento) prima $280$, poi $281$, e così via fino a $289$.
>
> Allora, un numero $a$ viene stampato prima di un numero $b$ esattamente quando, scrivendo $a$ e $b$ in cifre, $a$ viene prima di $b$ in "ordine alfabetico". Quindi, per esempio, $3201$ viene prima di $39$ perché la prima cifra (da sinistra) è uguale, mentre la seconda è più piccola in $3201$. Inoltre, questa osservazione ci dice anche che tutti i numeri tra $0$ e $\js{n}$ vengono stampati, prima o poi.
>
> Il numero che viene immediatamente dopo $\js{n}$ in "ordine alfabetico" è $\js{correct}$, come si può facilmente constatare. Nota che la risposta **non** è $\js{wrong[0]}$, perché tale numero è maggiore di $\js{n}$ e quindi non viene stampato.
>
> _Chiarimento:_ Qual è il significato dell'`if` con condizione `x != 0 or i != 0`? Se `x` è uguale a $0$ (cioè quando `print_numbers` viene chiamata per la prima volta) e `i` è anch'esso uguale a $0$, l'espressione `10 * x + i` vale di nuovo $0$. Quindi, se non escludessimo questo caso si entrerebbe in una ricorsione infinita!
>
> ![Statistiche risposte]({n}.svg)
