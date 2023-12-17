import variants from "./variants.py";

Considera la seguente funzione, che prende come parametri un intero **positivo** `n` e un array di interi `a` di lunghezza `n`, e restituisce un intero:

```srs
function compute(a: integer[], n: integer) -> integer
  variable ans: integer
  ans <- 0

  for i in [0 ... n) do
    if a[0] == i then
      ans <- ans + i
    end if
    for j in [0 ... n-1) do
      (a[j], a[j + 1]) <- (a[j + 1], a[j])
    end for
  end for

  return ans
end function
```
Supponiamo di chiamare `compute(a, {n})`, dove `a = [{a}]`. Qual è il valore restituito dalla funzione?

- [x] $\js{correct}$
- [ ] $\js{wrong[0]}$
- [ ] $\js{wrong[1]}$
- [ ] $\js{wrong[2]}$
- [ ] $\js{wrong[3]}$
