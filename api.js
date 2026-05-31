// =====================================================
// api.js - Consumo de dados da API
// =====================================================

const API_BASE = "https://jsonplaceholder.typicode.com";

/**
 * Busca todos os usuários da API
 * @returns {Promise<Array>} Array de usuários
 */
async function fetchUsers() {
  try {
    const res = await fetch(`${API_BASE}/users`);
    if (!res.ok) throw new Error("Erro ao buscar usuários");
    return await res.json();
  } catch (erro) {
    console.error("Erro na requisição de usuários:", erro);
    return [];
  }
}

/**
 * Busca todos os posts da API
 * @returns {Promise<Array>} Array de posts
 */
async function fetchPosts() {
  try {
    const res = await fetch(`${API_BASE}/posts`);
    if (!res.ok) throw new Error("Erro ao buscar posts");
    return await res.json();
  } catch (erro) {
    console.error("Erro na requisição de posts:", erro);
    return [];
  }
}

/**
 * Busca um usuário específico por ID
 * @param {number} userId - ID do usuário
 * @returns {Promise<Object>} Objeto do usuário
 */
async function fetchUserById(userId) {
  try {
    const res = await fetch(`${API_BASE}/users/${userId}`);
    if (!res.ok) throw new Error("Usuário não encontrado");
    return await res.json();
  } catch (erro) {
    console.error("Erro ao buscar usuário:", erro);
    return null;
  }
}

/**
 * Busca posts de um usuário específico
 * @param {number} userId - ID do usuário
 * @returns {Promise<Array>} Array de posts do usuário
 */
async function fetchPostsByUser(userId) {
  try {
    const res = await fetch(`${API_BASE}/posts?userId=${userId}`);
    if (!res.ok) throw new Error("Erro ao buscar posts do usuário");
    return await res.json();
  } catch (erro) {
    console.error("Erro na requisição:", erro);
    return [];
  }
}

/**
 * Valida se um email pertence a um usuário
 * @param {string} email - Email a validar
 * @returns {Promise<Object|null>} Usuário encontrado ou null
 */
async function validarEmailUsuario(email) {
  try {
    const usuarios = await fetchUsers();
    return usuarios.find(user => user.email === email) || null;
  } catch (erro) {
    console.error("Erro ao validar email:", erro);
    return null;
  }
}
