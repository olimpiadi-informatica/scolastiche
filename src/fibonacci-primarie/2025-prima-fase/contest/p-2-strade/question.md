import variants from "./variants.py";

Carol adora i labirinti, allora ha costruito questo nella Fattoria Fibonacci:

![Immagine](immagine1.asy?v=variants.py)

I corridoi in cui si può passare sono le **linee nere dritte**, che si incontrano tra loro in alcuni **incroci**.
Si entra nel labirinto dal **quadrato verde** in posizione **A1**.
Se per esempio da quel punto Carol _avanza fino al prossimo incrocio_, arriva in posizione **{examples[0]}** ({examples_exp[0]}). Se poi _gira a sinistra_ e di nuovo _avanza fino al prossimo incrocio_, arriva in posizione **{examples[1]}** ({examples_exp[1]}).

Carol esplora il labirinto seguendo questo procedimento:

![Codice](codice.asy?s=0.7)

In che posizione arriva alla fine del procedimento?

- [ ] in posizione **{wrong_fy[0]}{wrong_fx[0]}**
- [ ] in posizione **{wrong_fy[1]}{wrong_fx[1]}**
- [x] in posizione **{fy}{fx}**
- [ ] in posizione **{wrong_fy[2]}{wrong_fx[2]}**
- [ ] in posizione **{wrong_fy[3]}{wrong_fx[3]}**

> Seguendo la procedura indicata, Carol farà questo percorso:
> 
> {path[0]} → {path[1]} → {path[2]} → {path[3]} → {path[4]} → 
> {path[5]} → {path[6]} → {path[7]} → {path[8]} → {path[9]}
> 
> La risposta è quindi **{path[8]}**.

---

Carol ha sentito che in posizione **{qsy}{qx+1}** (cerchio rosso nella griglia sopra) hanno nascosto una carota speciale! Allora vuole ripetere le tre operazioni di prima (avanza, avanza, gira) **finché non ci arriva**.
Partendo sempre dall'entrata in posizione **A1**, quante volte le deve ripetere per arrivare in posizione **{qsy}{qx+1}**?

- [ ] $\js{wrong[0]}$
- [ ] $\js{wrong[1]}$
- [ ] $\js{wrong[2]}$
- [x] $\js{ans}$
- [ ] $\js{wrong[3]}$

> Per arrivare in posizione **{qsy}{qx+1}** deve ripetere il ciclo $\js{ans}$ volte, facendo questo percorso:
>
> {cpath}
