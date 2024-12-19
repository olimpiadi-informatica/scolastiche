import variants from "./variants.py";

Bunny e Carol pranzano insieme tutti i giorni, portando ciascuno una carota dalla propria scorta personale.
Nella scorta di Bunny ci sono $\js{b}$ carote mentre nella scorta di Carol ce ne sono $\js{c}$.
Dopo quanti giorni uno dei due avrà finito le carote della propria scorta?

![image](fig.asy)

- [x] $\js{correct1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$

> Bunny impiega $\js{b}$ giorni per finire le proprie carote, mentre Carol ne impiega $\js{c}$.
> Quindi il primo coniglio che finisce le proprie carote è quello che ne ha di meno: dopo $\js{c}$ giorni, avrà finito le carote.
>
> ![1.1 primarie](1-1-primarie.asy)

---

Se invece Carol fosse dispettosa e ogni sera di nascosto rubasse una carota dalla scorta Bunny per metterla nella sua, dopo quanti giorni uno dei due sarà rimasto senza carote nella propria scorta?

- [x] $\js{correct2}$
- [ ] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] $\js{wrong2[3]}$

> Bunny mangia una carota al giorno, mentre Carol mangia una carota di Bunny al giorno.
> Quindi ogni giorno Bunny perde $2$ carote, mentre Carol non ne perde nessuna.
> Quindi la risposta è la metà del numero $\js{b}$ di carote iniziali di Bunny, cioè $\js{b/2}$.
>
> ![1.2 primarie](1-2-primarie.asy)
