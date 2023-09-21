Un numero intero positivo si dice _palindromo_ se è lo stesso letto da sinistra a destra o da destra a sinistra (in base $10$). Ad esempio, $3223$, $9019109$ e $5$ sono palindromi, mentre $1010$ e $5556$ non lo sono.

Qual è la **somma delle cifre** del più piccolo numero palindromo di **esattamente** $9$ cifre, della forma $\texttt{\_}3\texttt{\_}2\texttt{\_}\texttt{\_}9\texttt{\_}\texttt{\_}$? I trattini bassi possono essere qualunque cifra, ma quello più a sinistra non può essere $0$.

- [ ] $27$
- [ ] $28$
- [ ] $29$
- [x] $30$
- [ ] $32$

> La risposta è $30$.
>
> Osserviamo che la penultima cifra deve essere uguale alla seconda (che è la sua speculare), cioè $3$. Allo stesso modo la terza cifra è uguale alla terzultima, ovvero $9$, e la sesta cifra è uguale alla quarta, cioè $2$. A questo punto il numero ha la forma $\texttt{\_}392\texttt{\_}293\texttt{\_}$ e dobbiamo scegliere le altre cifre. Poiché vogliamo minimizzare il numero, conviene scegliere come cifra centrale $0$, e come prima e ultima cifra $1$ (non possiamo scegliere $0$).
>
> Il numero ottenuto è $139202931$, e la somma delle sue cifre è $30$.
