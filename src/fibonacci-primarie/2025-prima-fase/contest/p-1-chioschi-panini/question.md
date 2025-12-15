import variants from "./variants.py";

Bunny è andato a fare una passeggiata in montagna, portandosi dietro {panini} panini:

![montagne](fig.asy?v=variants.py)

La passeggiata prevede {length} tratti di percorso. In ogni tratto seguirà questo procedimento, partendo dall'inizio del tratto:

![code](code.asy?s=0.7)

Con quanti panini rimane alla fine del percorso?

- [x] $\js{ans1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] non gli rimane nessun panino

> Per ogni salita Bunny mangia un panino, quindi basta contare il numero di tratti in
> salita ($\js{panini - ans1}$) nel percorso e sottrarli al numero iniziale di panini.
> La risposta sarà quindi $\js{panini} - \js{panini - ans1} = \js{ans1}$. 
---

Bunny è tornato a fare un'altra passeggiata, sempre con {panini} panini. Nel frattempo però hanno aperto alcuni chioschi del pane!

![montagne](fig2.asy?v=variants.py)

Ha quindi deciso di seguire quest'altro procedimento:

![code](code-alt.asy?s=0.7)

Con quanti panini rimane alla fine del percorso?

- [x] $\js{ans2}$
- [ ] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] non gli rimane nessun panino

> Ora Bunny non solo mangia un panino per ogni salita, ma compra anche un panino per ogni chiosco.
> Contiamo quindi il numero di tratti in salita ($\js{panini + num_chioschi - ans2}$)
> e il numero di chioschi ($\js{num_chioschi}$). Sottraendo un panino per ogni salita e
> aggiungendone uno per ogni chiosco, partendo da $\js{panini}$ panini, la risposta è
> $\js{panini} - \js{panini + num_chioschi - ans2} + \js{num_chioschi} = \js{ans2}$.