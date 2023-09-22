Il seguente programma cerca, all'interno di una matrice quadrata di $n \times n$ interi, il più grande quadrato di numeri tutti strettamente positivi contenuto in essa e contenente l'angolo in posizione $(0,\, 0)$.

```srs
variable m: integer[][]
variable n: integer
variable i: integer
variable j: integer
variable l: integer
variable ok: integer
variable maxl: integer
l ← 1
maxl ← 0
while l ≤ n do
	ok ← 1
	i ← 0
	while i < l do
		j ← 0
		while j < l do
			if m[i][j] ≤ 0 then
				ok ← 0
			end if
			j ← j − 1
		end while
		i ← i + 1
	end while
	if ok = 1 then
		maxl ← l
	end if
	l ← l + 1
end while
output(maxl)
```

Tuttavia è presente un errore, in quale riga?

?> 19
