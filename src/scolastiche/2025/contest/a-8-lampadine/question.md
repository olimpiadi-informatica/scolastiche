import variants from "./variants.py";

Nel nuovo centro commerciale _WallMars_ ci sono $\js{n}$ porte automatiche, inizialmente tutte disattivate, e ognuna collegata
ad un interruttore per attivarne il funzionamento. Da una soffiata anonima, hai scoperto che **esattamente uno** degli interruttori è rotto, ma non sai quale e devi scoprirlo!

![WallMars](wallmars.jpg)

Ogni minuto puoi fare esattamente una di queste 2 azioni:

1. azionare un interruttore: se è quello rotto non succede nulla, altrimenti cambia lo stato della porta (da disattiva a attiva oppure da attiva a disattiva, ma senza scoprire se alla fine è attiva o disattiva);
2. controllare se una data porta è attiva o disattiva.

Di quanti minuti hai bisogno al minimo per essere sicuro di capire qual è l'interruttore rotto, anche se sei sfortunato?

- [x] $\js{ans1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$

> Una strategia ottimale è la seguente.
>
> Provo ad azionare il primo interruttore (1 minuto), poi controllo se la porta è attiva (1 minuto).
> Nel caso non sia attiva, allora mi fermo perché ho trovato l'interruttore rotto, altrimenti passo a quello dopo.
> Il caso peggiore è quello in cui l'interruttore rotto è l'ultimo che viene controllato.
> In questo caso si impiegherebbero $2 \cdot \js{n} = \js{2*n}$ minuti, ma possiamo fare di meglio!
>
> Dato che è garantito che c'è almeno un interruttore rotto, possiamo evitare di 
> controllare l'ultima porta. Questo perché se non abbiamo trovato la porta guasta 
> nelle prime $\js{n}-1$ porte, allora deve per forza essere l'ultima! La risposta è 
> quindi $2 \cdot \js{n} - 2 = \js{2*n} - 2 = \js{ans1}$.

---

Dopo averci pensato meglio, ti sei accorto che c'è una terza azione che puoi fare, sempre nel tempo di un minuto:

1. misurare il consumo elettrico totale di _WallMars_, capendo così esattamente quante porte sono attive in quel momento.

Con quest'altra possibilità, e le due precedenti, di quanti minuti hai bisogno per capire qual è l'interruttore rotto?

?> {ans2}

> In questo caso si può adottare una tecnica chiamata [_ricerca binaria_](https://it.wikipedia.org/wiki/Ricerca_dicotomica).
>
> Dividiamo a metà l'intervallo e attiviamo tutte le porte nella prima metà ($\js{n} / 2$ minuti).
> Ora misuriamo quante porte attive ci sono nella prima parte (1 minuto). Se ce ne sono
> meno rispetto a quelle che abbiamo attivato, allora sappiamo che la porta
> guasta si trova nella prima metà ed è l'unica porta ancora disattivata. 
> Se invece ci sono tante porte attive quante ce ne aspettiamo, la porta guasta si trova
> nella seconda metà.
>
> In entrambi i casi, ci siamo ricondotti ad un intervallo di metà delle porte, di cui
> sappiamo quante sono attive al momento. Ora possiamo considerare _metà_ di questa _metà_
> di porte, premere tutti gli interruttori corrispondenti ($\js{n} / 4$ minuti), e poi
> misurare il numero di porte attive in totale (1 minuto). Se il numero di porte attive
> cambia del numero di interruttori premuti meno uno ($\js{n} / 4 - 1$), allora la porta
> guasta si trova nell'intervallo per cui abbiamo premuto gli interruttori, altrimenti si
> trova nell'altro quarto. In ogni caso, ci siamo ricondotti ad un quarto delle porte.
> 
> Ripetiamo questa procedura fino ad arrivare ad un intervallo di 2 porte, per individuare
> quale delle due è quella guasta. Il numero di minuti che ci chiede questo procedimento è:
>
> $\js{n} / 2 + 1$
>
> $+ \js{n} / 4 + 1$
>
> $\ldots$
>
> $+ 2 + 1$
>
> $+ 1 + 1$
>
> Il numero di righe nel calcolo sopra è pari a $\log_2{\js{n}} = \js{k}$, e in ciascuna riga
> abbiamo un $+1$. Inoltre, la somma degli altri termini di ogni riga è pari a
> $\js{n} / 2 + \js{n} / 4 + \ldots + 4 + 2 + 1 = \js{n} - 1 = \js{n-1}$.
> Quindi in totale questo approccio usa $\js{n-1} + \js{k} = \js{ans2}$ operazioni.
