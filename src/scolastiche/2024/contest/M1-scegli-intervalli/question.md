import variants from "./variants.py";

Hai davanti a te una linea di coordinate da $0$ a $\js{l}$.

![Immagine](number_line.asy?v=variants.py)

Vuoi disegnare $2$ segmenti lunghi $1$ (a coordinate intere) su questa linea, in modo che non si sovrappongano (ma possono toccarsi alle estremità).
Ad esempio questo è un modo valido di scegliere i segmenti.

![Immagine](segments1.asy?v=variants.py)

In quanti modi puoi farlo?

- [x] $\js{correct1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$

> Chiamiamo intervallo destro l'intervallo che si toverà a destra in una possibile disposizione e intervallo sinistro quello che si 
> troverà a sinistra. Fissando l'intervallo sinistro tra la coordinata $0$ e la $1$ avremmo $\js{l - 1}$ modi di fissare quello destro,
> fissando l'intervallo sinistro tra la coordinata $1$ e la $2$ avremmo $\js{l - 2}$ modi di fissare quello destro e così via. La risposta
> sarà dunque la sommatoria dei numeri tra $\js{l - 1}$ e $0$ che si può calcolare grazie alla formula $(\js{l - 1} \cdot \js{l})/2 = \js{correct1}$.
>
> ![1.1](1-1.asy)

---

In quanti modi puoi disegnare $2$ segmenti lunghi $2$ (a coordinate intere) su questa linea, in modo che non si sovrappongano (ma possono toccarsi alle estremità)?
Ad esempio questo è un modo **non** valido dato che i segmenti si sovrappongono.

![Immagine](segments2.asy?v=variants.py)

- [x] $\js{correct2}$
- [ ] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] $\js{wrong2[3]}$

> Usiamo lo stesso ragionamento di prima: fissando l'intervallo sinistro tra la coordinata $0$ e la $2$ avremmo $\js{l - 3}$ modi di fissare quello destro,
> fissando l'intervallo sinistro tra la coordinata $1$ e la $3$ avremmo $\js{l - 4}$ modi di fissare quello destro e così via.  La risposta
> sarà dunque la sommatoria dei numeri tra $\js{l - 3}$ e $0$ che si può calcolare grazie alla formula $(\js{l - 3} \cdot \js{l - 2})/2 = \js{correct2}$.
> 
> ![1.2](1-2.asy)
