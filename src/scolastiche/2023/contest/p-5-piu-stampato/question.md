import variants from "./variants.py";

Considera la seguente funzione:

```srs
function f(n: integer)
  variable i: integer
  variable j: integer
  i <- 0
  j <- 1
  while j <= n do
    for k in [i, j) do
      output(k)
    end for
    i <- i + 2
    j <- j + 3
  end while
end function
```

Chiamando `f({n})`, quante volte viene stampato il numero che viene stampato più volte?

- [x] {correct}
- [ ] {wrong[0]}
- [ ] {wrong[1]}
- [ ] {wrong[2]}
- [ ] {wrong[3]}
