"use server"

export async function getLogin(email:string, senha:string) {
    try {
      const resp = await fetch(`${process.env.API_BASE_URL}/${email}/${senha}`);
  
      if (resp.ok) {
        const result = await resp.json(); 
        return { success: true, status: resp.status, result }; 
      }
  
      if (resp.status === 400) {
        const errorMessage = await resp.text(); 
        return { success: false, status: resp.status, message: errorMessage }; 
      }
  
      return { success: false, status: resp.status, message: "Erro ao criar o usuário." };
    } catch (error) {
      return { success: false, status: 500, message: "Erro ao conectar ao servidor." }; 
    }
  }