Cosa stampa la seguente funzione al termine dell'esecuzione?

```srs id=main inline-code-context=count.0
function count()
	variable k: integer
	k <- 0
	for i in [0 ... 100) do
		for j in [0 ... 200) do
			if i == j then
				k <- k + 1
				<placeholder>
			end if 
		end for
	end for
	output(k)
end function
```

- [x] $100$
- [ ] $200$
- [ ] $300$
- [ ] $1000$
- [ ] $2000$

> La risposta è $100$.
> 
> La variabile `k`, il cui valore iniziale è $0$, viene incrementata ogni volta che gli indici `i` e `j` che iterano i due cicli <code>for</code> sono uguali. Poiché `i` va da $0$ a $99$ e `j` da $0$ a $199$, questo accade solo quando le due variabili sono entrambe uguali a un numero compreso tra $0$ e $99$, ovvero $100$ volte.
