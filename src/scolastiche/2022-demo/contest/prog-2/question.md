La seguente funzione prende come argomenti un intero positivo `n`, un intero `k` compreso tra $1$ e `n` (inclusi), e un array `a` di lunghezza `n` contenente interi **distinti** compresi tra $0$ e $1000$ (inclusi). La funzione restituisce il `k`-esimo elemento di `a` in ordine crescente. Parte del codice, indicata da `[???]`, è mancante.

```srs
function kth_element(n: integer, k: integer, a: integer[]) -> integer
	variable m: integer
	for i in [0 ... k) do
		m <- 0
		for j in [1 ... n) do
			if a[j] < a[m] then
				m <- j
			end if
		end for
		[???]
	end for
  return a[m]
end function
```

Quale dei seguenti può essere il pezzo mancante?

- [ ] {" "}
  ```srs
  if i < k - 1 then
    a[m] <- -1
  end if
  ```
- [x] {" "}
  ```srs
  if i < k - 1 then
    a[m] <- 1001
  end if
  ```
- [ ] {" "}
  ```srs
  if i > 0 then
    a[m] <- -1
  end if
  ```
- [ ] {" "}
  ```srs
  if i > 0 then
    a[m] <- 1001
  end if
  ```
- [ ] {" "}
  ```srs
  a[m] <- -1
  ```

> La risposta è
>
> ```srs
> if i < k - 1 then
>   a[m] <- 1001
> end if
> ```
>
> Il ciclo for più interno assegna a `m` l'indice del minimo valore contenuto in `a` in quel momento. Quindi, vogliamo che alla `k`-esima iterazione il minimo di `a` corrisponda al `k`-esimo minimo nell'array originale. Questo è possibile se, a ogni iterazione del ciclo for esterno, ad `a[m]` viene assegnato un valore più grande di tutti gli altri elementi, ad esempio $1001$. Dobbiamo, tuttavia, evitare questo assegnamento all'ultima iterazione (cioè quando `i` è uguale a `k - 1`), perché altrimenti la funzione restituirebbe $1001$.
