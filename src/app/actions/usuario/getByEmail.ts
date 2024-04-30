export async function getByEmail(email: string) {
    
    const resp = await fetch(`${process.env.API_BASE_URL}/usuario/${email}`)

    if(resp.ok) {
        return await resp.json()
   }

   if (!resp.ok) {
        throw new Error("Erro ao buscar o cadastro de acordo com o email informado.")
   }

}