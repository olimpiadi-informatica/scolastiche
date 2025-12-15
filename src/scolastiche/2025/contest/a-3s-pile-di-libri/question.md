import variants from "./variants.py";

Per la verifica di _greco antico_ devi studiare $\js{n}$ pile di libri di varie altezze.
Mentre li osservi, raccogliendo le forze per iniziare a leggerli, sei un po' infastidito dal fatto che le pile hanno altezze diverse.
Quanti libri dovresti **aggiungere** al minimo per portare tutte le pile alla stessa altezza?

![immagine](immagine.asy?v=variants.py)

- [x] $\js{ans1}$
- [ ] $\js{wrong1[0]}$
- [ ] $\js{wrong1[1]}$
- [ ] $\js{wrong1[2]}$
- [ ] $\js{wrong1[3]}$

> Siccome non si possono rimuovere libri, tutte le pile devono raggiungere l'altezza della pila più alta.
> Quindi il risultato si ottiene sommando per ogni pila la differenza di altezza tra la pila più alta e quella pila:
> in questo caso $\js{h-altezze[0]} + \js{h-altezze[1]} + \js{h-altezze[2]} + \js{h-altezze[3]} + \js{h-altezze[4]} = \js{ans1}$.

---

Osservando ancora meglio le pile, hai pensato che non solo potresti **aggiungere** nuovi libri prendendoli dalla tua riserva, ma potresti anche **spostare** i libri che ci sono da una pila all'altra.
Quanti libri dovresti **spostare o aggiungere** al minimo, per portare tutte le pile alla stessa altezza?

- [x] $\js{ans2}$
- [ ] $\js{wrong2[0]}$
- [ ] $\js{wrong2[1]}$
- [ ] $\js{wrong2[2]}$
- [ ] $\js{wrong2[3]}$

> Spostare i libri è sempre conveniente rispetto ad aggiungere, perché alza la pila più bassa mentre abbassa la pila più alta, avvicinando le altezze delle pile.
> Spostando i libri, possiamo portare tutte le pile all'altezza media arrotondata per eccesso, che in questo caso è $\js{hf}$.
> Il numero di aggiunte o spostamenti sarà quindi pari a quanto manca ad ogni pila per arrivare a $\js{hf}$, contando zero per le pile già più alte:
> $\js{Math.max(hf-altezze[0],0)} + \js{Math.max(hf-altezze[1],0)} + \js{Math.max(hf-altezze[2],0)} + \js{Math.max(hf-altezze[3],0)} + \js{Math.max(hf-altezze[4],0)} = \js{ans2}$.
