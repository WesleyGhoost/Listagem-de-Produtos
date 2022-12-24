class Produto {
    constructor() {
        this.id = 1
        this.arrayLista = []

    }
    salvar() {
        let produto = this.lerDados()
        if(this.validaCampos(produto)) {
            this.adicionar(produto)

        }
        this.listaTabela()
        this.cancelar()
    }
    lerDados() {
        let produto = {}
        produto.id = this.id
        produto.nomeProduto = document.getElementById("produto").value 
        produto.valor = document.getElementById("valor").value 

        return produto

    }
    adicionar(produto) {
        this.arrayLista.push(produto)
        this.id++

    }
    listaTabela() {
        let tbody = document.getElementById("tbody")
        tbody.innerText = ''

        for(let i = 0; i < this.arrayLista.length; i++) {
            let tr = tbody.insertRow()
             
            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayLista[i].id
            td_produto.innerText = this.arrayLista[i].nomeProduto
            td_valor.innerText = this.arrayLista[i].valor

            let imgDelet = document.createElement('img')

            imgDelet.src = "img/excluir.png"
            imgDelet.setAttribute("onclick", "produto.deletar("+ this.arrayLista[i].id +")")

            td_acoes.appendChild(imgDelet)

        }
    }
    validaCampos(produto) {
        let msg = ''
        if(produto.nomeProduto == '') {
            msg += "[ERRO]Insira o nome do produto! \n"
        }
        if(produto.valor == '') {
            msg += "[ERRO]Insira o valor! \n"
        }
        if(msg != '') {
            alert(msg)
            return false
        }
        return true
        
    }
    cancelar() {
        document.getElementById('produto').value = ''
        document.getElementById('valor').value = ''
        
    }
    deletar(id)  {
        let tbody = document.getElementById('tbody')

        for(let i = 0; i < this.arrayLista.length; i++) {
            if(this.arrayLista[i].id == id) {
                this.arrayLista.splice(i, 1)
                tbody.deleteRow(i)

            }
        }
    }
}
let produto = new Produto()