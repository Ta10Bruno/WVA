
if(window.Swiper){
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
      autoplay: {
      delay: 3000,
    },
  });
}
/*Slider*/




  function tooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]')
    console.log(tooltips)

    tooltips.forEach((item) =>{
      item.addEventListener('mouseover',onMouseOver)
    })

  

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    const onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
      }
    }

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + -50 + 'px';
      this.tooltipBox.style.left = event.pageX + 10 + 'px';
    }
  }

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

}
  tooltip()

/*Animação*/
if(window.SimpleAnime){
  new SimpleAnime();
}
/*Menu Mobile*/

const btnMobile = document.getElementById('btn-mobile')

function toogleMenu(){

  const nav=document.getElementById('nav');
  nav.classList.toggle('active')

}

btnMobile.addEventListener('click',toogleMenu)


/*Modal*/
function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]'); 
  
  if(botaoAbrir && botaoFechar && containerModal) {
    
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }
    function cliqueForaModal(event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }
  
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}


initModal()

function initModal1(){
  const botaoAbrir1 = document.querySelector('[data-modal1="abrir1"]');
  const botaoFechar1 = document.querySelector('[data-modal1="fechar1"]');
  const containerModal1 = document.querySelector('[data-modal1="container1"]');

  if(botaoAbrir1 && botaoFechar1 && containerModal1) {
    
    function toggleModal(event) {
      event.preventDefault();
      containerModal1.classList.toggle('ativo');
    }
    function cliqueForaModal(event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }
    botaoAbrir1.addEventListener('click', toggleModal);
    botaoFechar1.addEventListener('click', toggleModal);
    containerModal1.addEventListener('click', cliqueForaModal);

}}

initModal1()

function initModal2() {
  const botaoAbrir2 = document.querySelector('[data-modal2="abrir2"]');
  const botaoFechar2 = document.querySelector('[data-modal2="fechar2"]');
  const containerModal2 = document.querySelector('[data-modal2="container2"]');
  
  if(botaoAbrir2 && botaoFechar2 && containerModal2) {
    
    function toggleModal(event) {
      event.preventDefault();
      containerModal2.classList.toggle('ativo');
    }
    function cliqueForaModal(event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }
  
    botaoAbrir2.addEventListener('click', toggleModal);
    botaoFechar2.addEventListener('click', toggleModal);
    containerModal2.addEventListener('click', cliqueForaModal);
  }
}


initModal2()

function initModal3(){
  const botaoAbrir3 = document.querySelector('[data-modal3="abrir3"]');
  const botaoFechar3 = document.querySelector('[data-modal3="fechar3"]');
  const containerModal3 = document.querySelector('[data-modal3="container3"]');

  if(botaoAbrir3 && botaoFechar3 && containerModal3) {
    
    function toggleModal(event) {
      event.preventDefault();
      containerModal3.classList.toggle('ativo');
    }
    function cliqueForaModal(event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }
    botaoAbrir3.addEventListener('click', toggleModal);
    botaoFechar3.addEventListener('click', toggleModal);
    containerModal3.addEventListener('click', cliqueForaModal);

}}

initModal3()

function initModal4(){
  const botaoAbrir4 = document.querySelector('[data-modal4="abrir4"]');
  const botaoFechar4 = document.querySelector('[data-modal4="fechar4"]');
  const containerModal4 = document.querySelector('[data-modal4="container4"]');

  if(botaoAbrir4 && botaoFechar4 && containerModal4) {
    
    function toggleModal(event) {
      event.preventDefault();
      containerModal4.classList.toggle('ativo');
    }
    function cliqueForaModal(event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }
    botaoAbrir4.addEventListener('click', toggleModal);
    botaoFechar4.addEventListener('click', toggleModal);
    containerModal4.addEventListener('click', cliqueForaModal);

}}

initModal4()

function initModal5() {
  const botaoAbrir5 = document.querySelector('[data-modal5="abrir5"]');
  const botaoFechar5 = document.querySelector('[data-modal5="fechar5"]');
  const containerModal5 = document.querySelector('[data-modal5="container5"]');
  
  if(botaoAbrir5 && botaoFechar5 && containerModal5) {
    
    function toggleModal(event) {
      event.preventDefault();
      containerModal5.classList.toggle('ativo');
    }
    function cliqueForaModal(event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }
  
    botaoAbrir5.addEventListener('click', toggleModal);
    botaoFechar5.addEventListener('click', toggleModal);
    containerModal5.addEventListener('click', cliqueForaModal);
  }
}


initModal5()

function initModal6(){
  const botaoAbrir6 = document.querySelector('[data-modal6="abrir6"]');
  const botaoFechar6 = document.querySelector('[data-modal6="fechar6"]');
  const containerModal6 = document.querySelector('[data-modal6="container6"]');

  if(botaoAbrir6 && botaoFechar6 && containerModal6) {
    
    function toggleModal(event) {
      event.preventDefault();
      containerModal6.classList.toggle('ativo');
    }
    function cliqueForaModal(event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }
    botaoAbrir6.addEventListener('click', toggleModal);
    botaoFechar6.addEventListener('click', toggleModal);
    containerModal6.addEventListener('click', cliqueForaModal);

}}

initModal6()


