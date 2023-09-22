---
variants:
  - posti: [9, 6, 5, 8, 4, 2, 7, 3]
    sol: 9
  - posti: [6, 4, 9, 7, 8, 2, 3, 5]
    sol: 6
  - posti: [4, 9, 5, 8, 7, 2, 3, 6]
    sol: 4
  - posti: [5, 9, 6, 4, 8, 2, 3, 7]
    sol: 5
---

Artù e i cavalieri della tavola rotonda si siedono sempre a una tavola ovviamente rotonda. Il numero di cavalieri è cambiato varie volte, ma per un certo periodo è rimasto costante a 9.

Il posto più ambito era, ovviamente, sedersi alla destra di Re Artù. Gli altri 8 cavalieri si accordano: a ogni riunione il loro posto **sarebbe sempre stato cambiato secondo il seguente schema** (dove il posto numero 1 è sempre quello in cui si siede Artù e gli altri numeri seguono in senso _antiorario_):

| Posto nella riunione in corso   | 2          | 3          | 4          | 5          | 6          | 7          | 8          | 9          |
| ------------------------------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| Posto nella riunione successiva | {posti[0]} | {posti[1]} | {posti[2]} | {posti[3]} | {posti[4]} | {posti[5]} | {posti[6]} | {posti[7]} |

Facendo riferimento alla riunione attuale, in cui indichiamo i cavalieri con un numero da 2 a 9, chi è il cavaliere che dovrà aspettare l'ottava riunione **per sedersi alla destra di Artù**?
Nella prima riunione è ovviamente il cavaliere numero 2, nella seconda riunione, secondo lo schema sopra indicato, è il cavaliere numero 7.

Chi è che occuperà il posto numero 2 all'ottava riunione?

?> {sol}
