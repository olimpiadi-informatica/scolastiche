Considera la seguente procedura ricorsiva, che prende come argomento un intero
**non negativo** `n`:

```srs id=main inline-code-context=say_hello.0
function say_hello(n: integer)
	output("Hello")
	for i in [0 ... n) do
		say_hello(i)
	end for
  <placeholder>
end function
```

Chiamando `say_hello(2022)`, quante volte viene stampata in output la stringa `"Hello"`?

- [x] $2^{2022}$
- [ ] $2022 \cdot 2021 \cdots 2 \cdot 1$
- [ ] $2022$
- [ ] $2022^2$
- [ ] $2022 + 2021 + \cdots + 2 + 1$

> La risposta è $2^{2022}$.
> 
> Ogni volta che viene chiamata `output("Hello")`, consideriamo la sequenza di chiamate a <code>say_hello</code> che ha portato a tale stato (a eccezione della prima, quella con argomento $2022$). Gli argomenti passati alla funzione in queste chiamate sono interi distinti compresi tra $0$ e $2022 - 1 = 2021$, cioè corrispondono a un sottoinsieme di $\{0, \, \dots, \, 2021\}$. Inoltre, a ogni sottoinsieme corrisponde esattamente una sequenza di chiamate, e quindi una stampa di `"Hello"`. La risposta è pertanto il numero di tali sottoinsiemi, cioè $2^{2022}$.
