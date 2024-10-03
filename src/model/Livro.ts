/**
 * Classe que representa o Livro.
 */
export class Livro {

    /* Atributos */
    /* Identificador do Livro */
    private idLivro: number = 0;
    /* Título do Livro */
    private titulo: string;
    /* Autor do Livro */
    private autor: string;
    /* Editora do Livro */
    private editora: string;
    /* Ano de publicação do Livro */
    private anoPublicacao: string;
    /* ISBN do Livro */
    private isbn: string;
    /* Quantidade total de exemplares do Livro */
    private quantTotal: number;
    /* Quantidade disponível de exemplares do Livro */
    private quantDisponivel: number;
    /* Valor de aquisição do Livro */
    private valorAquisicao: number;
    /* Status de empréstimo do Livro */
    private statusLivroEmprestado: string;

    /**
     * Construtor da classe Livro
     * 
     * @param titulo Título do Livro
     * @param autor Autor do Livro
     * @param editora Editora do Livro
     * @param anoPublicacao Ano de publicação do Livro
     * @param isbn ISBN do Livro
     * @param quantTotal Quantidade total de exemplares do Livro
     * @param quantDisponivel Quantidade disponível de exemplares do Livro
     * @param valorAquisicao Valor de aquisição do Livro
     * @param statusLivroEmprestado Status de empréstimo do Livro
     */
    constructor(
        titulo: string,
        autor: string,
        editora: string,
        anoPublicacao: string,
        isbn: string,
        quantTotal: number,
        quantDisponivel: number,
        valorAquisicao: number,
        statusLivroEmprestado: string
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
        this.isbn = isbn;
        this.quantTotal = quantTotal;
        this.quantDisponivel = quantDisponivel;
        this.valorAquisicao = valorAquisicao;
        this.statusLivroEmprestado = statusLivroEmprestado;
    }

    /* Métodos get e set */

    /**
     * Recupera o identificador do Livro
     * @returns o identificador do Livro
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * Atribui um valor ao identificador do Livro
     * @param idLivro novo identificador do Livro
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Retorna o título do Livro.
     *
     * @returns {string} O título do Livro.
     */
    public getTitulo(): string {
        return this.titulo;
    }

    /**
     * Define o título do Livro.
     * 
     * @param titulo - O título do Livro a ser definido.
     */
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    /**
     * Retorna o autor do Livro.
     *
     * @returns {string} O autor do Livro.
     */
    public getAutor(): string {
        return this.autor;
    }

    /**
     * Define o autor do Livro.
     * 
     * @param autor - O autor do Livro a ser definido.
     */
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    /**
     * Retorna a editora do Livro.
     *
     * @returns {string} A editora do Livro.
     */
    public getEditora(): string {
        return this.editora;
    }

    /**
     * Define a editora do Livro.
     * 
     * @param editora - A editora do Livro.
     */
    public setEditora(editora: string): void {
        this.editora = editora;
    }

    /**
     * Retorna o ano de publicação do Livro.
     *
     * @returns {number} O ano de publicação do Livro.
     */
    public getAnoPublicacao(): string {
        return this.anoPublicacao;
    }

    /**
     * Define o ano de publicação do Livro.
     * 
     * @param anoPublicacao - O ano de publicação do Livro.
     */
    public setAnoPublicacao(anoPublicacao: string): void {
        this.anoPublicacao = anoPublicacao;
    }

    /**
     * Retorna o ISBN do Livro.
     *
     * @returns {string} O ISBN do Livro.
     */
    public getIsbn(): string {
        return this.isbn;
    }

    /**
     * Define o ISBN do Livro.
     * 
     * @param isbn - O ISBN do Livro.
     */
    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

    /**
     * Retorna a quantidade total de exemplares do Livro.
     *
     * @returns {number} A quantidade total de exemplares.
     */
    public getQuantTotal(): number {
        return this.quantTotal;
    }

    /**
     * Define a quantidade total de exemplares do Livro.
     * 
     * @param quantTotal - A quantidade total de exemplares.
     */
    public setQuantTotal(quantTotal: number): void {
        this.quantTotal = quantTotal;
    }

    /**
     * Retorna a quantidade disponível de exemplares do Livro.
     *
     * @returns {number} A quantidade disponível de exemplares.
     */
    public getQuantDisponivel(): number {
        return this.quantDisponivel;
    }

    /**
     * Define a quantidade disponível de exemplares do Livro.
     * 
     * @param quantDisponivel - A quantidade disponível de exemplares.
     */
    public setQuantDisponivel(quantDisponivel: number): void {
        this.quantDisponivel = quantDisponivel;
    }

    /**
     * Retorna o valor de aquisição do Livro.
     *
     * @returns {number} O valor de aquisição do Livro.
     */
    public getValorAquisicao(): number {
        return this.valorAquisicao;
    }

    /**
     * Define o valor de aquisição do Livro.
     * 
     * @param valorAquisicao - O valor de aquisição do Livro.
     */
    public setValorAquisicao(valorAquisicao: number): void {
        this.valorAquisicao = valorAquisicao;
    }

    /**
     * Retorna o status de empréstimo do Livro.
     *
     * @returns {boolean} O status de empréstimo do Livro.
     */
    public getStatusLivroEmprestado(): string {
        return this.statusLivroEmprestado;
    }

    /**
     * Define o status de empréstimo do Livro.
     * 
     * @param statusLivroEmprestado - O status de empréstimo do Livro.
     */
    public setStatusLivroEmprestado(statusLivroEmprestado: string): void {
        this.statusLivroEmprestado = statusLivroEmprestado;
    }
}