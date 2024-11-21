import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;
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

/**
     * Busca e retorna uma lista de alunos do banco de dados.
     * @returns Um array de objetos do tipo aluno em caso de sucesso ou null se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todos os registros da tabela "aluno".
     * - Os dados retornados são utilizados para instanciar objetos da classe aluno.
     * - Cada aluno instanciado é adicionado a uma lista que será retornada ao final da execução.
     * - Se houver uma falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna null.
     */
    static async listagemalunos(): Promise<Array<Aluno> | null> {
        const listaDealunos: Array<Aluno> = [];

        try {
            const querySelectaluno = `SELECT * FROM aluno`;
            const respostaBD = await database.query(querySelectaluno);

            respostaBD.rows.forEach((linha:any) => {
                const novoaluno = new Aluno(
                    linha.nome,
                    linha.sobrenome,
                    linha.data_nascimento,
                    linha.endereco,
                    linha.email,
                    linha.celular,);

                novoaluno.setIdAluno(linha.id_aluno);

                listaDealunos.push(novoaluno);
            });
            
            return listaDealunos;
        } catch (error) {
            console.log('Erro ao buscar lista de livros');
            return null;
        }
    }

 /**
     * Realiza o cadastro de um aluno no banco de dados.
     * 
     * Esta função recebe um objeto do tipo aluno e insere seus dados (nome, cpf, celular, dataNascimento, email)
     * na tabela aluno do banco de dados. O método retorna um valor booleano indicando se o cadastro 
     * foi realizado com sucesso.
     * 
     * @param {aluno} aluno - Objeto contendo os dados do aluno que será cadastrado. O objeto aluno
     *                        deve conter os métodos getNome(), getCpf(), getcelular() 
     *                        que retornam os respectivos valores do aluno.
     * @returns {Promise<boolean>} - Retorna true se o aluno foi cadastrado com sucesso e false caso contrário.
     *                               Em caso de erro durante o processo, a função trata o erro e retorna false.
     * 
     * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
     *                   no console junto com os detalhes do erro.
     */
 static async cadastroAluno(aluno: Aluno): Promise<boolean> {
    try {
        // query para fazer insert de um carro no banco de dados
        const queryInsertaluno = `INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular)
                                    VALUES
                                    ('${aluno.getNome()}', 
                                    '${aluno.getSobrenome()}',
                                    '${aluno.getDataNascimento()}',
                                    '${aluno.getEndereco()}',
                                    '${aluno.getEmail()}',
                                    '${aluno.getCelular()}')
                                    RETURNING id_aluno;`;

        // executa a query no banco e armazena a resposta
        const respostaBD = await database.query(queryInsertaluno);

        // verifica se a quantidade de linhas modificadas é diferente de 0
        if (respostaBD.rowCount != 0) {
            console.log(`aluno cadastrado com sucesso! ID do aluno: ${respostaBD.rows[0].id_aluno}`);
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