/*! For licenses information, see LICENSES.txt */
import{c as N,r as x}from"./react-dom-DRH1SuJM.js";import{j as e}from"./toString-Cvz4-Zey.js";import{u as d,r as C,O as L}from"./olinfo-auth-CoKTiOIu.js";import{M as k,a as _,b as U,c as $}from"./question-DscFh_NR.js";import{C as A,R as m,S as M,V as B}from"./visualizer-ChWI5v35.js";const j={src:new URL("code-D2DCnhW6.svg",import.meta.url).href,width:"513.3333333333333",height:"890.6666666666666"},g={src:new URL("secondarie-C4ee40DA.svg",import.meta.url).href,width:"305.3333333333333",height:"248"};function y(i){const t={p:"p",span:"span",...d(),...i.components},{Answer:n,AnswerGroup:o,Explanation:l,Image:r,MathExpr:a,SubProblem:c}=t;return n||p("Answer",!0),o||p("AnswerGroup",!0),l||p("Explanation",!0),r||p("Image",!0),a||p("MathExpr",!0),c||p("SubProblem",!0),e.jsxs(c,{children:[e.jsx(t.p,{children:"Tip-Tap sistemando la sua soffitta si è imbattuto in un libro di programmazione molto vecchio. Nella prima pagina trova il seguente procedimento:"}),e.jsx(t.p,{children:e.jsx(t.span,{className:"flex justify-center",children:e.jsx(r,{alt:"code",src:typeof j=="function"?j(_variant):j})})}),e.jsx(t.p,{children:"Purtroppo la successiva pagina è rovinata perciò Tip-Tap non riesce a capire che numero verrà stampato alla fine, aiutalo tu! Quale numero viene stampato dall’ultimo blocco?"}),e.jsxs(o,{children:[e.jsx(n,{correct:!1,children:e.jsx(t.p,{children:"0"})}),e.jsx(n,{correct:!0,children:e.jsx(t.p,{children:"2"})}),e.jsx(n,{correct:!1,children:e.jsx(t.p,{children:"4"})}),e.jsx(n,{correct:!1,children:e.jsx(t.p,{children:"6"})}),e.jsx(n,{correct:!1,children:e.jsx(t.p,{children:"10"})})]}),e.jsxs(l,{children:[e.jsxs(t.p,{children:["Il programma incrementa il contatore per ogni multiplo di ",e.jsx(a,{children:String.raw`7`})," fino a ",e.jsxs(t.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(a,{children:String.raw`42`}),","]}),`
e lo decrementa per ogni multiplo di `,e.jsx(a,{children:String.raw`9`})," fino a ",e.jsxs(t.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(a,{children:String.raw`42`}),"."]}),`
Siccome i multipli di `,e.jsx(a,{children:String.raw`7`})," fino a ",e.jsx(a,{children:String.raw`42`})," sono ",e.jsx(a,{children:String.raw`6`})," e i multipli di ",e.jsx(a,{children:String.raw`9`})," fino a ",e.jsx(a,{children:String.raw`42`})," sono ",e.jsxs(t.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(a,{children:String.raw`4`}),","]}),`
il contatore alla fine varrà `,e.jsxs(t.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(a,{children:String.raw`6 - 4 = 2`}),"."]})]}),e.jsx(t.p,{children:e.jsx(t.span,{className:"flex justify-center",children:e.jsx(r,{alt:"secondarie",src:typeof g=="function"?g(_variant):g})})})]})]})}function I(i={}){const{wrapper:t}={...d(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(y,{...i})}):y(i)}function p(i,t){throw new Error("Expected "+(t?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const f={src:new URL("sol-BcyEAi81.webp",import.meta.url).href,width:"944",height:"643"},b={src:new URL("secondarie-CA6BbNf4.svg",import.meta.url).href,width:"305.3333333333333",height:"248"},X={languageVersion:0,blocks:[{type:"start",id:"y=zq)Uya2A/{vyOtN[i6",x:61,y:81}]},P=[],T={blocks:X,variables:P},q=[{type:"start",message0:"inizia qui",nextStatement:null,colour:20,tooltip:"L'esecuzione inizia da qui",helpUrl:"",maxInstances:1,js:""},{type:"S",message0:"S",output:"Number",colour:20,tooltip:"altezza della colonna di sinistra da costruire",helpUrl:"",js:["hiddenState.S","ORDER_MEMBER"]},{type:"D",message0:"D",output:"Number",colour:20,tooltip:"altezza della colonna di destra da costruire",helpUrl:"",js:["hiddenState.D","ORDER_MEMBER"]},{type:"M",message0:"M",output:"Number",colour:20,tooltip:"numero di blocchetti nel set da costruzioni",helpUrl:"",js:["hiddenState.M","ORDER_MEMBER"]},{type:"altezza colonna destra",message0:"altezza colonna destra",output:"Number",colour:20,tooltip:"altezza corrente della colonna di destra",helpUrl:"",js:["hiddenState.pos[2]","ORDER_MEMBER"]},{type:"altezza colonna sinistra",message0:"altezza colonna sinistra",output:"Number",colour:20,tooltip:"altezza corrente della colonna di sinistra",helpUrl:"",js:["hiddenState.pos[0]","ORDER_MEMBER"]},{type:"impila blocchetto a destra",message0:"impila blocchetto %1 a destra",args0:[{type:"input_value",name:"LENGTH",value:0,check:"Number"}],previousStatement:null,nextStatement:null,colour:20,tooltip:"impila blocchetto alto i alla colonna di destra",helpUrl:"",js:`(function(i) {
  hiddenState.orient = 1;
  hiddenState.pos[1] = i;
  if (hiddenState.blocchi[i-1][0] !== 1)
    exit(false, "hai già usato il blocchetto " + i);
  hiddenState.rimasti -= 1;
  hiddenState.pos[3] = hiddenState.pos[2] + (i-4)/2;
  hiddenState.blocchi[i-1] = [2, hiddenState.pos[2]];
  hiddenState.pos[2] += i;
  if (hiddenState.pos[2] > hiddenState.D)
    exit(false, "la colonna di destra è troppo alta");
})(%0);`},{type:"impila blocchetto a sinistra",message0:"impila blocchetto %1 a sinistra",args0:[{type:"input_value",name:"LENGTH",value:0,check:"Number"}],previousStatement:null,nextStatement:null,colour:20,tooltip:"impila blocchetto alto i alla colonna di sinistra",helpUrl:"",js:`(function(i) {
  hiddenState.orient = 0;
  hiddenState.pos[1] = i;
  if (hiddenState.blocchi[i-1][0] !== 1)
    exit(false, "hai già usato il blocchetto " + i);
  hiddenState.rimasti -= 1;
  hiddenState.pos[3] = hiddenState.pos[0] + (i-4)/2;
  hiddenState.blocchi[i-1] = [0, hiddenState.pos[0]];
  hiddenState.pos[0] += i;
  if (hiddenState.pos[0] > hiddenState.S)
    exit(false, "la colonna di sinistra è troppo alta");
})(%0);`},{type:"termina",message0:"termina",previousStatement:null,colour:20,tooltip:"termina il procedimento",helpUrl:"",js:`if (hiddenState.pos[0] < hiddenState.S)
  exit(false, "la colonna di sinistra è troppo bassa");
if (hiddenState.pos[2] < hiddenState.D)
  exit(false, "la colonna di destra è troppo bassa");
exit(true, "hai costruito bene le colonne, complimenti!");`}],O=[{S:9,D:12,M:6,blocchi:[[1,0],[1,1],[1,2],[1,3],[1,4],[1,5]],pos:[0,0,0,0],rimasti:6,orient:1},{S:70,D:35,M:14,blocchi:[[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13]],pos:[0,0,0,0],rimasti:14,orient:1},{S:330,D:166,M:31,blocchi:[[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],[1,15],[1,16],[1,17],[1,18],[1,19],[1,20],[1,21],[1,22],[1,23],[1,24],[1,25],[1,26],[1,27],[1,28],[1,29],[1,30]],pos:[0,0,0,0],rimasti:31,orient:1}],V={src:new URL("bunny_left-Dj1cx2AU.svg",import.meta.url).href,width:"66",height:"116.23880597014924"},F={src:new URL("bunny-CYq1cKrR.svg",import.meta.url).href,width:"66",height:"116.23880597014924"},G={src:new URL("stairs1-o5lSxxA5.svg",import.meta.url).href,width:"80",height:"248"},Q={src:new URL("stairs2-CCv5sS6i.svg",import.meta.url).href,width:"80",height:"1370.6666666666665"},H={src:new URL("stairs3-DezRkm6d.svg",import.meta.url).href,width:"80",height:"6512"};function J({variables:i}){const{blocklyVariables:t,hiddenState:n}=i;if(!n)return;const o=[G,Q,H][n.M<=6?0:n.M<=14?1:2],l=[V,F],r=2,a=3,c=["#4093b0","#bf4eb4","#44c966","#4473c9","#c2a948","#7468c5","#9c5ebd","#7cc258","#a3b651","#40af91","#4473c9","#c2a948","#7468c5","#9c5ebd","#7cc258","#a3b651"];let w=0;for(let s=0;s<n.pos[1];++s)n.blocchi[s][0]===1&&(w+=1);let u=3-w*(a+1);return e.jsxs(e.Fragment,{children:[e.jsxs(A,{gravity:"bottom",scale:10,children:[e.jsx(m,{color:"#eeeeee",height:n.S*r,width:a+1,x:7,y:0},"L"),e.jsx(m,{color:"#eeeeee",height:n.D*r,width:a+1,x:23,y:0},"R"),e.jsx(M,{src:o,alt:"Scale",x:13.1,y:0}),e.jsx(m,{color:"#954520",height:1,width:(a+1)*n.M*2+a+17,x:7-(a+1)*n.M,y:n.pos[3]*r},"base"),e.jsx(M,{src:l[n.orient],alt:"Bunny",x:14,y:n.pos[3]*r,follow:!0}),C(n.M).map(s=>{let v=n.blocchi[s][0]*8+7.5,z=n.blocchi[s][1]*r;return n.blocchi[s][0]===1&&(s>=n.pos[1]&&u<23&&(u=23.5),u+=a+1,v=u,z=n.pos[3]*r+.5),e.jsx(m,{color:c[s%c.length],height:(s+1)*r,width:a,x:v,y:z,style:{paddingLeft:"2.5px",lineHeight:"16px"},className:"pl-0.5 leading-4",children:s+1},s)})]}),e.jsx(B,{variables:{sinistra:n.pos[0]+"/"+n.S,destra:n.pos[2]+"/"+n.D,blocchetti:n.rimasti+"/"+n.M,...t}})]})}function E(i){const t={li:"li",p:"p",span:"span",strong:"strong",ul:"ul",...d(),...i.components},{Blockly:n,Code:o,Explanation:l,Image:r,MathExpr:a,SubProblem:c}=t;return n||h("Blockly",!0),o||h("Code",!0),l||h("Explanation",!0),r||h("Image",!0),a||h("MathExpr",!0),c||h("SubProblem",!0),e.jsxs(c,{children:[e.jsxs(t.p,{children:[`Tip-Tap vuole costruire una nuova tettoia per la sua fattoria!
Come prima cosa, ha bisogno di costruire le due colonne portanti:
una a sinistra alta `,e.jsx(a,{children:String.raw`S`})," centimetri, e una a destra alta ",e.jsx(a,{children:String.raw`D`})," centimetri."]}),e.jsxs(t.p,{children:[`Per farlo intende impilare alcuni blocchetti presi da un set da costruzioni,
composto da un singolo blocchetto per ogni altezza possibile tra un minimo
di 1 centimetro e un massimo di `,e.jsx(a,{children:String.raw`M`}),` centimetri, e che in tutto arrivano
esattamente all’altezza totale delle due colonne. Ora può fare queste operazioni:`]}),e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(o,{code:String.raw`altezza colonna destra`,inline:!0,language:"text",noLineNumbers:!1}),": l’altezza corrente della colonna di destra."]}),`
`,e.jsxs(t.li,{children:[e.jsx(o,{code:String.raw`altezza colonna sinistra`,inline:!0,language:"text",noLineNumbers:!1}),": l’altezza corrente della colonna di sinistra."]}),`
`,e.jsxs(t.li,{children:[e.jsx(o,{code:String.raw`impila blocchetto i a destra`,inline:!0,language:"text",noLineNumbers:!1}),": aggiunge il blocchetto alto ",e.jsx(a,{children:String.raw`i`})," centimetri alla colonna di destra, se non l’ha già usato."]}),`
`,e.jsxs(t.li,{children:[e.jsx(o,{code:String.raw`impila blocchetto i a sinistra`,inline:!0,language:"text",noLineNumbers:!1}),": aggiunge il blocchetto alto ",e.jsx(a,{children:String.raw`i`})," centimetri alla colonna di sinistra, se non l’ha già usato."]}),`
`,e.jsxs(t.li,{children:[e.jsx(o,{code:String.raw`termina`,inline:!0,language:"text",noLineNumbers:!1}),": completa le colonne e costruisci la tettoia."]}),`
`]}),e.jsx(t.p,{children:"Aiuta Tip-Tap a completare la tettoia come previsto!"}),e.jsx(n,{customBlocks:q,initialBlocks:T,testcases:O,debug:{logBlocks:!1,logJs:!1,logVariables:!1},Visualizer:J}),e.jsxs(l,{children:[e.jsx(t.p,{children:"Un possibile programma corretto è il seguente:"}),e.jsx(t.p,{children:e.jsx(t.span,{className:"flex justify-center",children:e.jsx(r,{alt:"soluzione",src:typeof f=="function"?f(_variant):f})})}),e.jsx(t.p,{children:`Questo programma procede a selezionare i blocchetti dal più grande al più piccolo.
Per ogni blocchetto, prova prima se può metterlo nella colonna a sinistra.
Se non può, prova anche a destra prima di scartarlo definitivamente.`}),e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Approfondimento:"}),` Si può dimostrare che questo procedimento riesce sempre a costruire
le colonne. Per mostrarlo, consideriamo cosa succede quando vogliamo piazzare il
blocchetto alto `,e.jsxs(t.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(a,{children:String.raw`M`}),"."]}),` La più alta delle due colonne deve essere alta più della metà del
totale, ma `,e.jsx(a,{children:String.raw`M`})," è al massimo la metà del totale dei blocchetti da ",e.jsx(a,{children:String.raw`1`})," a ",e.jsxs(t.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(a,{children:String.raw`M`}),","]}),` quindi
posso sicuramente farlo stare in una delle due colonne. Mettendolo, abbiamo ridotto sia l’altezza
totale da costruire che l’altezza totale dei blocchetti di `,e.jsxs(t.span,{className:"inline-block whitespace-nowrap",children:[e.jsx(a,{children:String.raw`M`}),","]}),` quindi è ancora vero che
l’altezza totale dei blocchetti è uguale all’altezza totale delle colonne da costruire.`]}),e.jsx(t.p,{children:e.jsx(t.span,{className:"flex justify-center",children:e.jsx(r,{alt:"secondarie",src:typeof b=="function"?b(_variant):b})})})]})]})}function K(i={}){const{wrapper:t}={...d(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(E,{...i})}):E(i)}function h(i,t){throw new Error("Expected "+(t?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}function D(i){const t={em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{children:"Giochi di Fibonacci 2023/2024"}),`
`,e.jsx(t.h2,{children:"Fase II - Scuole secondarie"}),`
`,e.jsxs(t.p,{children:["Questa prova contiene ",e.jsx(t.em,{children:"6 domande"})," da risolvere in ",e.jsx(t.em,{children:"100 minuti"}),`.
Le domande sono a `,e.jsx(t.strong,{children:"scelta multipla"})," o a ",e.jsx(t.strong,{children:"blocchi"}),", e sono divise in due parti:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["domande di interpretazione di ",e.jsx(t.strong,{children:"procedimenti procedurali"})," come programmi a blocchi, e"]}),`
`,e.jsxs(t.li,{children:["domande di ",e.jsx(t.strong,{children:"programmazione"})," tramite blocchi."]}),`
`]}),`
`,e.jsxs(t.p,{children:[`In entrambe le parti, le domande sono ordinate per difficoltà crescente.
`,e.jsx(t.strong,{children:"Attento che la difficoltà è soggettiva!"})," Se stai passando tanto tempo cercando di risolvere una domanda, prova a passare ad altre domande e altre categorie!"]}),`
`,e.jsx(t.h2,{children:"Punteggio"}),`
`,e.jsxs(t.p,{children:["Tutte le domande a ",e.jsx(t.em,{children:"scelta multipla"})," hanno 5 opzioni, di cui ",e.jsx(t.strong,{children:"solo una"})," è corretta. Il punteggio che puoi ottenere è:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["5 punti per una risposta ",e.jsx(t.em,{children:"corretta"}),";"]}),`
`,e.jsxs(t.li,{children:["1 punto per una risposta ",e.jsx(t.em,{children:"non data"}),";"]}),`
`,e.jsxs(t.li,{children:["0 punti per una risposta ",e.jsx(t.em,{children:"sbagliata"}),"."]}),`
`]}),`
`,e.jsxs(t.p,{children:["Le domande a ",e.jsx(t.em,{children:"blocchi"}),` richiedono di scrivere un singolo programma a blocchi, che viene valutato su tre diversi livelli.
Per ciascuna domanda e per ciascun livello, Il punteggio che puoi ottenere è:`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["5 punti se il programma produce la risposta ",e.jsx(t.em,{children:"corretta"}),";"]}),`
`,e.jsxs(t.li,{children:["0 punti se il programma produce una risposta ",e.jsx(t.em,{children:"sbagliata"}),"."]}),`
`]}),`
`,e.jsx(t.p,{children:"Quindi ogni domanda a blocchi può valere fino a 15 punti in totale."})]})}function W(i={}){const{wrapper:t}={...d(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(D,{...i})}):D(i)}function R(i){const t={h2:"h2",...d(),...i.components},{Contest:n,Problem:o,Section:l}=t;return n||S("Contest",!0),o||S("Problem",!0),l||S("Section",!0),e.jsxs(n,{children:[e.jsx(t.h2,{children:"Sezione 1: procedimenti procedurali"}),e.jsxs(l,{children:[e.jsx(o,{points:[5,1,0],statement:k,id:1}),e.jsx(o,{points:[5,1,0],statement:_,id:2}),e.jsx(o,{points:[5,1,0],statement:I,id:3})]}),e.jsx(t.h2,{children:"Sezione 2: programmazione"}),e.jsxs(l,{children:[e.jsx(o,{points:[5,0,0],statement:U,id:4}),e.jsx(o,{points:[5,0,0],statement:$,id:5}),e.jsx(o,{points:[5,0,0],statement:K,id:6})]})]})}function Y(i={}){const{wrapper:t}={...d(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(R,{...i})}):R(i)}function S(i,t){throw new Error("Expected "+(t?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const Z="Giochi di Fibonacci 2023/2024 - Fase II - Scuole secondarie";function ee(){return e.jsxs(L,{questionCount:12,duration:100,children:[e.jsx(W,{}),e.jsx(Y,{})]})}document.title=Z;N(document.getElementById("app")).render(x.createElement(x.StrictMode,null,x.createElement(ee)));
//# sourceMappingURL=page-fibonacci-secondarie-2023-seconda-fase-CrDn-e2j.js.map