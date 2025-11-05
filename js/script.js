const botoes = document.querySelectorAll('.quero-btn');

botoes.forEach(botao => {
    botao.addEventListener('click', () => 
       {alert('Livro adicionado à sua lista!');
    });
});
