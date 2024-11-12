import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

/**
 * Classe que gerencia os empréstimos de livros.
 */
export class Emprestimo {

    /* Atributos */
    /* Identificador do empréstimo */
    private idEmprestimo: number = 0;
    /* Identificador do aluno que fez o empréstimo */
    private idAluno: number = 0;
    /* Identificador do livro emprestado */
    private idLivro: number = 0;
    /* Data de início do empréstimo */
    private dataEmprestimo: Date;
    /* Data de devolução do empréstimo */
    private dataDevolucao: Date;
    /* Status atual do empréstimo */
    private statusEmprestimo: string;
    setIdEmprestimo: any;

    /**
     * Construtor da classe Emprestimos
     * 
     * @param idAluno Identificador do aluno que fez o empréstimo
     * @param idLivro Identificador do livro emprestado
     * @param dataEmprestimo Data em que o empréstimo foi realizado
     * @param dataDevolucao Data prevista para devolução do livro
     * @param statusEmprestimo Status do empréstimo (ex.: "ativo", "devolvido")
     */
    constructor(
        idAluno: number,
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolucao: Date,
        statusEmprestimo: string
    ) {
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.statusEmprestimo = statusEmprestimo;
        
         }
        
        public setDataDevolucao(dataDevolucao: Date): void {
            this.dataDevolucao = dataDevolucao;
        }
    
        /**
         * Retorna o status do empréstimo.
         *
         * @returns {string} o status do empréstimo.
         */
        public getStatusEmprestimo(): string {
            return this.statusEmprestimo;
        }
    
        /**
         * Define o status do empréstimo.
         *
         * @param statusEmprestimo - o status do empréstimo a ser definido.
         */
        public setStatusEmprestimo(statusEmprestimo: string): void {
            this.statusEmprestimo = statusEmprestimo;
        }
    
        static async listagemEmprestimo(): Promise<Array<Emprestimo> | null> {
            // Objeto para armazenar a lista de empréstimos
            const listaDeEmprestimo: Array<Emprestimo> = [];
        
            try {
                // Query de consulta para selecionar todos os empréstimos do banco de dados
                const querySelectEmprestimo = `SELECT * FROM emprestimo`;;
        
                // Executa a consulta e armazena a resposta
                const respostaBD = await database.query(querySelectEmprestimo);
        
                // Itera sobre as linhas do resultado da consulta para criar objetos Emprestimo
                respostaBD.rows.forEach((linha:any) => {
                    // Cria uma nova instância de Emprestimo com os dados da linha
                    const novoEmprestimo = new Emprestimo(
                        linha.id_aluno,
                        linha.id_livro,
                        linha.data_emprestimo,
                        linha.data_devolucao,
                        linha.status_emprestimo
                    );
        
                    // Atribui o ID do empréstimo à instância de Emprestimo
                    novoEmprestimo.setIdEmprestimo(linha.id_emprestimo);
        
                    // Adiciona o objeto Emprestimo à lista de empréstimos
                    listaDeEmprestimo.push(novoEmprestimo);
                });
        
                // Retorna a lista de empréstimos criada
                return listaDeEmprestimo;
        
            } catch (error) {
                // Log de erro caso ocorra uma falha na consulta
                console.log('Erro ao buscar lista de empréstimos. Verifique os logs para mais detalhes.');
                console.log(error);
                return null; // Retorna null em caso de erro na consulta
            }
        }
    }

    