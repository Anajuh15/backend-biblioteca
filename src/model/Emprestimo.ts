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

    /* Métodos get e set */

    /**
     * Recupera o identificador do empréstimo
     * @returns o identificador do empréstimo
     */
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    /**
     * Atribui um valor ao identificador do empréstimo
     * @param idEmprestimo Novo identificador do empréstimo
     */
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }

    /**
     * Recupera o identificador do aluno que fez o empréstimo
     * @returns o identificador do aluno
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Atribui um valor ao identificador do aluno
     * @param idAluno Novo identificador do aluno
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    /**
     * Recupera o identificador do livro emprestado
     * @returns o identificador do livro
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * Atribui um valor ao identificador do livro
     * @param idLivro Novo identificador do livro
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Retorna a data em que o empréstimo foi realizado
     * @returns A data do empréstimo
     */
    public getDataEmprestimo(): Date {
        return this.dataEmprestimo;
    }

    /**
     * Define a data de início do empréstimo
     * @param dataEmprestimo Nova data do empréstimo
     */
    public setDataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }

    /**
     * Retorna a data prevista para devolução do livro
     * @returns A data de devolução do empréstimo
     */
    public getDataDevolucao(): Date {
        return this.dataDevolucao;
    }

    /**
     * Define a data prevista para devolução do livro
     * @param dataDevolucao Nova data de devolução
     */
    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }

    /**
     * Retorna o status atual do empréstimo
     * @returns O status do empréstimo (ex.: "ativo", "devolvido")
     */
    public getStatusEmprestimo(): string {
        return this.statusEmprestimo;
    }

    /**
     * Define o status atual do empréstimo
     * @param statusEmprestimo Novo status do empréstimo
     */
    public setStatusEmprestimo(statusEmprestimo: string): void {
        this.statusEmprestimo = statusEmprestimo;
    }

 /**
     * Busca e retorna uma lista de emprestimolistaDeEmprestimo de emprestimo do banco de dados.
     * @returns Um array de objetos do tipo emprestimo em caso de sucesso ou null se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todos os registros da tabela "Emprestimo".
     * - Os dados retornados são utilizados para instanciar objetos da classe Emprestimo.
     * - Cada pedido de venda instanciado é adicionado a uma lista que será retornada ao final da execução.
     * - Caso ocorra uma falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna null.
     */
 static async listagemEmprestimo(): Promise<Array<Emprestimo> | null> {
    const listaDeEmprestimo: Array<Emprestimo> = [];

    try {
        const querySelectemprestimolistaDeEmprestimo = `SELECT * FROM emprestimo`;
        const respostaBD = await database.query(querySelectemprestimolistaDeEmprestimo);

        respostaBD.rows.forEach((linha: any) => {
            const novoPedidoEmprestimo = new Emprestimo(
                linha.id_livro,
                linha.id_aluno,
                linha.id_emprestimo,
                linha.data_emprestimo,
                linha.data_devolucao,);

            novoPedidoEmprestimo.setIdEmprestimo(linha.id_emprestimo);

            listaDeEmprestimo.push(novoPedidoEmprestimo);
        });

        return listaDeEmprestimo;
    } catch (error) {
        console.log('Erro ao buscar lista de emprestimolistaDeEmprestimo');
        return null;
    }
}
/**
 * Realiza o cadastro de pedido no banco de dados.
 * 
 * Esta função recebe um objeto do tipo Pedido e insere seus dados (idlivro,idaluno,dataPedido,valorPedido)
 * na tabela emprestimos do banco de dados. O método retorna um valor booleano indicando se o cadastro 
 * foi realizado com sucesso.
 * 
 * @param {emprestimo} pedido_venda - Objeto contendo os dados do pedido que será cadastrado. O objeto emprestimo
 *                        deve conter os métodos getIdlivro(), getIdaluno(), getDatapedido(),`getValorPedido` 
 *                        que retornam os respectivos valores do aluno.
 * @returns {Promise<boolean>} - Retorna true se o pedido foi cadastrado com sucesso e false caso contrário.
 *                               Em caso de erro durante o processo, a função trata o erro e retorna false.
 * 
 * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
 *                   no console junto com os detalhes do erro.
 */
static async cadastroemprestimo(emprestimo: Emprestimo): Promise<boolean> {
try {
    // query para fazer insert de um livro no banco de dados
    const queryInsertemprestimo = `INSERT INTO Emprestimo (id_aluno, id_livro, id_Emprestimo, data_emprestimo, data_devolucao)
                                VALUES
                                ('${emprestimo.getIdAluno()}', 
                                '${emprestimo.getIdLivro()}',
                                '${emprestimo.getIdEmprestimo()}',
                                '${emprestimo.getDataEmprestimo}',
                                '${emprestimo.getDataDevolucao}), 
                                RETURNING id_emprestimo;`;

    // executa a query no banco e armazena a resposta
    const respostaBD = await database.query(queryInsertemprestimo);

    // verifica se a quantidade de linhas modificadas é diferente de 0
    if (respostaBD.rowCount != 0) {
        console.log('Pedido cadastrado com sucesso! ID do pedido: ${respostaBD.rows[0].id_pedido}');
        // true significa que o cadastro foi feito
        return true;
    }
    // false significa que o cadastro NÃO foi feito.
    return false;

    // tratando o erro
} catch (error) {
    // imprime outra mensagem junto com o erro
    console.log('Erro ao cadastrar o aluno. Verifique os logs para mais detalhes.');
    // imprime o erro no console
    console.log(error);
    // retorno um valor falso
    return false;
}
}
}
    