Tip-Tap vorrebbe tanto mangiare la sua carota, prima però deve raggiungerla!
A separarlo dal suo obbiettivo ci sono due porte chiuse. Tip-Tap sa compiere le seguenti azioni:
    + `avanza`:  salta alla roccia più vicina a destra, solo se non c'è una porta chiusa in mezzo.
    + `apri porta`: apri la porta a destra, ma solo se è di fianco a te.
    + `mangia carota`: mangia la carota a destra, ma solo se è di fianco a te.

Quali delle seguenti successioni di azioni consentono a Tip-Tap di raggiungere la carota?

![T_ | _ _ | _C](fig.asy)

![test](opz1.asy)
![test](opz2.asy)
![test](opz3.asy)

- [ ] solo $1$
- [ ] $2$ e $1$
- [ ] solo $2$
- [x] $1$ e $3$
- [ ] sono tutti corretti

> Sia seguendo l'opzione $1$ che l'opzione $3$, e svolgendo le ripetizioni, la sequenza complessiva di azioni che Tip-Tap svolge è questa:
>
> ![giusto](giusto.asy)
>
> Questa sequenza effettivamente fa 4 balzi in avanti per raggiungere la carota, aprendo le due porte nei punti giusti.
> L'opzione $2$ invece si traduce in una sequenza con un _"avanza"_ in meno:
>
> ![sbagliato](sbagliato.asy)
>
> Non è quindi corretta, mancando un passo tra una porta e l'altra.
>
> ![primarie](8-primarie.asy)