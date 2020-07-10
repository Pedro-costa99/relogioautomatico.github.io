function carregar (){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date ()
    var hora = data.getHours ()
    
    
    if (hora >= 0 && hora <= 12){
        //BOM DIA]
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        img.src = 'fotomanha.png'
        document.body.style.background = '#9E4770'
    } else if (hora > 12 && hora <= 18){
        //BOA TARDE
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        img.scr = 'fototarde.png'
        document.body.style.background = '#959097'
    } else {
        //BOA NOITE
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        img.scr = 'fotonoite.png'
        document.body.style.background = '#3B333F'
    }

}

