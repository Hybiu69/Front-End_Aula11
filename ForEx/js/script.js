function usandoFor(){
    const imputNum=document.getElementById('numerovezes');

    const num=parseInt(imputNum.value);

    for(let i=0;i<num;i++){
        const h1=document.createElement("h1");
        h1.textContent="MI ME MA MO MU";
        document.body.appendChild(h1);

    }
    imputNum.value="";
}

const frutas=['maça','banana','laranja'];
const lista=document.getElementById('listaF');
frutas.forEach((fruta,indice)=>{
    console.log(`${indice}:$[fruta]`);
    const item=document.createElement('li');
    item.textContent=`${indice+1}-${fruta}`;
    lista.appendChild(item);
})



function geraSqua(){
    const forit=document.getElementById('numquad');

    const num1=parseInt(forit.value);
    console.log(num1)
    for(let i=0;i<num1;i++){
        const quadrado=document.createElement("div");
        quadrado.classList.add("quadrad");
        document.body.appendChild(quadrado);
    }
}

const nomes=['Ana','João','Carlos'];
const greatings=document.getElementById('greatings');
nomes.forEach((nome)=>{
    const item=document.createElement('li');
    item.textContent=`Olá,${nome}! Seja bem-vinda(o)!`;
    greatings.appendChild(item);
})

const numeros=[1,4,7,10,13,16];
let quant=0;
function par(){
    const quantp = document.getElementById("quantp");

    numeros.forEach((numero)=>{
    if(numero % 2 === 0){
        quant++;
        }
    });
    quantp.textContent=(quant);
}