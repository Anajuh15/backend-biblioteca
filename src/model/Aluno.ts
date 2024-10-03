/**
 * Classe que representa o Aluno.
 */
export class Aluno {

    /* Atributos */
    /* Identificador do Aluno */
    private idAluno: number = 0;
    /* Nome do Aluno */
    private nome: string;
    /* Sobrenome do Aluno */
    private sobrenome: string;
    /* Data de nascimento do Aluno */
    private dataNascimento: Date;
    /* Endereço do Aluno */
    private endereco: string;
    /* Email do Aluno */
    private email: string;
    /* Celular do Aluno */
    private celular: string;

    /**
     * Construtor da classe Aluno
     * 
     * @param nome Nome do Aluno
     * @param Sobrenome Sobrenome do Aluno
     * @param dataNascimento Data de nascimento do Aluno
     * @param endereco Endereço do Aluno
     * @param email Email do Aluno
     * @param celular Celular do Aluno
     */
    constructor(
        nome: string,
        sobrenome: string,
        dataNascimento: Date,
        endereco: string,
        email:string,
        celular:string
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.email = email;
        this.celular = celular;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do Aluno
     * @returns o identificador do Aluno
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Atribui um valor ao identificador do Aluno
     * @param idAluno novo identificado do Aluno
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    /**
     * Retorna a marca do Aluno.
     *
     * @returns {string} O nome do Aluno.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do Aluno.
     * 
     * @param nome - O nome do Aluno a ser definido.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o sobrenome do Aluno
     *
     * @returns {string} O sobrenome do Aluno.
     */
    public getSobrenome(): string {
        return this.sobrenome;
    }

    /**
     * Define o sobrenome do Aluno.
     *
     * @param sobrenome - O sobrenome do Aluno.
     */
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    /**
     * Retorna a data de nascimento do Aluno.
     *
     * @returns A data de nascimento.
     */
    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    /**
     * Define a data de nascimento do Aluno.
     * 
     * @param dataNascimento - A data de nascimento.
     */
    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

    /**
     * Retorna o endereço.
     *
     * @returns {string} O endereço do Aluno.
     */
    public getEndereco(): string {
        return this.endereco;
    }

    /**
     * Define o endereço.
     * 
     * @param endereco - O endereço do Aluno.
     */
    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    /**
     * Retorna o email do Aluno.
     *
     * @returns {string} O email do Aluno.
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Define o email do Aluno.
     * 
     * @param nome - O email do Aluno a ser definido.
     */
    public setEmail(email: string): void {
        this.email = email;
    }

    /**
     * Retorna o celular do Aluno
     *
     * @returns {string} O celular do Aluno.
     */
    public getCelular(): string {
        return this.celular;
    }

    /**
     * Define o celular do Aluno.
     *
     * @param celular - O celular do Aluno.
     */
    public setCelular(celular: string): void {
        this.celular = celular;
    }

}