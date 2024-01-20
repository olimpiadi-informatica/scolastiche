---
variants:
  - initial: "[3, 2, 5, 4, 4, 3, 5, 4, 1]"
    bound: 3
    sol: 145443523
  - initial: "[3, 5, 2, 4, 4, 3, 4, 5, 1]"
    bound: 4
    sol: 154344253
  - initial: "[3, 4, 5, 4, 4, 3, 5, 2, 1]"
    bound: 5
    sol: 125344543
  - initial: "[3, 5, 4, 4, 4, 3, 2, 5, 1]"
    bound: 6
    sol: 152443453
---

Dato il seguente programma:

```srs
variable i: integer
variable j: integer
variable a: integer
variable v: integer[]
v <- {initial}
i <- 0
j <- 9
while i < {bound} do
    if v[i] != v[j - i - 1] then
        a <- v[i]
        v[i] <- v[j - i - 1]
        v[j - i - 1] <- a
    end if
    i <- i + 1
end while
i <- 0
while i < j do
    output(v[i])
    i <- i + 1
end while
```

Cosa viene stampato durante l'esecuzione? Riportare la risposta senza spazi.

?> {sol}
