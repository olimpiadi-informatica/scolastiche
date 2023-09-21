Marco ha una scacchiera quadrata $8 \times 8$, divisa in $64$ quadratini uguali. Ha anche un tassello a forma di L, formato da tre quadratini uguali delle stesse dimensioni di quelli della scacchiera, come in figura.

![Tassello](tile.asy)

Marco vuole disporre il tassello sulla scacchiera, in modo che copra per intero esattamente tre quadratini di quest'ultima. Nel farlo, può ruotare il tassello come vuole. In quanti modi può disporre il tassello sulla scacchiera? (Due disposizioni si considerano diverse se non coprono le stesse tre caselle.)

- [ ] $64$
- [ ] $95$
- [ ] $128$
- [ ] $144$
- [x] $196$

> La risposta è $196$.
>
> Quando il tassello viene posizionato sulla scacchiera, occupa $3$ caselle di un quadrato $2 \times 2$, con la quarta casella lasciata vuota. Ci sono $7 \cdot 7 = 49$ modi di scegliere tale quadrato. Una volta scelto, ci sono $4$ modi di ruotare il tassello. Questo dà luogo a $49 \cdot 4 = 196$ disposizioni distinte.
