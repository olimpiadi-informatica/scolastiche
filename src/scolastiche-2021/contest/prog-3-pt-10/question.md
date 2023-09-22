---
variants:
  - v: [1, 3, 4, 2]
    offs: 2
    sol: 7
    value: 5
  - v: [2, 4, 3, 1]
    offs: 3
    sol: 5
    value: 7
  - v: [3, 1, 2, 4]
    offs: 5
    sol: 6
    value: 8
  - v: [4, 2, 1, 3]
    offs: 5
    sol: 8
    value: 9
---

Date le seguenti funzioni:

```srs
function f(n: integer) -> integer
	if n >= 10 then
		return {v[0]}
	else
		return 2 * g(n - 2) + {v[1]}
	end if
end function

function g(n: integer) → integer
	if n <= 0 then
		return {v[2]}
	else
		return f(n * 2) + {v[3]}
	end if
end function
```

Qual è il numero totale delle chiamate ad `f` più il numero delle chiamate a `g` che vengono effettuate per calcolare `f({value})`?

?> {sol}

_**NOTA POST GARA**: dal testo non era chiaro se il numero totale di chiamate dovesse includere anche la chiamata iniziale `f({value})`. Nella nostra interpretazione lo doveva includere, ma abbiamo dato buone anche le soluzioni che non lo includevano (ovvero che differivano di -1 dalla soluzione corretta)._
