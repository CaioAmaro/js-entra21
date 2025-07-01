const listaAlimentos = [];
console.log("teste");

function obterDados(){

        event.preventDefault();
    
        let lactoseForm = null;

        if(document.getElementById("lactose-sim").checked) {
            lactoseForm = true;
        }else if(document.getElementById("lactose-nao").checked) {
            lactoseForm = false;
        }else{
            console.log("Alimento com Lactose: Não informado");
        }

        
        const Alimento = {
            name: document.getElementById("nome").value,
            descricao: document.getElementById("descricao").value,
            preco: document.getElementById("valor").value,
            tipo: document.getElementById("tipo").value,
            lactose:  lactoseForm,
            dataValidade: document.getElementById("data-validade").value
        }

        listaAlimentos.push(Alimento);

        console.log("Alimento cadastrado com sucesso!");
        console.log("Lista de Alimentos:", listaAlimentos);
}