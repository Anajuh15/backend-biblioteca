import { Request, Response } from "express";
import { Emprestimo } from "../model/Emprestimo";


interface EmprestimoDTO {
    idAluno: number,
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolucao: Date,
        statusEmprestimo: string
}

/**
 * A classe `Emprestimo` estende a classe `Emprestimo` e é responsável por controlar as requisições relacionadas aos Emprestimos.
 * 
 * - Esta classe atua como um controlador dentro de uma API REST, gerenciando as operações relacionadas ao recurso "Livro".
 * - Herdando de `Livro`, ela pode acessar métodos e propriedades da classe base.
 */
export class EmprestimoController extends Emprestimo{
/**
    * Lista todos os carros.
    * @param req Objeto de requisição HTTP.
    * @param res Objeto de resposta HTTP.
    * @returns Lista de carros em formato JSON com status 200 em caso de sucesso.
    * @throws Retorna um status 400 com uma mensagem de erro caso ocorra uma falha ao acessar a listagem de carros.
    */
static async todos(req: Request, res: Response): Promise<any> {
    try {
        // acessa a função de listar os carros e armazena o resultado
        const listaDeEmprestimo = await Emprestimo.listagemEmprestimo();

        // retorna a lista de carros há quem fez a requisição web
        return res.status(200).json(listaDeEmprestimo);
    } catch (error) {
        // lança uma mensagem de erro no console
        console.log('Erro ao acessar listagem de Emprestimo');

        // retorna uma mensagem de erro há quem chamou a mensagem
        return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de Emprestimo" });
    }

}
/**
    * Método controller para cadastrar um novo carro.
    * 
    * Esta função recebe uma requisição HTTP contendo os dados de um carro no corpo da requisição
    * e tenta cadastrar este carro no banco de dados utilizando a função `cadastroCarro`. Caso o cadastro 
    * seja bem-sucedido, retorna uma resposta HTTP 200 com uma mensagem de sucesso. Caso contrário, retorna
    * uma resposta HTTP 400 com uma mensagem de erro.
    * 
    * @param {Request} req - Objeto de requisição HTTP, contendo o corpo com os dados do carro no formato `CarroDTO`.
    * @param {Response} res - Objeto de resposta HTTP usado para retornar o status e a mensagem ao cliente.
    * @returns {Promise<Response>} - Retorna uma resposta HTTP com o status 200 em caso de sucesso, ou 400 em caso de erro.
    * 
    * @throws {Error} - Se ocorrer um erro durante o processo de cadastro, uma mensagem é exibida no console e uma 
    *                   resposta HTTP 400 com uma mensagem de erro é enviada ao cliente.
    */
static async novo(req: Request, res: Response): Promise<Response> {
    try {
        // recuperando informações do corpo da requisição e colocando em um objeto da interface CarroDTO
        const EmprestimoRecebido: EmprestimoDTO = req.body;

        // instanciando um objeto do tipo carro com as informações recebidas
        const novoEmprestimo = new Emprestimo (EmprestimoRecebido.idAluno, 
                                           EmprestimoRecebido.idLivro, 
                                           EmprestimoRecebido.dataEmprestimo, 
                                           EmprestimoRecebido.dataDevolucao,
                                           EmprestimoRecebido.statusEmprestimo);
                                    

        // Chama a função de cadastro passando o objeto como parâmetro
        const repostaClasse = await Emprestimo.cadastroemprestimo(novoEmprestimo);

        // verifica a resposta da função
        if(repostaClasse) {
            // retornar uma mensagem de sucesso
            return res.status(200).json({ mensagem: "Emprestimo cadastrado com sucesso!" });
        } else {
            // retorno uma mensagem de erro
            return res.status(400).json({ mensagem: "Erro ao cadastra o Emprestimo. Entre em contato com o administrador do sistema."})
        }
        
    } catch (error) {
        // lança uma mensagem de erro no console
        console.log(`Erro ao cadastrar um Emprestimo. ${error}`);

        // retorna uma mensagem de erro há quem chamou a mensagem
        return res.status(400).json({ mensagem: "Não foi possível cadastrar o emprestimo. Entre em contato com o administrador do sistema." });
    }
}
}