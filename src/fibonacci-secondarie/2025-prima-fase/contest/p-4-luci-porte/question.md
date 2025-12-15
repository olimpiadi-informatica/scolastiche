import variants from "./variants.py";

Allie ha comprato un nuovo robot tuttofare, e vuole fargli pulire casa! Il suo appartamento è composto da una sequenza di {length} stanze una dopo l'altra. Le stanze sono separate da porte, e ciascuna ha un interruttore che regola la luce della stanza successiva. Inizialmente, il robot si trova nella stanza 1, e le luci e porte sono in questo stato (le porte chiuse sono quelle verticali che sbarrano la strada al robot, impedendogli di avanzare):

![appartamento](fig.asy?v=variants.py)

Allie ha programmato il robot per seguire questo procedimento:

![code](code.asy?s=0.7)

Dove si troverà il robot alla fine del procedimento?

- [x] nella stanza $\js{ans1}$
- [ ] nella stanza $\js{wrong1[0]}$
- [ ] nella stanza $\js{wrong1[1]}$
- [ ] nella stanza $\js{wrong1[2]}$
- [ ] il robot esce dall'appartamento

> Il robot preme l'interruttore ogni volta che incontra una porta chiusa.
> Quindi può procedere fintanto che le luci già accese solo precedute da
> una porta aperta, e le luci spente sono precedute da una porta chiusa.
> Si ferma quindi alla prima stanza che sia o accesa dopo una porta chiusa,
> oppure spenta dopo una porta aperta: nel nostro caso questa stanza è la $\js{ans1}$.

---

Allie non è molto convinta del procedimento che ha programmato prima, allora ha deciso di modificarlo di modo che **qualunque** sia lo stato delle porte e delle luci, il robot arrivi sempre fino alla fine dell'appartamento,
**a patto che la luce nella stanza iniziale sia accesa**.
Purtroppo però il robot ha una programmazione molto vincolata! Devi per forza tenere il ciclo "ripeti mentre" più esterno, mentre al suo interno puoi mettere in sequenza tanti blocchi di istruzioni quanti vuoi, scelti tra questi 5 possibili:

<div class="print:hidden">
![code](code-alt1.asy?v=variants.py)
![code](code-alt2.asy?v=variants.py)
![code](code-alt3.asy?v=variants.py)
</div>

<div class="hidden print:block">
![code](code-alt1.asy?v=variants.py)

![code](code-alt2.asy?v=variants.py)

![code](code-alt3.asy?v=variants.py)
</div>

Per esempio, il programma della domanda precedente corrisponde alla sequenza del **blocco {perm[3]}** seguito dal **blocco {perm[1]}**, ma non sempre consente al robot di arrivare in fondo all'appartamento.
Quale di questi sarebbe invece un programma corretto? Tieni conto che il robot non può avanzare se la porta è chiusa, e in caso di più programmi corretti, riporta **quello più corto (con meno istruzioni)**.

- [x] **blocco {perm[0]}**, poi **blocco {perm[1]}**, poi **blocco {perm[2]}**
- [ ] **blocco {perm[3]}**, poi **blocco {perm[1]}**, poi **blocco {perm[2]}**
- [ ] **blocco {perm[1]}**, poi **blocco {perm[2]}**, poi **blocco {perm[0]}**
- [ ] **blocco {perm[0]}**, poi **blocco {perm[1]}**, poi **blocco {perm[4]}**
- [ ] **blocco {perm[3]}**, poi **blocco {perm[1]}**, poi **blocco {perm[4]}**

> Osserviamo che il ciclo più esterno richiede una luce accesa per continuare.
> Ciò vuol dire che al robot è permesso entrare in una stanza con la luce spenta,
> a patto che, quando sono terminate tutte le istruzioni del ciclo, la luce della
> stanza in cui si trova al momento sia accesa.
> 
> In qualunque posizione si trovi il robot, prima di poter avanzare deve
> aprire la porta, segue quindi che il primo blocco di istruzioni dovrà essere
> o il **blocco {perm[0]}** oppure il **blocco {perm[3]}**.
> Dato che il robot non può sapere se la luce è accesa senza entrare nella stanza,
> a questo punto non gli resta che avanzare con il **blocco {perm[1]}**.
> Tuttavia, in questo momento il robot potrebbe trovarsi in una stanza con la luce
> spenta, il che lo porterebbe a fermarsi. Per evitare che questo accada deve
> usare il **blocco {perm[2]}**, che in caso la luce sia spenta lo fa arretrare,
> premere l'interruttore nella stanza prima (accendendo la luce), e poi avanzare
> di nuovo per tornare nella stanza corrente.
>
> Entrambe le scelte del primo blocco portano il robot ad arrivare fino in fondo,
> però il **blocco {perm[0]}** contiene meno istruzioni. La soluzione è quindi
> usare il **blocco {perm[0]}**, poi **blocco {perm[1]}**, poi **blocco {perm[2]}**.
