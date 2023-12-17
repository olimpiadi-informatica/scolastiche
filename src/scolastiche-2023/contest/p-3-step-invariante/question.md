import variants from "./variants.py";

Considera la seguente funzione, che prende come parametri due interi **positivi** `a`, `b`, e restituisce un intero:

```srs
function step(a: integer, b: integer) -> integer
  variable k: integer
  k <- 0

  while a > 0 or b > 0 do
    if a * a < b then
      b <- b - a - 1
      a <- 2 * a
    else
      a <- a - 1
    end if
    k <- k + 1
  end while

  return k
end function
```
Per quale delle seguenti coppie `(a, b)` il valore restituito da `step(a, b)` è {n}?

- [x] $(\js{correct})$
- [ ] $(\js{wrong[0]})$
- [ ] $(\js{wrong[1]})$
- [ ] $(\js{wrong[2]})$
- [ ] $(\js{wrong[3]})$
