//  const box = document.querySelector('.box');


// const h1 = document.createElement('h1');
// h1.innerText = 'We love js'
// h1.classList.add('display-1')
// h1.style.fontWeight = '500';
// h1.style.fontFamily = 'impact'
// h1.style.color = 'red';
// console.log(h1)
// box.appendChild(h1)


//  const a = document.createElement('a');
//  a.innerHTML = ' i love js'
//  a.style.fontSize = '50px'
//  a.classList.add('btn');
//  a.classList.add('btn-warning');
//  console.log(a);
//  box.appendChild(a);



//  const p = document.createElement('p');
//  p.innerHTML = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores sed fugit atque voluptatum ratione inventore est provident dolorum soluta rerum officiis sequi facere libero similique maxime et commodi, accusamus fuga! Molestias repudiandae error, voluptates incidunt eos repellendus placeat. Nihil, aliquid? Qui ducimus esse mollitia adipisci aperiam nisi inventore eligendi?'
//  console.log(p);
//  box.appendChild(p);


//  const h2 = document.createElement('h2');
//  h2.innerText = 'i am a js lover';
//  h2.style.color = 'blue'
//  console.log(h2);
//  box.append(h2);

//  box.insertBefore(h2,p)




//  const p1 = document.createElement('p1');
//  const text = document.createTextNode('my love sharmin');
//  console.log(p1);
//  p1.append(text);
//  box.append(p1);
 




// const sign_up = document.getElementById('sign_up');
// const msg = document.querySelector('#msg');
// const button = document.querySelector('.button');
// const ami = document.querySelector('#ami');
// button.addEventListener('click',function(){

   
// //   setTimeout(function(){
// //       ami.innerHTML =  `<p class = " alert alert-danger">Apple orrange</p>`
// //   },2000);

//  setInterval(function(){
//     msg.innerHTML =  `<p class = " alert alert-danger">Apple orrange<button class = "colse" data-dismiss=" alert">&times;</button> </p>`
//  },2000);

// })

// sign_up.addEventListener('submit',function(e){
//     e.preventDefault();


   





//     let gender = document.querySelector('input[type = "radio"]:checked');
//     let skill = document.querySelectorAll('input[type = "checkbox"]');
//     for(i = 0 ; i < skill.length ;i++){
//         console.log(skill[i].value);
//     }

//     let name = sign_up.querySelector('input[placeholder ="Name"]').value;
//     let email = sign_up.querySelector('input[placeholder = "Email"]');

//     let location = sign_up.querySelector('select');

//     if(name.value == '' || email.value == '' || location.value == ''){
//        msg.innerHTML = validate('all fields are required !') 

//     }else{
//         msg.innerHTML = '<p class = "alert alert-success">Data Stable *</p>'
//     }
     
//     setTimeout(function(){
//         msg.innerHTML = ``;
//     },3000);





  

// })



const clock = document.querySelector('.clock');
const name = document.querySelector('#name');
clock.style.backgroundColor = '#262d41';
clock.style.color = '#fff';
clock.style.borderRadius = '50px';
clock.style.paddingTop = '150px' ;
clock.style.paddingBottom = '155px';
clock.style.paddingLeft = '40px' ;
clock.style.paddingRight = '5px' ;
clock.style.display = 'inline-block' ;
clock.style.fontFamily = 'italic'









setInterval(function(){
    let date = new Date();
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    let ampm = h > 12 ? 'PM' : 'AM';
    let timeout = h > 12 ? h-12 : h;

    let hour = '';
    if(h == 0){
        hour = 12;
    }else if(h > 0 &&  h <=12){
        hour = h;
    }else{
        hour = h-12;
    }


    let second = '';
    if(s < 10){
        second = '0'+s
    }else{
        second = s;
    }

    
   


  clock.innerHTML = `${timeout}:${m}:${second} ${ampm}`

},1000)
