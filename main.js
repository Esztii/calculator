document.getElementById('icon').addEventListener('click', () => {
    document.getElementById('calculator').classList.add('visible')
    window.addEventListener('keydown', (e) => {
        console.log("asd")
        handleKeydown(e)
    } )
} )

document.getElementById('x').addEventListener('click', () => {
    document.getElementById('calculator').classList.remove('visible')
    document.removeEventListener('keydown', handleKeydown )

})


function handleKeydown(e){
    switch(e.key){
        case "0": fireclick("nulla"); break;
        case "1" : fireclick("egy");break;
        case "2" : fireclick("ketto");break;
        case "3" : fireclick("harom");break;
        case "4" : fireclick("negy");break;
        case "5" : fireclick("ot");break;
        case "6" : fireclick("hat");break;
        case "7" : fireclick("het");break;
        case "8" : fireclick("nyolc");break;
        case "9" : fireclick("kilenc");break;
        case "+-" : fireclick("pluszminusz");break;
        case "C" : fireclick("C");break;
        case "CE" : fireclick("CE");break;
        case "*" : fireclick("hatvany");break;
        case "/" : fireclick("osztas");break;
        case "x" : fireclick("szorzas");break;
        case "-" : fireclick("kivonas");break;
        case "+" : fireclick("osszeadas");break;
        case "." : fireclick("pont");break;
        case "=" : fireclick("egyenlo");break;
    }
}


megjelen = document.getElementById('calcul');
elozmeny = document.getElementById('muveletElozmeny')

nullaAlapszam = "0";
noneAlapszam = "";


function alapszamUpdate(){
    megjelen.innerText = nullaAlapszam;
    elomeny.innerText = noneAlapszam;
} 

function btnSzam(szamString){
    megjelen += szamString;
    megjelen = parseFloat(megjelen);
    alapszamUpdate();
}

function btnMuvelet(muveletString){
    megjelen = parseFloat(megjelen);
    noneAlapszam += `${megjelen} ${muveletString}`;
    alapszamUpdate();
    megjelen = "0";
}

function btnPont(){
    megjelen += '.';
    alapszamUpdate()
}

function btnTorles(){
    megjelen = "0";
    noneAlapszam = "";
    alapszamUpdate();
}

function btnVisszaTorles(){
    megjelen = "0";
    alapszamUpdate();
}

function btnHatvanyozas(){
    megjelen = parseFloat(megjelen) ** 2;
    alapszamUpdate();
}

function btnPluszminusz(){
    megjelen = parseFloat(megjelen) * -1;
    alapszamUpdate();
}

function btnEgyenlo (){
    megjelen = eval(noneAlapszam + megjelen);
    noneAlapszam = "";
    alapszamUpdate();
}



function fireclick(buttonId){ 
    button = document.getElementById(buttonId);
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 200) 
}

