CREATE SEQUENCE seq_ra START 1;

CREATE TABLE Aluno (
    id_aluno SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    sobrenome VARCHAR(50), 
    data_nascimento DATE, 
    endereco VARCHAR(100), 
    email VARCHAR(50), 
    celular VARCHAR(20)
);

CREATE OR REPLACE FUNCTION gerar_ra() RETURNS TRIGGER AS $$
BEGIN
    NEW.ra := 'AAA' || TO_CHAR(nextval('seq_ra'), 'FM0000');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_gerar_ra
BEFORE INSERT ON Aluno
FOR EACH ROW EXECUTE FUNCTION gerar_ra();


CREATE TABLE Livro (
    id_livro SERIAL PRIMARY KEY,
    titulo VARCHAR (200) NOT NULL,
    autor VARCHAR (150) NOT NULL,
    editora VARCHAR (100) NOT NULL,
    ano_publicacao VARCHAR (5),
    isbn VARCHAR (20),
    quant_total INTEGER NOT NULL,
    quant_disponivel INTEGER NOT NULL,
    valor_aquisicao DECIMAL (10,2),
    status_livro_emprestado VARCHAR (20)
);


CREATE TABLE Emprestimo (
    id_emprestimo SERIAL PRIMARY KEY,
    id_aluno INT REFERENCES Aluno(id_aluno),
    id_livro INT REFERENCES Livro(id_livro),
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,
    status_emprestimo VARCHAR (20)
);


INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Conor', 'McGregor', '2005-01-15', 'Rua UFC, 123', 'mcgregor@ufc.com', '16998959876'),
('Amanda', 'Nunes', '2004-03-22', 'Rua UFC, 456', 'amanda.nunes@ufc.com', '16995992305'),
('Angelina', 'Jolie', '2003-07-10', 'Rua Hollywood, 789', 'jolie@cinema.com', '16991915502'),
('Natalie', 'Portman', '2002-11-05', 'Rua Hollywood, 101', 'natalie.portman@cinema.com', '16993930703'),
('Shaquille', 'ONeal', '2004-09-18', 'Rua NBA, 202', 'shaquille@gmail.com', '16993937030'),
('Harry', 'Kane', '2000-05-18', 'Rua Futebol, 2024', 'kane@futi.com', '16998951983'),
('Jaqueline', 'Carvalho', '2001-12-10', 'Rua Volei, 456', 'jack@volei.com', '16991993575'),
('Sheilla', 'Castro', '2003-04-25', 'Rua Volei, 2028', 'sheilla.castro@volei.com', '16981974547'),
('Gabriela', 'Guimarães', '2007-08-19', 'Rua Volei, 2028', 'gaby@volei.com', '16983932215'),
('Magic', 'Johnson', '2003-07-08', 'Rua NBA, 1999', 'magic@gmail.com', '16993932020')

INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Paul', 'McCartney', '2001-06-18', 'Rua Beatles, 64', 'paul@beatles.com', '16998891234'),
('Freddie', 'Mercury', '2000-09-05', 'Rua Queen, 85', 'freddie@queen.com', '16997882345'),
('Beyoncé', 'Knowles', '2002-09-04', 'Rua Pop, 123', 'beyonce@pop.com', '16998883456'),
('Elton', 'John', '2003-03-25', 'Rua Piano, 456', 'elton.john@piano.com', '16998887890'),
('Adele', 'Adkins', '2004-05-05', 'Rua Soul, 789', 'adele@soul.com', '16999874567'),
('David', 'Bowie', '2005-01-08', 'Rua Rock, 101', 'bowie@rock.com', '16998889567'),
('Taylor', 'Swift', '2001-12-13', 'Rua Country, 567', 'taylor@swift.com', '16997885432'),
('Bruno', 'Mars', '2002-10-08', 'Rua Funk, 999', 'bruno.mars@funk.com', '16997885678'),
('Lady', 'Gaga', '2003-03-28', 'Rua Pop, 303', 'gaga@pop.com', '16999885432'),
('Kurt', 'Cobain', '2004-02-20', 'Rua Grunge, 404', 'kurt@nirvana.com', '16998887876');


INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('O Senhor dos Anéis', 'J.R.R. Tolkien', 'HarperCollins', '1954', '978-0007525546', 10, 10, 150.00, 'Disponível'),
('1984', 'George Orwell', 'Companhia das Letras', '1949', '978-8535906770', 8, 8, 90.00, 'Disponível'),
('Dom Quixote', 'Miguel de Cervantes', 'Penguin Classics', '1605', '978-0142437230', 6, 6, 120.00, 'Disponível'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Agir', '1943', '978-8522008731', 12, 12, 50.00, 'Disponível'),
('A Revolução dos Bichos', 'George Orwell', 'Penguin', '1945', '978-0141036137', 7, 7, 80.00, 'Disponível'),
('O Hobbit', 'J.R.R. Tolkien', 'HarperCollins', '1937', '978-0007458424', 9, 9, 140.00, 'Disponível'),
('O Conde de Monte Cristo', 'Alexandre Dumas', 'Penguin Classics', '1844', '978-0140449266', 5, 5, 110.00, 'Disponível'),
('Orgulho e Preconceito', 'Jane Austen', 'Penguin Classics', '1813', '978-0141439518', 7, 7, 90.00, 'Disponível'),
('Moby Dick', 'Herman Melville', 'Penguin Classics', '1851', '978-0142437247', 4, 4, 100.00, 'Disponível'),
('Guerra e Paz', 'Liev Tolstói', 'Companhia das Letras', '1869', '978-8535922343', 3, 3, 130.00, 'Disponível');


INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('Crime e Castigo', 'Fiódor Dostoiévski', 'Companhia das Letras', '1866', '978-8535922244', 5, 5, 110.00, 'Disponível'),
('A Divina Comédia', 'Dante Alighieri', 'Penguin Classics', '1320', '978-0142437223', 4, 4, 100.00, 'Disponível'),
('Cem Anos de Solidão', 'Gabriel García Márquez', 'Record', '1967', '978-8503010175', 8, 8, 90.00, 'Disponível'),
('O Nome da Rosa', 'Umberto Eco', 'Record', '1980', '978-8501047609', 6, 6, 120.00, 'Disponível'),
('O Retrato de Dorian Gray', 'Oscar Wilde', 'Penguin Classics', '1890', '978-0141439570', 7, 7, 80.00, 'Disponível'),
('Madame Bovary', 'Gustave Flaubert', 'Penguin Classics', '1857', '978-0140449129', 5, 5, 110.00, 'Disponível'),
('As Aventuras de Sherlock Holmes', 'Arthur Conan Doyle', 'Penguin Classics', '1892', '978-0141034676', 9, 9, 70.00, 'Disponível'),
('O Grande Gatsby', 'F. Scott Fitzgerald', 'Penguin Classics', '1925', '978-0141182636', 10, 10, 85.00, 'Disponível'),
('A Ilíada', 'Homero', 'Penguin Classics', '800aC', '978-0140447941', 3, 3, 130.00, 'Disponível'),
('Drácula', 'Bram Stoker', 'Penguin Classics', '1897', '978-0141439846', 4, 4, 100.00, 'Disponível');


INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(1, 2, '2024-09-01', '2024-09-15', 'Em andamento'),
(2, 1, '2024-09-02', '2024-09-16', 'Em andamento'),
(3, 5, '2024-09-03', '2024-09-17', 'Em andamento'),
(5, 3, '2024-09-04', '2024-09-18', 'Em andamento'),
(4, 6, '2024-09-05', '2024-09-19', 'Em andamento'),
(6, 4, '2024-09-06', '2024-09-20', 'Em andamento'),
(7, 8, '2024-09-07', '2024-09-21', 'Em andamento'),
(8, 7, '2024-09-08', '2024-09-22', 'Em andamento'),
(10, 9, '2024-09-09', '2024-09-23', 'Em andamento'),
(9, 10, '2024-09-10', '2024-09-24', 'Em andamento'),
(1, 10, '2024-09-11', '2024-09-25', 'Em andamento'),
(2, 3, '2024-09-11', '2024-09-25', 'Em andamento'),
(4, 5, '2024-09-11', '2024-09-25', 'Em andamento'),
(6, 2, '2024-09-11', '2024-09-25', 'Em andamento');


INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(1, 3, '2024-09-15', '2024-09-29', 'Em andamento'),
(2, 4, '2024-09-16', '2024-09-30', 'Em andamento'),
(11, 20, '2024-09-17', '2024-10-01', 'Em andamento'),
(20, 11, '2024-09-18', '2024-10-02', 'Em andamento'),
(19, 12, '2024-09-19', '2024-10-03', 'Em andamento'),
(12, 19, '2024-09-20', '2024-10-04', 'Em andamento'),
(18, 13, '2024-09-21', '2024-10-05', 'Em andamento'),
(13, 18, '2024-09-22', '2024-10-06', 'Em andamento'),
(17, 14, '2024-09-23', '2024-10-07', 'Em andamento'),
(14, 17, '2024-09-24', '2024-10-08', 'Em andamento');


SELECT 
    a.ra, 
    a.nome, 
    a.sobrenome, 
    a.celular, 
    l.titulo, 
    l.autor, 
    l.editora, 
    e.data_emprestimo, 
    e.data_devolucao, 
    e.status_emprestimo
FROM 
    Emprestimo e
JOIN 
    Aluno a ON e.id_aluno = a.id_aluno
JOIN 
    Livro l ON e.id_livro = l.id_livro;

