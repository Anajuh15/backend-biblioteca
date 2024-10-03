/**
 * Classe que gerencia os empréstimos de livros.
 */
export class Emprestimos {

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
}