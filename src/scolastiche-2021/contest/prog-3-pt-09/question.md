---
variants:
  - initial: 42
    result: 28
    sol: 14
  - initial: 42
    result: 12
    sol: 6
  - initial: 45
    result: 18
    sol: 9
  - initial: 45
    result: 30
    sol: 15
---

Data la seguente funzione:

```srs
function f(a: integer) -> integer
	variable b: integer
	variable c: integer
	b <- {initial}
	c <- {initial}
	while a > 0 do
		if a >= b then
			a <- a - b
		else
			c <- a
			a <- b
			b <- c
		end if
	end while
	return a + b + c
end function
```

Qual è il minimo valore positivo che si può passare ad `f` per ottenere $\js{result}$?

?> {sol}
