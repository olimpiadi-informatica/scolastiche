Considera questo procedimento, che usa le tre **variabili** numeriche di nome $A$, $B$ e $C$.

![code](code.asy)

Questo programma viene eseguito due volte:

- La prima volta impostando $A$ a $7$, $B$ a $4$, e $C$ a $6$.
- La seconda volta impostando invece $A$ a $5$, $B$ a $7$, e $C$ a $9$.

Quali numeri stampa il procedimento?

- [x] 7 e 9
- [ ] 6 e 9
- [ ] 7 e 7
- [ ] 5 e 7
- [ ] 4 e 5

> Il procedimento ogni volta stampa il numero più grande tra $A$, $B$ e $C$.
>
> La prima volta che viene eseguito il programma, $A$ è più grande di $B$, si controlla quindi se $A$ è più grande di $C$. Essendo $A$ più grande di $C$, il programma scrive il valore di $A$, che è $7$.
>
> La seconda volta, $A$ è più piccolo di $B$, si controlla quindi se $B$ è più grande di $C$, ma $B$ è più piccolo di $C$. Il programma scrive quindi il valore di $C$, che è $9$.
