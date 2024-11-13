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

    }
}


function fireclick(buttonId){ 
    button = document.getElementById(buttonId);
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 200) 
}

