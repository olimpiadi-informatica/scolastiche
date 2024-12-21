import variants from "./variants.py"

Valerio sceglie tre punti **distinti** $A$, $B$ e $C$ su una griglia $\js{n}$ x $\js{n}$.
Davide deve scegliere il percorso più corto possibile che parte dal punto $A$, attraversa il punto $B$ e termina nel punto $C$, composto solo da righe orizzontali e verticali.

Ad esempio, questo è uno dei percorsi più brevi (lungo $10$ unità) che potrebbe scegliere Davide su una griglia $5$x$5$, dati i punti $A$, $B$ e $C$:

![Esempio](example1.asy)

Valerio è malvagio, e sceglie i punti $A$, $B$ e $C$ per rendere il percorso il più lungo possibile.
Qual'è la lunghezza del percorso più lungo che potrebbe dover scegliere Davide su una griglia $\js{n}$ x $\js{n}$?

- [x] $\js{correct1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$

> Valerio vorrebbe rendere sia la distanza $A \rightarrow B$ sia la distanza $B \rightarrow C$ uguali al massimo possibile, cioè $\js{2*n}$ (mettendo $A$ e $B$ opposti, $B$ e $C$ opposti). Ma questo non è possibile perché $A$ e $C$ non possono coincidere.
> Tuttavia, Valerio può rendere la prima distanza $\js{2*n}$ e la seconda distanza $\js{2*n-1}$, scegliendo $A = (0, 0)$, $B = (\js{n}, \js{n})$, $C = (0, 1)$. Quindi la risposta corretta è $\js{correct1}$.
>
> ![2.1](2-1.asy)

---

Valerio ora permette a Davide di scegliere l'ordine in cui attraversare i punti, che lo sceglie in modo che il percorso risultante sia il più corto possibile.

Ad esempio, sulla griglia precedente, questo è uno dei percorsi più brevi (lungo $9$ unità) che potrebbe scegliere Davide:

![Esempio](example2.asy)

Qual è la lunghezza del percorso più lungo che potrebbe dover scegliere Davide su una griglia $\js{n}$ x $\js{n}$, scegliendo in modo ottimale l'ordine in cui attraversare i punti?


- [x] $\js{correct2}$
- [ ] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] $\js{wrong2[3]}$

> A Valerio conviene mettere i punti sul bordo. In questo modo, Davide gira intorno al bordo, che è composto da tre sottopercorsi $A \rightarrow B$, $B \rightarrow C$, $C \rightarrow A$, di lunghezza totale uguale al perimetro del quadrato, cioè $\js{4*n}$.
> Per visitare tutti e tre i punti, a Davide basta visitare due di questi tre sottopercorsi, in particolare i due più corti.
> Quindi Valerio vuole massimizzare la somma delle lunghezze dei due sottopercorsi più corti, cioè vuole minimizzare la lunghezza del sottopercorso più lungo, che però è lungo almeno un terzo del perimetro. Esiste un modo per Valerio per fare sì che tutti
> e tre i sottopercorsi siano lunghi uguali visto che $\js{n}$ è multiplo di 3, dunque la lunghezza finale è $\js{correct2}$.
>
> ![2.2](2-2.asy)
