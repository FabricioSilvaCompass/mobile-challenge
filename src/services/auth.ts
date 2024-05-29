interface Response {
  token: object;
}

export function login(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: {
          name: 'Thiago',
          email: 'thiagomarinho@rockeseat.com.br',
        },
      });
    }, 2000);
  });
}

async function fazerPostFetch(dadosUsuario: {
  userid: string;
  password: string;
  fullname: string;
  birthdate: string;
}) {
  const urlAPI = 'https://sua-api.com/usuarios';
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosUsuario),
    };

    const response = await fetch(urlAPI, options);
    const data = await response.json();

    console.log('Requisição POST enviada com sucesso!');
    console.log(data);
  } catch (error) {
    console.error('Falha ao enviar requisição POST:', error);
  }
}

// // Exemplo de uso
// const dadosUsuario = {
//   userid: 'user@example.com',
//   password: 'senha123',
//   fullname: 'Fulano da Silva',
//   birthdate: '2023-09-22',
// };

// const urlAPI = 'https://sua-api.com/usuarios';

// fazerPostFetch(dadosUsuario);
