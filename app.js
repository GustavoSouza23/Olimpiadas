// console.log(dados); // Linha comentada, provavelmente usada para depuração

function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  console.log(campoPesquisa);

  // se campoPesquisa for uma string sem nada
  if (campoPesquisa == "") {
    section.innerHTML =
      "<p>Nada foi encontrado. Você precisa digitar o nome do atleta ou esporte</p>";
    return;
  }

  // deixando o campo de pesquisa so com letras minusculas
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    //Se titulo include  campoPesquisa
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Cria um novo elemento
      // Cria uma nova div para cada resultado
      resultados += `<div class="item-resultado">
    <h2>
      <a href="#" target="_blank">${dado.titulo}</a>
    </h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href="${dado.link}" target="_blank">Mais informações</a>
  </div>`;
    }

    
  }
  if (!resultados) {
    resultados = "<p>nada foi encontrado</P>";
  }

  // Atualiza o conteúdo HTML da seção com os resultados
section.innerHTML = resultados;
}


