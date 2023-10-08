---
variants:
  - i: 0
    sol: 83
  - i: 1
    sol: 81
  - i: 2
    sol: 84
  - i: 3
    sol: 91
---

Il pirata Barbagialla trova un’antica mappa che spiega come raggiungere un favoloso tesoro. La mappa ha la forma di una matrice di celle; le celle possono essere vuote, contenere ostacoli che impediscono a Barbagialla di attraversarle, oppure premi (costituiti da un certo numero di ghinee d’oro); una cella contiene il tesoro.

![](mappa{i}.svg?w=500)

Con riferimento alla figura, il pirata Barbagialla (la sagoma umana) si trova nella cella individuata dalle coordinate (1,1). Il tesoro, rappresentato da una coppa, è nella cella (8,8); il campo contiene ostacoli, individuati da quadrati neri posti in 13 celle. Nove celle contengono dei premi: ad esempio 8 ghinee d’oro nella cella di coordinate (4,2) e 10 nella cella (6,4). Barbagialla però può spostarsi solo di una cella verso destra o verso l’alto, cioè ad ogni passo solo una delle sue coordinate può aumentare di una unità.

Esistono diversi percorsi disponibili per Barbagialla per raggiungere il tesoro; siano, rispettivamente, `MAX` il numero massimo e `MIN` il numero minimo di ghinee d’oro che Barbagialla potrà raccogliere percorrendo questi percorsi.

Quanto vale `MAX + MIN`?

?> {sol}
