let stars= document.getElementById('stars');
let moon= document.getElementById('moon');
let m3= document.getElementById('m3');
let m4= document.getElementById('m4');
let river= document.getElementById('river');
let boat= document.getElementById('boat');
let genius= document.querySelector('.genius');

window.onscroll=function() {
    let value=scrollY;
    stars.style.left=value+'px';
    moon.style.top = value * 4 +'px';
    m3.style.top = value * 1.3 +'px';
    m4.style.top = value * 1 +'px';
    river.style.top = value +'px';
    boat.style.top = value +'px';
    boat.style.left = value*2 +'px';
    genius.style.fontSize = value +'px';
    if(scrollY >=67){

        genius.style.fontSize = 67 +'px';
        genius.style.position = 'fixed';
        if(scrollY >= 502){

            genius.style.display = 'none';

        }else{
            genius.style.display = 'block';

        }
        if(scrollY >=136){
            document.querySelector('.main').style.background='linear-gradient(#6f52a0 ,#10001f)';
        }else{
            document.querySelector('.main').style.background='linear-gradient(#200016 ,#10001f)';
        }

    }

}