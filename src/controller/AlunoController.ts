import { Request, Response } from "express";
import { Aluno } from "../model/Aluno";

interface AlunoDTO {
    nome: string,
    sobrenome: string,
    dataNascimento: Date,
    endereco: string,
    email:string,
    celular:string
}

/**
* A classe AlunoController estende a classe Aluno e é responsável por controlar as requisições relacionadas aos Alunos.
* 
* - Como um controlador em uma API REST, esta classe gerencia as operações relacionadas ao recurso "Aluno".
* - Herdando de Aluno, ela pode acessar os métodos e propriedades da classe base.
*/
export class AlunoController extends Aluno {

    /**
     * Lista todos os Alunos.
     * @param req Objeto de requisição HTTP.
     * @param res Objeto de resposta HTTP.
     * @returns Lista de Alunos em formato JSON com status 200 em caso de sucesso.
     * @throws Retorna um status 400 com uma mensagem de erro caso ocorra uma falha ao acessar a listagem de Alunos.
     */
    static async todos(req: Request, res: Response): Promise<any> {
        try {
            const listaDeAlunos = await Aluno.listagemalunos();
            
            
            return res.status(200).json(listaDeAlunos);
        } catch (error) {
            console.log('Erro ao acessar listagem de carros');
            
            return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de carros" });
        }
    }

    static async novo(req: Request, res: Response): Promise<any> {
        try {
            // recuperando informações do corpo da requisição e colocando em um objeto da interface AlunoDTO
            const AlunoRecebido: AlunoDTO = req.body;

            // instanciando um objeto do tipo Aluno com as informações recebidas
            const novoAluno = new Aluno(AlunoRecebido.nome, 
                                        AlunoRecebido.sobrenome, 
                                        AlunoRecebido.dataNascimento,
                                        AlunoRecebido.endereco,
                                        AlunoRecebido.email,
                                        AlunoRecebido.celular);

            // Chama a função de cadastro passando o objeto como parâmetro
            const repostaClasse = await Aluno.cadastroAluno(novoAluno);

            // verifica a resposta da função
            if(repostaClasse) {
                // retornar uma mensagem de sucesso
                return res.status(200).json({ mensagem: "Aluno cadastrado com sucesso!" });
            } else {
                // retorno uma mensagem de erro
                return res.status(400).json({ mensagem: "Erro ao cadastra o Aluno. Entre em contato com o administrador do sistema."})
            }
            
        } catch (error) {
            // lança uma mensagem de erro no console
            console.log('Erro ao cadastrar um Aluno. ${error}');

            // retorna uma mensagem de erro há quem chamou a mensagem
            return res.status(400).json({ mensagem: "Não foi possível cadastrar o Aluno. Entre em contato com o administrador do sistema." });
        }
    }
}