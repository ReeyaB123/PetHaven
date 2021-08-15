var buttons = document.querySelectorAll('.btn');
var cards = document.querySelectorAll('.item');
var changetext = document.querySelector(".change");
var searchBar = document.querySelector('input');
//Part 3
//to combine all the function for the buttons
buttons.forEach(function(button){
    button.addEventListener('click', function(){
        var btnClick = button.textContent.toLowerCase();
        if(btnClick == 'all'){
            cards.forEach(function(card){
                card.style.display = 'block';
            });
        }else{
          cards.forEach(function(card){
              if(card.classList.contains(btnClick)){
                card.style.display = 'block';
              }else{
                  card.style.display = 'none';
              }
          });
        }
    });
});

//buttons[0].addEventListener('click', function(){
  //cards.forEach(function (card){
      //card.style.display = 'block';
      //changetext.textContent = "membERs";
  //});
//});

//buttons[1].addEventListener('click', function(){
    //var btnClick = buttons[1].textContent.toLowerCase();
    //cards.forEach(function(card){
        //if (card.classList.contains("cat")){
            //card.style.display = 'block';
            //changetext.textContent = "Cat";

        //}else{
           // card.style.display = 'none';
        //}
    //})
//});

//buttons[2].addEventListener('click', function(){
    //var btnClick = buttons[2].textContent.toLowerCase();
    //cards.forEach(function(card){
       // if (card.classList.contains("dog")){
            //card.style.display = 'block';
           // changetext.textContent = "Dog";
       // }else{
            //card.style.display = 'none';
        //}
    //})
//});
//buttons[3].addEventListener('click', function(){
    //var btnClick = buttons[3].textContent.toLowerCase();
    //cards.forEach(function(card){
       // if (card.classList.contains("hamster")){
            //card.style.display = 'block';
           // changetext.textContent = "Hamster";
        //}else{
           // card.style.display = 'none';
       // }
   // })
//});
//buttons[4].addEventListener('click', function(){
    //var btnClick = buttons[4].textContent.toLowerCase();
    //cards.forEach(function(card){
        //if (card.classList.contains("others")){
           // card.style.display = 'block';
           // changetext.textContent = "Others";
       // }else{
          //  card.style.display = 'none';
      //  }
    //})
//});
//to change the size of the image when mouseover/mouseout
var imageall = document.querySelectorAll(".card-img-top")
imageall.forEach(function(element){
    element.addEventListener("mouseover", function(){
        element.style.width = "100%";
        element.style.height = "70%";
    });
});
imageall.forEach(function(element){
    element.addEventListener("mouseout", function(){
        element.style.width = "100%";
        element.style.height = "55%"
    });
});
//Part 4
//to get the value of the search bar
searchBar.addEventListener('keyup', function(event){
   var userInput = event.target.value.toLowerCase().trim();
   cards.forEach(function(card){
    if(card.textContent.toLowerCase().trim().includes(userInput)){
        card.style.display = 'block';
   }else{
    card.style.display = 'none';
   }
    });
});


//console.log(cards[0].textContent.toLowerCase().trim());
