Bunny è ormai appassionato di percorsi ad ostacoli, e si trova quindi ora sulla casella $1$ di questo nuovo percorso:

![fig](fig.asy)

Come sempre, il suo obbiettivo è **raggiungere o superare** la casella numero $17$ dove c'è la bandierina del traguardo.
Bunny può fare le seguenti cose:
+ **avanza**: Bunny avanza alla casella successiva;
+ **salta**: Bunny supera la casella successiva con un salto, atterrando su quella dopo;
+ **posizione**: la posizione corrente di Bunny;
+ **traguardo**: la posizione del traguardo;
+ **pietra marrone**: vero se Bunny si trova ora su una pietra marrone.

Come nell'ultimo percorso ad ostacoli, sul percorso ci sono delle *grandi rocce*! Bunny non può arrivare su una casella occupata da una *grande roccia*, altrimenti cadrebbe, ma può superarla grazie ad un'azione **salta**.
Se Bunny segue il procedimento qui sotto, riesce a raggiungere la bandierina?

![code](code.asy)

- [ ] no, perchè si ferma prima di arrivare al traguardo senza cadere
- [ ] si, raggiunge o supera la bandierina
- [ ] no, perchè cade sulla *grande roccia* in posizione $4$
- [X] no, perchè cade sulla *grande roccia* in posizione $10$
- [ ] no, perchè cade sulla *grande roccia* in posizione $16$

> Bunny cade sulla *grande roccia* in posizione $10$.
>
> Inizialmente si trova su una roccia marrone, e quindi salta arrivando in posizione $3$.
> Anche lì la roccia è marrone quindi salta di nuovo fino in posizione 5, e ancora una volta fino in posizione 7.
> A questo punto la roccia è grigia, e quindi avanza alla posizione 8.
> Ma dato che la roccia lì è marrone, salta cadendo direttamente sulla *grande roccia* in posizione $10$.
>
> ![primarie](primarie1.asy)
> ![secondarie](secondarie1.asy)

---

Sempre nello stesso percorso ad ostacoli, Bunny vuole provare un po' di strategie diverse:

![fig](fig.asy)

![code](code-alt.asy)

Quali di queste strategie gli consentono di raggiungere o superare il traguardo?


- [ ] la strategia 1
- [ ] la strategia 2
- [ ] la strategia 3
- [x] le strategie 1 e 2
- [ ] le strategie 2 e 3

> Funzionano entrambe le strategie 1 e 2.
>
> Nella strategia 2 Bunny salta sempre, toccando tutte le posizioni dispari e quindi evitando tutte le grandi rocce,
> che si trovano invece in posizioni pari, fino ad arrivare al traguardo in posizione $17$.
>
> Nella strategia 1, Bunny fa i salti a coppie: questo lo porta attraverso le posizioni $5$, $9$ e $13$, che hanno tutte
> la roccia marrone, per poi arrivare sul traguardo in posizione $17$ senza aver mai fatto avanza.
>
> Nella strategia 3, invece, Bunny cade sulla roccia $16$.
> Inizia saltando sulle rocce marroni in posizione $3$ e $5$ per arrivare alla posizione $7$.
> Da lì avanza due volte alla posizione $9$.
> A quel punto salta ancora alla posizione $11$, per poi avanzare due volte fino alla posizione $13$.
> Quindi salta in posizione $15$, e da lì avanza andando a scontrarsi contro la grande roccia.
>
> ![primarie](primarie2.asy)
> ![secondarie](secondarie2.asy)
