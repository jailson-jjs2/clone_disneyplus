document.addEventListener('DOMContentLoaded', function() {
  const buttons =  document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-questio]');

  const heroSection =  document.querySelector('.hero');
  const alturaHero = heroSection.clientHeight;

  window.addEventListener('scroll', function() {
    const posicaoAtutal = window.scrollY;

    if (posicaoAtutal < alturaHero) {
      hideHeader();
    } else {
      showHeader();
    }
  })
  
  //SEÇÃO DE ATRAÇOES, ABAS
  for (let i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener('click', function(botao) {
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

      escondeTodasAbas();
      aba.classList.add('shows__list--is-active');

      removeBotaoAtivo();
      botao.target.classList.add('shows__tabs__button--is-active');
      
    })
  }

  //SEÇÃO FAQ, ACORDION
  for (let i =0; i  < questions.length; i++) {
    questions[i].addEventListener('click', abreOuFecha);
  }

})

function hideHeader() {
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}
function showHeader() {
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');
}

function abreOuFecha(elemento) {
  const qAbreFecha = 'faq__questions__item--is--open';
  const elementoPai = elemento.target.parentNode;

  elementoPai.classList.toggle(qAbreFecha);
}

function removeBotaoAtivo() {
  const buttons =  document.querySelectorAll('[data-tab-button]');

  for (let i = 0; i < buttons.length; i ++) {
    buttons[i].classList.remove('shows__tabs__button--is-active')
  }  
}

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('shows__list--is-active');
  }
}