// =====================================================
// banner.js - Gerenciamento de banner e navegação
// =====================================================

/**
 * Inicializa o banner com informações do usuário
 * @param {Object} usuario - Dados do usuário logado
 */
function inicializarBanner(usuario) {
  const banner = document.getElementById("banner");
  if (!banner) return;

  banner.innerHTML = `
    <div class="banner-conteudo">
      <div class="banner-info">
        <h1>🎬 Agendador de Filmes</h1>
        <p>Bem-vindo, <strong>${usuario.name}</strong>!</p>
        <small>Email: ${usuario.email}</small>
      </div>
      <div class="banner-acoes">
        <button id="btn-logout" class="btn-logout">Fazer Logout</button>
      </div>
    </div>
  `;

  document.getElementById("btn-logout").addEventListener("click", realizarLogout);
}

/**
 * Atualiza o banner com mensagens dinâmicas
 * @param {string} mensagem - Mensagem a exibir
 * @param {string} tipo - Tipo de mensagem (sucesso, erro, info)
 */
function atualizarBanner(mensagem, tipo = "info") {
  const banner = document.getElementById("banner");
  if (!banner) return;

  const classeNotificacao = `notificacao-${tipo}`;
  const notificacao = document.createElement("div");
  notificacao.className = `banner-notificacao ${classeNotificacao}`;
  notificacao.textContent = mensagem;

  banner.appendChild(notificacao);

  // Remover notificação após 3 segundos
  setTimeout(() => {
    notificacao.remove();
  }, 3000);
}

/**
 * Cria um breadcrumb de navegação
 * @param {Array<{label: string, ativo: boolean}>} itens - Itens do breadcrumb
 */
function criarBreadcrumb(itens) {
  const nav = document.getElementById("breadcrumb");
  if (!nav) return;

  nav.innerHTML = "";
  itens.forEach((item, index) => {
    const span = document.createElement("span");
    span.className = item.ativo ? "breadcrumb-ativo" : "";
    span.textContent = item.label;

    nav.appendChild(span);

    if (index < itens.length - 1) {
      const separador = document.createElement("span");
      separador.textContent = " > ";
      separador.style.margin = "0 5px";
      nav.appendChild(separador);
    }
  });
}

/**
 * Mostra um indicador de carregamento no banner
 */
function mostrarCarregamento() {
  const banner = document.getElementById("banner");
  if (!banner) return;

  const loader = document.createElement("div");
  loader.className = "banner-loader";
  loader.innerHTML = `
    <div class="spinner"></div>
    <p>Carregando...</p>
  `;

  banner.appendChild(loader);
  return loader;
}

/**
 * Remove o indicador de carregamento
 */
function ocultarCarregamento() {
  const loader = document.querySelector(".banner-loader");
  if (loader) {
    loader.remove();
  }
}
