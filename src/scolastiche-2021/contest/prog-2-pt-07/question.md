---
variants:
  - value: 11
    sol: 9
  - value: 13
    sol: 8
  - value: 15
    sol: 7
  - value: 17
    sol: 6
---

Data la seguente funzione:

```srs
function f(n: integer) -> integer
    if n < 10 then
        return f(n + 1) + 3
    else
        if n = 10 then
            return 7
        else
            return f(n - 2) - 1
        end if
    end if
end function
```

Quanto vale `f({value})`?

?> {sol}
