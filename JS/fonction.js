// Récuperation de la station de départ //

function reserveVelo(i){
    const id = i;
    localStorage.setItem('Départ', request.response[i]._id);
    document.location.reload();
    console.log(request.response[i]);
    
}

// Récuperation de la station d'arrivé  //
function reservePlace(i){
    localStorage.setItem('Arrive',request.response[i]._id)
    document.location.reload();
    console.log(request.response[i]);
}

// fonction btn reservation  //
function startReserved(){
    let statingMinute =1; //mettre 30 pour 30 minutes
    let time= statingMinute*2; // mettre 60 a la place de 2
    const countDownel = document.getElementById('timer');
    setInterval(updateCountDown,1000);
    function updateCountDown(){
        const minutes = Math.floor(time/60)
        let seconds =time %60;
        seconds= seconds < 10 ? '0' + seconds : seconds;
        countDownel.style.fontSize="1.3em"
        countDownel.innerHTML=`Votre reservation prendra fin dans : ${minutes} min ${seconds} secondes`;
        time--;
        if (time < 0) {
            countDownel.style.fontSize="2em"
            countDownel.style.fontWeight="600"
            countDownel.style.color="red"
            countDownel.innerHTML = 'RESERVATION EXPIREE';
        }
    }
}

// fonction Controlle d'utilisation
(function(){
    let dStore =localStorage.getItem('Départ');
    let aStore = localStorage.getItem('Arrive');
    if(dStore !=null || aStore !=null){
        popp.style.display='none';
    }
})()

//function pop up connexion

function connect(){
    let bouton =document.getElementById('btn_connexion');
    bouton.addEventListener('click',connect);
    const inputEmailValue= document.getElementById('inputEmail').value;
    const inputPassValue= document.getElementById('inputPass').value;
    
    const userlight ={
        email:inputEmailValue,//"jerem45",
        password:inputPassValue//"1234"
    };      
    fetch('http://localhost:3000/api/user/login',{
        method:"POST",
        body:JSON.stringify(userlight),
        headers:{
            'Content-Type':'application/json',
        }
   })
    .then(async(response)=>{ 
        try{
            if(response.ok ==true){
                //console.log(response.ok);
                const obj = await response.json();
                //console.log(obj.userId);
                popp.style.display='none';
            }

        }catch(err){
                console.log(err.message)
        } 
   })
}

