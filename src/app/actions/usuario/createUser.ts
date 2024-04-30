"use server"

export async function createUser(data: Usuario) {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      const resp = await fetch(`${process.env.API_BASE_URL}/usuario/cadastro`, options);
  
      if (resp.ok) {
        const result = await resp.json(); // Obtenha dados da resposta, se houver
        return { success: true, status: resp.status, result }; // Retorna sucesso com dados adicionais
      }
  
      if (resp.status === 400) {
        const errorMessage = await resp.text(); // Obtenha a mensagem de erro
        return { success: false, status: resp.status, message: errorMessage }; // Retorna detalhes do erro
      }
  
      return { success: false, status: resp.status, message: "Erro ao criar o usuário." };
    } catch (error) {
      return { success: false, status: 500, message: "Erro ao conectar ao servidor." }; // Captura erros inesperados
    }
  }
  