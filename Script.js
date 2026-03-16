// Selecionamos todos os containers de fotos
const containers = document.querySelectorAll('.container-foto');

containers.forEach(container => {
  container.addEventListener('click', function() {
    // Busca a box de texto que está DENTRO deste container clicado
    const box = this.querySelector('.box-texto');
    
    // Alterna a classe 'ativo' (se estiver visível, esconde; se não, mostra)
    box.classList.toggle('ativo');
  });
});