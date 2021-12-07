const btn1=document.getElementById('btn-1');
const btn2=document.getElementById('btn-2'); //true
const btn3=document.getElementById('btn-3'); //true
const aviso = document.querySelector('.aviso');
const felicitacion = document.querySelector('.felicitacion');

btn1.addEventListener("change", validaCheckbox, false);
btn2.addEventListener("change", validaCheckbox, false);
btn3.addEventListener("change", validaCheckbox, false);

let cont=0;

function validaCheckbox(){
    if(btn1.checked || btn2.checked || btn3.checked){
        cont+=1;
    }else{
        if(!btn1.checked || !btn2.checked || !btn3.checked){
            cont-=1;
        }
    }

    if(cont == 2){
        if(btn2.checked && btn3.checked){
            felicitacion.style.display="flex";
        }else{
            aviso.style.display="flex";
        }
    }
}