Bunny si trova sulla casella $1$ di questo percorso ad ostacoli:

![fig](fig.asy)

Il suo obbiettivo è **raggiungere o superare** la casella numero $10$ dove c'è la bandierina del traguardo.
Bunny può fare le seguenti due azioni:
+ **avanza**: Bunny avanza alla casella successiva;
+ **salta**: Bunny supera la casella successiva con un salto, atterrando su quella dopo.

Per esempio se Bunny compie un'azione **salta** quando è sulla casella $1$, supera la casella $2$ e atterra sulla casella $3$.
**ATTENZIONE:** sul percorso ci sono delle *grandi rocce*! Bunny non può passare su una casella occupata da una *grande roccia*, altrimenti cadrebbe, ma può superarla grazie ad un'azione **salta**.
Se Bunny segue il procedimento qui sotto, riesce a raggiungere la bandierina?

![code](code.asy)

- [ ] si, raggiunge la bandierina
- [ ] no, perchè cade sulla *grande roccia* in posizione $4$
- [x] no, perchè si ferma sulla casella $9$
- [ ] no, perchè cade sulla *grande roccia* in posizione $8$
- [ ] si, raggiunge e supera la bandierina arrivando sulla casella $13$

> Ripercorriamo il percorso di Bunny:
>
> - Casella iniziale: $1$.
> - Prima ripetizione:
>   - `avanza`: nuova casella $2$;
>   - `avanza`: nuova casella $3$;
>   - `salta`: nuova casella $5$;
> - Seconda ripetizione:
>   - `avanza`: nuova casella $6$;
>   - `avanza`: nuova casella $7$;
>   - `salta`: nuova casella $9$.
>
> Quindi Bunny si ferma nella posizione $9$, senza raggiungere la bandierina.
>
> ![6.1 primarie](6-1-primarie.asy)
> ![6.1 secondarie](6-1-secondarie.asy)

---

Ricordiamo il percorso ad ostacoli ed il procedimento seguito da Bunny:

![fig](fig.asy)

![code](code.asy)

Bunny si chiede se cambiando punto di partenza riuscirebbe a raggiungere o superare la bandierina. Per quali di questi punti di partenza Bunny raggiunge la bandierina seguendo il suo procedimento?


- [ ] la casella $2$
- [x] la casella $5$
- [ ] la casella $7$
- [ ] la casella $6$
- [ ] non ci sono punti di partenza da cui raggiunge la bandierina

> Bunny vince partendo dalla casella $5$, in questo modo:
>
> - Casella iniziale: $5$.
> - Prima ripetizione:
>   - `avanza`: nuova casella $6$;
>   - `avanza`: nuova casella $7$;
>   - `salta`: nuova casella $9$.
> - Seconda ripetizione:
>   - `avanza`: nuova casella $10$, e Bunny vince.
>
> Se invece Bunny parte dalla casella $2$, si ferma sulla roccia in posizione $4$, e se parte dalla casella $6$ o dalla casella $7$ si ferma sulla roccia in posizione $8$.
>
> ![6.2 primarie](6-2-primarie.asy)
> ![6.2 secondarie](6-2-secondarie.asy)
