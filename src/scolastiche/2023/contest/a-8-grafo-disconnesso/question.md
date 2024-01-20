import variants from "./variants.py";

Luca ha trovato la cartina della rete idrica del suo paese. Sopra vi sono rappresentati gli snodi e le tubature che li collegano. Gli snodi sono indicati tramite dei cerchi numerati, mentre se esiste una tubatura tra lo snodo $a$ e lo snodo $b$ ci sarà una linea che li collega.

Diciamo che uno snodo è _connesso_ ad un'altro se è esiste una sequenza di tubature che li collega. Per esempio, in questa rete:

![Immagine](immagine1.asy?v=variants.py)

lo snodo 1 è connesso allo snodo 6, mentre lo snodo 3 non è connesso allo snodo 5.
Luca vuole aggiungere nuove tubature, ma l'ufficio di igiene gli ha chiesto di evitare
di mettere in connessione tutti gli snodi (in altre parole, devono esserci almeno
due snodi non connessi), e l'economato non vuole che due tubature diverse abbiano per
estremi la stessa coppia di snodi. Quante tubature può aggiungere al massimo?

?> {ans1}

---

Luca ora si sta occupando della rete idrica di un'altra città. Quante tubature al massimo può aggiungere in questa nuova rete, rispettando gli stessi vincoli?

![Immagine](immagine2.asy?v=variants.py)

?> {ans2}
