Caterina ha scritto una lettera dell'alfabeto inglese in ogni casella della tabella $3 \times 7$ mostrata in figura:

![Tabella](table-big.asy)

Caterina può cambiare tutte le lettere che vuole, sostituendo ciascuna di esse con un'altra lettera dell'alfabeto inglese (anche lettere diverse da quelle scritte adesso).

1. Quante lettere deve cambiare, al minimo, per rendere tutte le righe uguali?

?> 7

> La risposta è $7$.
> 
> Per rendere tutte le righe uguali, Caterina deve fare in modo che ogni colonna contenga tre volte la stessa lettera. Possiamo esaminare ogni colonna separatamente:
> 
> * Se la colonna ha già tre lettere uguali, non c'è nulla da cambiare.
> * Se la colonna ha due lettere uguali e una diversa, conviene cambiare quest'ultima.
> * Altrimenti, la colonna ha tre lettere diverse, e Caterina deve necessariamente cambiarne due.
> 
> Sommando su tutte le colonne, si ottiene $1 + 2 + 0 + 1 + 1 + 1 + 1 = 7$.

---

1. Adesso, Caterina considera la parola ottenuta "incollando" tutte le righe una di seguito all'altra (prendendole dall'alto al basso), e la parola ottenuta "incollando" tutte le colonne una di seguito all'altra (prendendole da sinistra a destra). Vorrebbe che queste due parole fossero uguali.

Considera il seguente esempio, con una tabella più piccola ($2 \times 3$):

![Tabella di esempio](table-small.asy)

La parola ottenuta incollando le righe è $\texttt{baccac}$, come mostrato in figura:

![Decomposizione righe](row-decomposition.asy)

Invece, la parola ottenuta incollando le colonne è $\texttt{bcaacc}$:

![Decomposizione colonne](column-decomposition.asy)

Quante lettere deve cambiare nella tabella iniziale, al minimo, affinché ciò sia possibile?

?> 9

> La risposta è $9$.
> 
> Chiamiamo $w_h$ la parola ottenuta incollando le righe, e $w_v$ la parola ottenuta incollando le colonne. Osserviamo che la lettera in alto a sinistra è la prima lettera sia di $w_h$ sia di $w_v$, quindi non va cambiata. Consideriamo adesso, ad esempio, la lettera sulla prima riga e seconda colonna (che è una $\texttt{b}$), e osserviamo la seguente figura, in cui è indicata con $\textnormal{\small\textcircled{1}}$:
> 
> ![Primo gruppo](first-group.asy)
> 
> In $w_h$, tale lettera occupa la seconda posizione. Pertanto, alla fine dovrà coincidere con la lettera che occupa la seconda posizione in $w_v$, ovvero la lettera nella seconda riga e prima colonna, indicata con $\textnormal{\small\textcircled{2}}$ nella figura. Ma questa lettera occupa la ottava posizione in $w_h$, e quindi deve essere uguale alla ottava lettera di $w_v$; quest'ultima è indicata con $\textnormal{\small\textcircled{3}}$ e occupa la seconda riga e terza colonna. Ripetendo il ragionamento ancora una volta, otteniamo che questa lettera è la decima di $w_h$, e quindi deve coincidere con la decima lettera di $w_v$, quella indicata con $\textnormal{\small\textcircled{4}}$. Infine, tale lettera occupa la quarta posizione in $w_h$, ma la quarta lettera di $w_v$ è la $\textnormal{\small\textcircled{1}}$, e quindi possiamo chiudere il ciclo. Abbiamo formato un gruppo di quattro lettere che, alla fine, devono essere tutte uguali: dato che tre di esse sono una $\texttt{b}$ e l'altra una $\texttt{f}$, a Caterina conviene cambiare quest'ultima in una $\texttt{b}$.
> 
> Ripetiamo questo procedimento per ogni lettera che non appartiene ancora a un gruppo. Colorando ogni gruppo di un colore diverso, otteniamo la figura mostrata di seguito:
> 
> ![Tutti i gruppi](all-groups.asy)
> 
> Notiamo che ci sono gruppi da quattro, due, o anche una lettera. In ogni caso, Caterina deve rendere uguali le lettere in ogni gruppo, quindi possiamo procedere come nella parte 1: dato un gruppo, il modo ottimale di cambiare le lettere al suo interno è renderle tutte uguali alla lettera che inizialmente compare più volte.
> 
> Sommando su tutti i gruppi, otteniamo quindi ("leggendo" dall'alto in basso e da sinistra a destra) $0 + 1 + 2 + 3 + 1 + 0 + 2 + 0 = 9$.
