Al Khwarizmi ha scritto un programma per calcolare se un vettore `v` contiene più elementi strettamente negativi che elementi strettamente positivi. Purtroppo il suo gatto è passato sul suo codice, cancellando completamente l'indentazione e mescolando alcune righe! Il programma che ha ora a disposizione è il seguente:

```srs
i <- 0
neg <- 0
pos <- 0
while i < 10 do
if v[i] < 0 then
else
neg <- neg + 1
output("molti negativi")
pos <- pos + 1
end if
end if
end if
if v[i] > 0 then
end while
if neg > pos then
i <- i + 1
```

Di tutto questo programma, Al è solo sicuro che le righe 1, 2, 3 e 9, 10, 11 non sono state spostate. Tutte le altre potrebbero essere state mescolate arbitrariamente! In quale ordine devono essere messe le rimanenti righe per far funzionare il programma? Rispondere indicando la sequenza di numeri di riga per portare il programma nell'ordine corretto **senza spazi**.

_Per esempio, per riportare che l'intero programma è già nell'ordine corretto, devi riportare il numero: `12345678910111213141516`._

?> 12345761391011161415812
