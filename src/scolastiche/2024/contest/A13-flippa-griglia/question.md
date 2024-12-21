import variants from "./variants.py";

Mentre andava a scuola, Francesco è inciampato su una griglia magica 4x4 formata da caselle bianche e nere, rappresentata in figura.

![Immagine](griglia1.asy?v=variants.py)

Provando a giocarci si è accorto che può invertire tutte le celle in una riga, facendo sì che le caselle nere diventino bianche e viceversa. Ad esempio, se applica l'operazione alla terza riga ottiene la griglia seguente.

![Immagine](immagine1_fliprow2.asy?v=variants.py)

Quali delle seguenti griglie può ottenere se applica questa operazione in modo opportuno? Inserire la lista di griglie che può ottenere, in ordine e non separate da spazi. Per esempio se può ottenere le griglie $2$, $4$ e $5$, inserire $245$.

![Immagine](griglie2.asy?v=variants.py)

?> {ans1}

> Le righe non interagiscono tra loro, quindi posso controllare ogni riga singolarmente.
> Notiamo che effettuare due operazioni sulla stessa riga è inutile. Quindi, su una riga, posso scegliere se effettuare l'operazione una sola volta o zero volte.
> Dunque ogni riga può avere due stati possibili (quello iniziale, e quello in cui tutte le caselle sono state invertite).
> Per ogni possibile griglia che vorrei ottenere, verifico se ogni riga è in uno di quei due stati: se sì la includo nella risposta, altrimenti non la includo.
> Le griglie ottenibili sono $\js{String(ans1).split('').join(', ')}$ e quindi la risposta è $\js{ans1}$.
>
> ![6.1](6-1.asy)

---

Il giorno dopo Francesco si accorge che può anche invertire una colonna della griglia. Sapendo quindi che può invertire sia righe che colonne, quali delle seguenti griglie può ottenere? Inserire la risposta nello stesso formato della domanda precedente.

![Immagine](griglie2.asy?v=variants.py)

?> {ans2}

> Le uniche mosse che possono modificare la prima riga sono:
> - invertire la prima riga;
> - invertire le colonne.
> 
> Ad esempio, suppongo di non invertire la prima riga. Allora, guardando la griglia finale, posso capire quali colonne vanno invertite (quelle che non corrispondono nella casella della prima riga).
> A questo punto ho determinato tutte le mosse sulle colonne, e rimangono solo le mosse sulle altre righe, quindi mi sono ricondotto alla versione facile del problema.
> Quindi una possibile soluzione è: provo a invertire o non invertire la prima riga, quindi determino le mosse sulle colonne, e infine determino le mosse sulle righe.
> 
> In realtà, non è necessario controllare entrambi i casi per la mossa sulla prima riga. Se esiste una soluzione che non inverte la prima riga, esiste anche una soluzione che la inverte (e viceversa): basta fare una mossa in più su ogni riga e una su ogni colonna, e queste mosse si annullano tra loro, lasciando la griglia invariata. Possiamo qunidi assumere di non invertire la prima riga.
>
> Seguendo questo procedimento, possiamo capire che le griglie ottenibili sono $\js{String(ans2).split('').join(', ')}$ e quindi la risposta è $\js{ans2}$.
>
> ![6.2](6-2.asy)
