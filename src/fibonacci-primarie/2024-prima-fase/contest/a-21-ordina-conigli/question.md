Durante la ricreazione, gli amici di Bunny si sono disposti in fila:

![immage](fig.asy)

Per gioco, Bunny deve ordinarli dal più basso al più alto (le altezze degli amici sono scritte sulle loro magliette).
Può farlo con degli **scambi** di posto tra coppie di suoi amici. Quali di questi **scambi** può fare Bunny per riordinarli?

- [x] scambiare l'amico alto $4$ con l'amico alto $1$ e poi scambiare l'amico alto $6$ con l'amico alto $3$
- [ ] scambiare l'amico alto $4$ con l'amico alto $2$ e poi scambiare l'amico alto $6$ con l'amico alto $1$
- [ ] Bunny non può ordinarli solo con scambi
- [ ] scambiare l'amico alto $6$ con l'amico alto $3$
- [ ] scambiare l'amico alto $6$ con l'amico alto $3$ e poi scambiare l'amico alto $4$ con l'amico alto $2$

> Il coniglio alto $1$ è in quarta posizione e quello alto $4$ è in prima posizione, quindi vanno scambiati.
> Inoltre, il coniglio alto $3$ è in sesta posizione e quello alto $6$ è in terza posizione, quindi vanno scambiati.
> Non servono altri scambi!
>
> ![2.1 primarie](2-1-primarie.asy)
> ![1.1 secondarie](1-1-secondarie.asy)

---

Per rendere il gioco più difficile, ora Bunny può solo fare **scambi di vicini**, cioè può scambiare di posto due suoi amici **solo se** sono uno di fianco all'altro.
Quanti **scambi di vicini** deve fare per ordinare i suoi amici?

- [ ] $6$
- [ ] $2$
- [x] $8$
- [ ] $12$
- [ ] $11$

> Conviene fare solo scambi tra conigli vicini in ordine sbagliato, cioè conviene fare uno scambio solo se il coniglio a sinistra è più alto di quello a destra. Ad esempio,
>
> - All'inizio, l'ordine è $[4, 2, 6, 1, 5, 3]$.
> - Dopo il primo scambio, l'ordine è $[2, 4, 6, 1, 5, 3]$.
> - Dopo il secondo scambio, l'ordine è $[2, 4, 1, 6, 5, 3]$.
> - Dopo il terzo scambio, l'ordine è $[2, 1, 4, 6, 5, 3]$.
> - Dopo il quarto scambio, l'ordine è $[1, 2, 4, 6, 5, 3]$.
> - Dopo il quinto scambio, l'ordine è $[1, 2, 4, 5, 6, 3]$.
> - Dopo il sesto scambio, l'ordine è $[1, 2, 4, 5, 3, 6]$.
> - Dopo il settimo scambio, l'ordine è $[1, 2, 4, 3, 5, 6]$.
> - Dopo l'ottavo scambio, l'ordine è $[1, 2, 3, 4, 5, 6]$.
>
> Anche facendo altri scambi, la risposta non cambia, purché non si facciano scambi tra conigli vicini che sono già nell'ordine giusto.
> Non è una coincidenza: all'inizio, ci sono $8$ coppie di conigli (non necessariamente vicini) tali che il più alto dei due è più a sinistra di quello in basso, e ad ogni scambio il numero di queste coppie diminuisce di $1$.
>
> ![2.2 primarie](2-2-primarie.asy)
> ![1.2 secondarie](1-2-secondarie.asy)
