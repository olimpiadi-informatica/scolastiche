import variants from "./variants.py";

Carol ha un albero con $\js{n}$ mele e un cestino che può contenere al massimo $\js{s}$ mele.
Carol raccoglie le mele dall’albero finché il cestino è pieno.
Quante mele rimangono sull’albero?

![immagine](immagine.asy?v=variants.py)

- [x] $\js{ans1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$

> Visto che il cestino può contenere massimo $\js{s}$ mele, dopo averlo riempito sull'albero rimangono $\js{n} - \js{s} = \js{ans1}$ mele.

---

Ora Carol vuole raccogliere anche le altre mele rimaste sull’albero usando sempre lo stesso cestino.
Quante altre volte deve riempirlo e svuotarlo per portarle via tutte?

- [ ] $\js{ans2}$
- [x] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] $\js{wrong2[3]}$

> Ora sull'albero sono rimaste $\js{ans1}$ mele. Carol ne può portare via al massimo $\js{s}$ alla volta,
> quindi può riempire completamente il cestino un numero di volte dato da $\js{ans1}$ diviso $\js{s}$, che fa $\js{wrong2[0]-1}$.
> Dovrà poi fare un ultimo giro per portare via il resto di $\js{ans1%s}$ mela, per un totale di $\js{wrong2[0]}$ giri.