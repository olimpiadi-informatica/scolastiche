import variants from "./variants.py";

Consideriamo la seguente funzione ricorsiva, dove `a` è un array di lunghezza `n`, `pos` è un intero tra $0$ e `n`, e `x` è un intero:

```srs
function walk(n: integer, a: integer[], pos: integer, x: integer)
  if pos == n then
    return
  end if
  if x < a[pos] then
    output("back")
    walk(n, a, 0, x + 1)
  else
    walk(n, a, pos + 1, x)
  end if
end function
```

Supponiamo di chiamare `walk({n}, a, 0, 0)`, dove `a = [{a}]`. Quante volte viene stampata in output la stringa `”back”`?


- [x] $\js{correct}$
- [ ] $\js{wrong[0]}$
- [ ] $\js{wrong[1]}$
- [ ] $\js{wrong[2]}$
- [ ] $\js{wrong[3]}$
