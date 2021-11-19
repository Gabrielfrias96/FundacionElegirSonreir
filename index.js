let btnDonar = document.getElementById(`btn-donar`)
let boxModal = document.querySelector(`.box-donar`)
let btnClose = document.querySelector(`.close`)


const openModal = ()=> {
    boxModal.classList.toggle(`modal-active`)
}

const closeModal = ()=>{
    boxModal.classList.toggle(`modal-active`)
}

btnDonar.addEventListener(`click`, openModal);
btnClose.addEventListener(`click`, closeModal);


function count(){
    var counter = { var: 0 };
    TweenMax.to(counter, 3, {
      var: 100, 
      onUpdate: function () {
        var number = Math.ceil(counter.var);
        $('.counter').html(number);
        if(number === counter.var){ count.kill(); }
      },
      onComplete: function(){
        count();
      },    
      ease:Circ.easeOut
    });
  }
  
  count();