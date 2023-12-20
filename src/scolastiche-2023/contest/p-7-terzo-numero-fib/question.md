Qual è il **terzo** numero stampato dal seguente programma?

![code](code.asy)

- [x] $25$
- [ ] $50$
- [ ] $20$
- [ ] $10$
- [ ] $4$

> Cerchiamo di capire cosa fa questo programma.
> Si parte con la variabile $i$ che vale $1$. Per $100$ volte, si incrementa $j$ da $1$ fino a $100$ stampandone il valore se $i \times j = 100$.
> Poi si incrementa la variabile $i$, e si ripete la ripetizione su $j$, continuando fino a far arrivare anche $i$ a $100$. Quindi:
>
> 1. Nella prima ripetizione (con $i$ che vale $1$), l'unico numero $j$ per cui $i \times j = 100$ è $j = 100 / i = 100 / 1 = 100$, quindi viene per **primo** stampato $100$.
> 2. Nella seconda ripetizione (con $i$ che vale $2$), l'unico $j$ che viene stampato è $100 / 2 = 50$, che è quindi il **secondo** numero stampato.
> 3. Nella terza ripetizione (con $i$ che vale $3$), nessun numero viene stampato, perché $3$ non è un divisore di $100$ e quindi $i \times j$ non vale mai $100$.
> 4. Nella quarta ripetizione (con $i$ che vale $4$), l'unico $j$ che viene stampato è $100 / 4 = 25$, che è quindi il **terzo** numero stampato.
>
> Infatti, questo programma stampa i _divisori_ di $100$ in ordine decrescente: $100, 50, 25, 20, 10, 5, 4, 2, 1$!
>
> ![secondarie](8-secondarie.asy)