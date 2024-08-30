export function doLogin(email,password){
    return new Promise((response, reject) =>{
        if(email === 'contato@eu.com' && password === '123'){
            response(true);
        }
        reject(`Email ou senha inválido`);
    })
  
}

export function doLogout(){

}