Sulla retta dei numeri reali sono posizionati $8$ portali: il primo in posizione $1$, il secondo in posizione $2$, fino all'ottavo che è in posizione $8$. Inizialmente, tutti i portali sono **attivi**.

Una formica inizia a camminare sulla retta, partendo in posizione $0$ e muovendosi sempre verso destra, alla velocità di $1$ unità al secondo. Quando la sua posizione coincide con quella del portale:

- se il portale è **inattivo**, il portale diventa **attivo** e la formica continua a camminare normalmente;
- se il portale è **attivo**, il portale diventa **inattivo** e la formica viene istantaneamente teletrasportata in posizione $0$, dove ricomincia a camminare verso destra alla stessa velocità.

Quanti secondi sono passati, dall'istante in cui ha iniziato a camminare, quando la formica raggiunge la posizione $9$?

- [ ] $442$
- [x] $511$
- [ ] $373$
- [ ] $896$
- [ ] $424$

> La risposta è $511$.
> 
> *Prima soluzione.* Indichiamo con $\texttt{A}$ un portale attivo e con $\texttt{I}$ un portale inattivo. All'inizio la sequenza di portali è $\texttt{AAAAAAAA}$. Un secondo dopo l'istante iniziale, la formica incontra il primo portale, che è attivo: viene quindi teletrasportata in $0$ e la nuova sequenza di portali è $\texttt{IAAAAAAA}$. Dopo un altro secondo, incontra di nuovo il primo portale, che adesso è inattivo, dunque la formica prosegue verso destra; un secondo dopo incontra il secondo portale, che è attivo, e viene teletrasportata in $0$. La sequenza a questo punto è $\texttt{AIAAAAAA}$.
> 
> In generale, ogni volta che la formica riparte da $0$, sia $k$ la posizione della prima $\texttt{A}$ nella sequenza. La formica cammina verso destra per $k$ secondi, invertendo lo stato dei primi $k - 1$ portali (da inattivo ad attivo) e del $k$-esimo portale (da attivo a inattivo), e viene teletrasportata in $0$.
> 
> È possibile mostrare che, durante tutto il procedimento, vengono prodotte tutte le $2^8$ possibili sequenze di $\texttt{A}$ e $\texttt{I}$ di lunghezza $8$, e l'ultima di queste sequenze è $\texttt{IIIIIIII}$. Per ciascuna sequenza eccetto quest'ultima, al tempo totale viene sommata la posizione $k$ della prima $\texttt{A}$ che vi compare (come visto prima). Per l'ultima sequenza, la formica non viene bloccata da nessun portale, quindi in $9$ secondi raggiunge il traguardo.
> 
> Per $k = 1, \, \dots, \, 8$, il numero di sequenze che hanno la prima $\texttt{A}$ in posizione $k$ è $2^{8 - k}$: infatti, le prime $k$ lettere sono determinate, e le restanti $8 - k$ possono essere scelte arbitrariamente. La risposta è quindi:
> 
> $$
> (1 \cdot 2^{8 - 1} + 2 \cdot 2^{8 - 2} + \cdots + 8 \cdot 2^{8 - 8}) + 9 = 511.
> $$
> 
> *Seconda soluzione.* Risolviamo il problema mediante una ricorrenza. Per $0 \le n \le 8$, sia $T(n)$ il tempo passato dall'istante iniziale quando la formica raggiunge per la prima volta la posizione $n + 1$. Si ha $T(0) = 1$.
> 
> Prendiamo ora $n > 0$. Per raggiungere la posizione $n + 1$, la formica deve aver sicuramente raggiunto la posizione $n$: quando questo accade, è passato un tempo $T(n - 1)$. A quel punto, la formica riparte da $0$, è la situazione dei portali è la seguente: tutti i portali da $1$ a $n - 1$ sono attivi, mentre il portale $n$ è inattivo. La formica deve ancora una volta raggiungere la posizione $n$, e, poiché i primi $n - 1$ portali sono esattamente nello stato iniziale, il tempo necessario è ancora $T(n - 1)$. Per finire, la formica percorre una ulteriore unità di lunghezza in un tempo $1$.
> 
> Otteniamo dunque la ricorrenza $T(n) = 2T(n - 1) + 1$, con $T(0) = 1$. Si può dimostrare che essa ha la soluzione $T(n) = 2^{n + 1} - 1$, ma non è necessario: è sufficiente calcolare i valori a mano, essendocene solo $8$. Come prima, si trova $T(8) = 511$.
