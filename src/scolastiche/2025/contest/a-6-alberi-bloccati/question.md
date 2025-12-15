import variants from "./variants.py";

Hai appena aperto un allevamento di conigli. L'allevamento comprende diverse aree, collegate da percorsi secondo questa struttura ad albero:

![allevamento](immagine1.asy?v=variants.py)

Alcune delle aree dell'allevamento contengono conigli, altre contengono dei campi di carote. I percorsi interni invece possono essere bloccati da una recinzione, indicata nello schema da un lucchetto, che i conigli non possono attraversare. Nella configurazione sopra, quante sono le **diverse coppie** (coniglio, carota) per cui il coniglio può raggiungere la carota? Le coppie possono anche avere conigli e carote in comune tra loro

- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [x] $\js{ans1}$
- [ ] $\js{wrong1[3]}$

> Dato che il nodo con il lucchetto non può essere mai attraversato, possiamo 
> rimuoverlo dall'albero. Questo ci lascia una configurazione formata da $3$
> alberi scollegati. Per ogni albero contiamo il numero di conigli $A$ e carote $B$, e moltiplichiamo
> tra loro questi due valori per ottenere la risposta parziale di quest'albero 
> $R_{albero} = A \cdot B$. Per entrambi gli alberi che stavano sotto al nodo con il lucchetto,
> il numero sarà quindi zero, visto che contengono rispettivamente solo conigli e solo carote.
> L'albero rimanente ha $\js{factor}$ carote e $\js{ans1/factor}$ conigli, per cui la risposta è 
> $\js{factor} \times \js{ans1/factor} = \js{ans1}$.

---

L'ora del pranzo è terminata, e ora vuoi evitare che i conigli possano raggiungere ancora le carote. Se l'allevamento segue questo schema:

![allevamento](immagine2.asy?v=variants.py)

Quanti percorsi interni (cerchi bianchi) devi bloccare al minimo di modo che nessun coniglio possa raggiungere nessuna carota?

- [ ] $\js{wrong2[0]}$
- [x] $\js{ans2}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] $\js{wrong2[3]}$

> Definiamo _radice_ dell'albero il nodo più in alto tra tutti.
> Possiamo risolvere il problema tramite il seguente algoritmo. Facciamo
> una [_visita_](https://it.wikipedia.org/wiki/Ricerca_in_profondit%C3%A0)
> dell'albero dal basso verso l'alto (prima di visitare un nodo, visitiamo
> tutti i suoi figli). Mentre che visitiamo i nodi faremo due cose:
> assegnare i lucchetti, ma anche segnarci come **_stato_** del nodo ciò che si
> può raggiungere scendendo da quel nodo (niente, conigli o carote).
>
> Quando visitiamo un nodo, innanzitutto raccogliamo lo **_stato_** di tutti i
> suoi _figli_ (nodi direttamente collegati e più in basso), e facciamo l'unione di tutti questi
> stati. Il risultato che ne consegue, che chiamiamo **_totale_**, può essere:
>
> - _conigli e carote_: in tal caso mettiamo un lucchetto nel nodo corrente, e ne assegnamo lo **_stato_** a _niente_ (il lucchetto impedisce di visitare altro!).
> - _niente_, solo _conigli_ o solo _carote_: in tal caso non mettiamo un lucchetto e assegnamo lo **_stato_** del nodo corrente a **_totale_**.
>
> Questa procedura ci fornisce la risposta ottimale, che è $\js{ans2}$.
> Un possibile piazzamento è rappresentato in figura:
>
> ![allevamento](immagine3.asy?v=variants.py)
