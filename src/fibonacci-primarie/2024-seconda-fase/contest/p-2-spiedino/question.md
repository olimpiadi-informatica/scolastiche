Allie ha preparato un lungo spiedino di 25 gustosi cibi:

![spiedino](fig.asy)

Ora deve determinare il **valore** dello spiedino per portarlo al mercato. Per calcolarlo, deve seguire questo procedimento:

![code](code.asy)

Quanto è il valore calcolato alla fine di questo procedimento?

- [ ] 4
- [x] 8
- [ ] 12
- [ ] 18
- [ ] 25

> Ragionando sul programma di Allie, si può vedere che con un ciclo percorre tutti i valori $i$ da $1$ a $24$,
> esaminando per ciascuno se i cibi nelle posizioni $i$ e $i+1$ sono diversi. In altre parole, Allie sta
> esaminando tutte le coppie di cibi vicini, contando quante sono diverse. Questo in pratica conta quanti
> diverse zone di frutta uguale ci sono sullo spiedino, che sono 8:
> 
> 1. le due patate;
> 2. la mela;
> 3. le due carote;
> 4. le cinque fette di anguria;
> 5. le due melanzane;
> 6. le quattro fragole;
> 7. le due banane; e infine
> 8. i sette pomodori.
>
> ![primarie](primarie1.asy)
> ![secondarie](secondarie1.asy)

---

Carol sta pensando che gli piacerebbe cambiare un po' il suo spiedino, di modo che il suo valore aumenti di $5$.
Quanti frutti dovrà modificare al minimo per ottenere questo risultato?

- [ ] 2
- [x] 3
- [ ] 4
- [ ] 5
- [ ] 6

> Possiamo creare $5$ zone di frutta in più cambiando solo tre frutti.
> Con un singolo frutto possiamo spezzare una zona che sia lunga almeno tre per farla diventare tre zone.
> Questa cosa possiamo farla due volte per aumentare il valore di $4$, per esempio sostituendo
> una fetta di anguria nel mezzo con una patata e una delle fragole nel mezzo con una mela.
> 
> A questo punto dobbiamo ancora aumentare il valore di $1$. Questo possiamo farlo sostituendo un cibo
> alla fine della zona con un'altro diverso: per esempio sostituendo una banana con una carota.
> Questo sarebbe il risultato finale:
>
> ![soluzione](sol.asy)
>
> ![primarie](primarie2.asy)
> ![secondarie](secondarie2.asy)
