const toastEl = document.getElementById("alerta");
const toast = new bootstrap.Toast(toastEl);

const regist = document.getElementById("cadastro");

regist.onsubmit = (event) => {
    event.preventDefault();

    // Pegando ids dos campos do formulário
    const nome = document.getElementById("nome");
    const dtnasc = document.getElementById("dtnasc");
    const genero = document.getElementById("genero");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const pass = document.getElementById("pswd");
    const cep = document.getElementById("cep");
    const rua = document.getElementById("rua");
    const numero = document.getElementById("num");
    const bairro = document.getElementById("bairro");
    const cidade = document.getElementById("cidade");
    const uf = document.getElementById("estado");
    const profissao = document.getElementById("profissao");
    const renda = document.getElementById("renda");

    const dados = {
        nome: nome.value,
        dtnasc: dtnasc.value,
        cpf: cpf.value,
        pswd: pass.value,
        genero: genero.value,

        contato: {
            telefone: telefone.value,
            email: email.value
        },
        endereco: {
            cep: cep.value,
            rua: rua.value,
            numero: numero.value,
            bairro: bairro.value,
            cidade: cidade.value,
            uf: uf.value
        },
        monetario: {
            profissao: profissao.value,
            renda: renda.value
        }
    };

    console.log(dados);
    toast.show();
    setTimeout(() => {
        toast.hide();
        //window.location.href = "clientes.html";
    }, 3000);
};

// regist.onsubmit = function save() {
//     //event.preventDefault();

//     // Pegando ids dos campos do formulário
//     const nome = document.getElementById("nome");
//     const dtnasc = document.getElementById("dtnasc");
//     const genero = document.getElementById("genero");
//     const email = document.getElementById("email");
//     const cpf = document.getElementById("cpf");
//     const telefone = document.getElementById("telefone");
//     const pass = document.getElementById("pswd");
//     const cep = document.getElementById("cep");
//     const rua = document.getElementById("rua");
//     const numero = document.getElementById("num");
//     const bairro = document.getElementById("bairro");
//     const cidade = document.getElementById("cidade");
//     const uf = document.getElementById("estado");
//     const profissao = document.getElementById("profissao");
//     const renda = document.getElementById("renda");

//     const dados = {
//         nome: nome.value,
//         dtnasc: dtnasc.value,
//         cpf: cpf.value,
//         pswd: pass.value,
//         genero: genero.value,

//         contato: {
//             telefone: telefone.value,
//             email: email.value
//         },
//         endereco: {
//             cep: cep.value,
//             rua: rua.value,
//             numero: numero.value,
//             bairro: bairro.value,
//             cidade: cidade.value,
//             uf: uf.value
//         },
//         monetario: {
//             profissao: profissao.value,
//             renda: renda.value
//         }
//     };

//     console.log(dados);
//     toast.show();
//     setTimeout(() => {
//         toast.hide();
//         //window.location.href = "clientes.html";
//     }, 3000);
// };