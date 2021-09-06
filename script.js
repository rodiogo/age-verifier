function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.querySelector('input#txtano');
    let res = document.querySelector('div#res');
    if(fano.value.length == 0 || fano.value > ano) {
        windown.alert('Erro')
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                //kid
                img.setAttribute('src', 'bebe-m.png')
            } else if(idade < 21) {
                //teen
                img.setAttribute('src', 'jovem-m.png')
            } else if(idade <50)  {
                //adult
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //old
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //kid
                img.setAttribute('src', 'bebe-f.png')
            } else if(idade < 21) {
                //teen
                img.setAttribute('src', 'jovem-f.png')
            } else if(idade <50)  {
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //old
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}