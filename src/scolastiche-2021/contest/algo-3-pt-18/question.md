---
variants:
  - disp: ["", X, "", "", "", "", HP, ""]
    posto: 2
    nuovoposto: 7
    fagiolo: 5
    sol: 36
  - disp: ["", "", HP, "", "", X, "", ""]
    posto: 3
    nuovoposto: 6
    fagiolo: 3
    sol: 27
  - disp: ["", "", HP, "", "", X, "", ""]
    posto: 6
    nuovoposto: 3
    fagiolo: 3
    sol: 72
  - disp: ["", HP, "", "", "", "", X, ""]
    posto: 7
    nuovoposto: 2
    fagiolo: 5
    sol: 63
---

Harry Porter ha trovato una serie di castelli magici, in cui ogni stanza contiene una gemma. Lui conosce l'incantesimo per teletrasportarsi dentro il castello (ma non riesce a scegliere in che stanza teletrasportarsi) e anche quello per poi teletrasportarsi fuori (indipendentemente dalla stanza in cui si trova). Quando è dentro al castello può spostarsi mediante una serie di fagioli magici. Ogni fagiolo ha un numero, e gli consente di spostarsi a destra o sinistra di quel numero di stanze.

Nel primo castello, composto da 4 stanze numerate da $1$ a $4$, Harry Porter si è ritrovato nella stanza numero $3$, come mostrato in figura qui sotto.

| 1   | 2   | 3   | 4   |
| --- | --- | --- | --- |
|     |     | HP  |     |

In quel caso aveva tre fagioli, numerati da $1$ a $3$. In questa situazione ha deciso di agire nel modo seguente:

1. ha usato il fagiolo di tipo $1$ per spostarsi (a sinistra) nella stanza $2$;
2. ha usato il fagiolo di tipo $2$ per spostarsi (a destra) nella stanza $4$;
3. ha usato il fagiolo di tipo $3$ per spostarsi (a sinistra) nella stanza $1$.

In questo modo è riuscito a visitare tutte le stanze del castello e
quindi a prendere tutte e $4$ le gemme.

Adesso però la situazione si è complicata. Harry Porter si è appena teletrasportato in un altro castello magico, stavolta di $8$ stanze, e si è ritrovato nella stanza numero $\js{posto}$. Qui $-$ per errore! $-$ ha usato subito il fagiolo $\js{fagiolo}$, trovandosi nella stanza $\js{nuovoposto}$ come mostrato qui sotto (dove con X mostriamo la stanza numero $\js{posto}$, già visitata da Harry Porter).

| 1         | 2         | 3         | 4         | 5         | 6         | 7         | 8         |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| {disp[0]} | {disp[1]} | {disp[2]} | {disp[3]} | {disp[4]} | {disp[5]} | {disp[6]} | {disp[7]} |

Questa non era la situazione che aveva pianificato Harry Porter; adesso gli sono rimasti $6$ fagioli magici, numerati da $1$ a $7$ tranne il fagiolo $\js{fagiolo}$ che ha già usato. Riesci a trovare un modo di usarli per visitare tutte le stanze?

Per rispondere al quesito, in particolare, devi identificare le ultime due stanze $X$ e $Y$ che vengono visitate, e devi scrivere i due numeri $X$ e $Y$ uno di seguito all'altro ($XY$).

Ad esempio, per il castello di $4$ stanze visto sopra, le ultime due stanze visitate sono state la $4$ e poi la $1$, quindi la risposta corretta sarebbe stata $41$.

Quanto vale $XY$ nel castello di $8$ stanze, partendo dalla stanza $\js{nuovoposto}$ (dopo aver già visitato la stanza $\js{posto}$ e aver già consumato il fagiolo $\js{fagiolo}$)?

?> {sol}
