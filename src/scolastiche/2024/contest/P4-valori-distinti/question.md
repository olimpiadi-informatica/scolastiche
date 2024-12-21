import variants from "./variants.py";

Considera la seguente funzione, che prende come parametri un array di interi $a$ e un intero $n$ che indica la sua lunghezza.

```srs
function conta(a: integer[], n:integer) -> integer
	variable ans: integer
	ans <- 0
	for i in [0...n-1) do
		if a[i] == a[i + 1] then
			ans <- ans + 1
		else
			ans <- ans + a[i + 1] - a[i]
		end if
	end for
	return ans
end function

```

Che valore viene restituito da `conta([{array1}], 10)`? (l'array $a$ è anche riportato sotto)

![Immagine](immagine1.asy?v=variants.py)

?> {ans1}

> Questa versione del problema si può risolvere a mano, simulando l'esecuzione del codice su carta, e ottenendo la risposta $\js{ans1}$.
>
> ![10.1](10-1.asy)

---

Quanti valori distinti può ritornare la funzione `conta` se $n$ vale $\js{len2}$ e l'array $a$ è composto da $\js{len2}$ valori tra $0$ e $9$?

?> {ans2}

> Qui invece conviene capire cosa fa effettivamente il codice.
> Per ogni coppia di elementi adiacenti uguali, aggiungiamo $1$ alla risposta, e per ogni coppia di elementi adiacenti diversi aggiungiamo $a_i-a_{i-1}$.
> Ma se due elementi $a_i$, $a_{i-1}$ sono uguali, la loro differenza è $0$, quindi se aggiungiamo $a_i-a_{i-1}$ per ogni coppia di elementi adiacenti (uguali oppure diversi) la risposta non cambia.
> La somma è $(a_1-a_0) + (a_2-a_1) + \ldots + (a_{n-1}-a_{n-2}) = a_{n-1}-a_0$ (tutti gli altri termini si semplificano).
> Quindi `ans` dipende dal primo elemento, dall'ultimo elemento, e dal numero di coppie di elementi adiacenti uguali.
> Il valore minimo di `ans` si ottiene mettendo $9$ all'inizio, $0$ alla fine, e nessuna coppia di elementi adiacenti uguali, ed è quindi $-9$.
> Il valore massimo di `ans` si ottiene mettendo $0$ all'inizio, $9$ alla fine, e il numero massimo possibile di coppie adiacenti uguali, cioè $\js{len2-2}$ (non possono essere $\js{len2-1}$ perché gli estremi sono diversi), per un totale di $9 + \js{len2-2} = \js{len2+7}$.
> Tutti i valori di `ans` intermedi si possono ottenere, quindi la risposta è $\js{len2+7} + 9 + 1 = \js{ans2}$.
>
> ![10.2](10-2.asy)
