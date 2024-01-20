---
variants:
  - invlim: 11
    inverter: 13
    bound: 7
    sqroffs: 1
    dbloffs: 14
    addoffs: 1
    sol: 2
  - invlim: 13
    inverter: 17
    bound: 8
    sqroffs: 11
    dbloffs: 15
    addoffs: 1
    sol: 3
  - invlim: 19
    inverter: 25
    bound: 13
    sqroffs: 32
    dbloffs: 25
    addoffs: 2
    sol: 4
  - invlim: 21
    inverter: 27
    bound: 15
    sqroffs: 30
    dbloffs: 29
    addoffs: 1
    sol: 5
---

Data la seguente funzione:

```srs
function f(x: integer) -> integer
    if x <= {invlim} then
        x <- {inverter} - x
    end if
    if x mod 2 = 0 then
        x <- x * x - {sqroffs}
    else
        if x > {bound} then
            x <- 2 * x - {dbloffs}
        else
            x <- x - {addoffs}
        end if
    end if
    return x
end function
```

Qual è il minimo valore che `f` può restituire, per un qualunque valore del parametro `x`?

?> {sol}
