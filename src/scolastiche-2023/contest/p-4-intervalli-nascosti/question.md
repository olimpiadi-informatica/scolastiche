Considera la seguente funzione, che prende come parametri quattro interi **di segno qualunque** `a`, `b`, `c`, `d`, e restituisce un intero:

```srs
function loop(a: integer, b: integer, c: integer, d: integer) -> integer
  variable ans: integer
  ans <- 0
  for i in [a, b + 1) do
    if (i - c) * (i - d) <= 0 then
      ans <- ans + 1
    end if
  end for
  return ans
end function
```

Quale delle seguenti affermazioni è vera?

- [x] `loop(a, b, c, d)` è sempre uguale a `loop(c, d, a, b)`
- [ ] `loop` restituisce sicuramente un numero $\leq b - a$
- [ ] `loop` restituisce sicuramente un numero $\leq d - c$
- [ ] `loop` non restituisce mai $0$
- [ ] `loop(2 * a, 2 * b, 2 * c, 2 * d)` è sempre uguale a `2 * loop(a, b, c, d)`
