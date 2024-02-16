Considera questo procedimento, che si riferisce alle tre **variabili** numeriche $A$, $B$ e $C$:

![code](code.asy)

Questo procedimento dovrebbe stampare la _mediana_ tra le tre variabili, ovvero il valore di mezzo tra i tre. Ad esempio, la mediana di $5$, $3$ e $10$ è $5$, e la mediana di $4$, $1$ e $1$ è $1$. Tuttavia, mancano dei blocchi per completare il procedimento!

Quale delle seguenti può essere la parte mancante, da sostituire al blocco indicato con **???**, affinché il procedimento stampi sempre la mediana?

- [x] ![opzione1](opz1.asy)
- [ ] ![opzione2](opz2.asy)
- [ ] ![opzione3](opz3.asy)
- [ ] ![opzione4](opz4.asy)
- [ ] Il procedimento è già completo, non servono altri blocchi

> La risposta è
>
> ![opzione1](opz1.asy)
>
> Vediamo cosa fa il procedimento dopo averlo completato nel modo proposto.
>
> 1. Per prima cosa, le due variabili $A$ e $B$ vengono ordinate, scambiandone i valori se necessario.
> 2. A questo punto, $B$ e $C$ vengono ordinate. In questo momento, $C$ contiene il massimo dei tre valori iniziali.
> 3. Per finire, $A$ e $B$ vengono nuovamente ordinate. Adesso $B$ contiene il massimo dei due valori più piccoli, ovvero il valore centrale (la mediana)!
>
> _Approfondimento:_ questo procedimento si chiama **BubbleSort** su tre variabili, uno dei più semplici (ma poco efficienti) algoritmi di ordinamento.