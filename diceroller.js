var para;
var rannum;


dobas=0


function clickevent(){
document.getElementById("button").disabled = false;
document.getElementById('new').style.visibility = 'hidden';
document.getElementById('elso').style.visibility = 'hidden';
document.getElementById('masodik').style.visibility = 'hidden';
document.getElementById('harmadik').style.visibility = 'hidden';
document.getElementById('negyedik').style.visibility = 'hidden';
document.getElementById('otodik').style.visibility = 'hidden';

dobas=dobas+1
rannum = Math.floor(Math.random() * 6) + 1;
para = document.getElementById("placeholder");



if(rannum==1){
    document.getElementById("myImg").src = "dice-svgrepo-com.svg";
}
if(rannum==2){
    document.getElementById("myImg").src = "dice-svgrepo-com (2).svg";
}
if(rannum==3){
    document.getElementById("myImg").src = "dice-svgrepo-com (1).svg";
}
if(rannum==4){
    document.getElementById("myImg").src = "dice-svgrepo-com (5).svg";
}
if(rannum==5){
    document.getElementById("myImg").src = "dice-svgrepo-com (4).svg";
}
if(rannum==6){
    document.getElementById("myImg").src = "dice-svgrepo-com (3).svg";
}
roll.innerHTML="Ez az "+dobas+". dobás."

if (dobas==1){
    elso.innerHTML=rannum
}

if (dobas==2){
    masodik.innerHTML=rannum
}

if (dobas==3){
    harmadik.innerHTML=rannum
}

if (dobas==4){
    negyedik.innerHTML=rannum

}

if (dobas==5){
    otodik.innerHTML=rannum
}


if(dobas==5){
    document.getElementById("button").disabled = true;
    document.getElementById('new').style.visibility = 'visible';
    document.getElementById('elso').style.visibility = 'visible';
    document.getElementById('masodik').style.visibility = 'visible';
    document.getElementById('harmadik').style.visibility = 'visible';
    document.getElementById('negyedik').style.visibility = 'visible';
    document.getElementById('otodik').style.visibility = 'visible';
    dobas=0
}


}
    






    






