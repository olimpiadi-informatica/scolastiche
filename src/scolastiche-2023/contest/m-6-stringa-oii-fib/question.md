Tip-Tap sta organizzando una gara di informatica, ma ne deve ancora decidere il nome.
Il nome deve essere una parola di $4$ lettere, composta da solo $\textsf{O}$ e $\textsf{I}$.
Per evitare problemi di copyright, il nome non deve contenere tre lettere consecutive che formano la parola $\textsf{OII}$.
Per esempio:

![nomi](fig.asy)

Quanti sono i possibili nomi che Tip-Tap può dare alla gara?

- [ ] $16$
- [ ] $4$
- [ ] $8$
- [ ] $6$
- [x] $12$

> Potremmo elencare tutti i nomi ammissibili, ma sarebbe lungo e noioso!
>
> In alternativa, possiamo accorgerci che **in totale** le parole di $4$ lettere composte solo da $\textsf{O}$ e $\textsf{I}$ sono $2 \times 2 \times 2 \times 2 = 16$.
> Infatti, per ogni lettera in più ho il doppio delle possibilità: quelle che aggiungono una $\textsf{O}$ (tante quante quelle con una lettera in meno)
> e quelle che aggiungono una $\textsf{I}$ (anche queste tante quante quelle con una lettera in meno).
>
> Ora elenchiamo invece i nomi **non ammissibili** (cioè che contengono la parola $\textsf{OII}$), che sono questi $4$:
>
> - $\textsf{OIIO}$
> - $\textsf{OIII}$
> - $\textsf{OOII}$
> - $\textsf{IOII}$
>
> Dato che i nomi ammissibili sono tutti gli altri, devono essere $16 - 4 = 12$.