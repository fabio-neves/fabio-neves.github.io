---
layout: curso
title: Aula 01
---

# Banco de Dados

<!-- - Sistema gerenciador de banco de dados
- Banco de dados
- Tabela
- Registros
- Atributos (colunas dos registros)
- Tipos e Valores
- Noção de chave candidata e chave primária
- Introdução ao SQL

Falar um pouco de modelo conceitual, lógico e físico -->

## Aula 01 - Introdução

### Sistema gerenciador de Banco de Dados

Um sistema gerenciador de banco de dados (SGBD) é um conjunto de ferramentas ou um sistema de software que tem a função de criar, atualizar e remover bancos de dados. Ele permite controlar o acesso pelos diversos usuários e fornece uma interface de comunicação única para que os usuários possam inserir, atualizar, remover e consultar os dados desses bancos. Ele também pode ser utilizado em diversas outras tarefas como a criação de cópias de segurança, melhoria de performance das consultas e a disponibilidade e a segurança dos dados. O importante aqui é diferenciar o SGBD de um banco de dados. São conceitos diferentes que muitas vezes são usados como sinônimos. Nesse curso, vamos utilizar o SGBD da Microsoft chamado de SQL Server para aprender a modelar, criar e consultar os dados de um  banco de dados.

[Download do SQL Server](https://www.microsoft.com/pt-br/download/details.aspx?id=55994)

### Banco de Dados, Tabelas e Registros

O banco de dados pode ser visto como um conjunto de dados (registros) que estão relacionados entre si com o objetivo de juntos fornecerem informações para seus usuários. Iremos tratar especificamente dos bancos de dados relacionais. Existem outros tipos, mas não são tão importantes.

 Em um banco de dados relacional, os dados são organizados em relações. Relações também são chamadas de tabelas. Uma tabela é descrita por um conjunto de atributos. Os atributos são formados por um identificador e um tipo de dado. Por exemplo: Uma tabela que representa os dados de alunos de uma escola pode ter um atributo cujo identificador é “nome_do_aluno” e o tipo de dado desse atributo é texto (o tipo texto tem o nome de varchar). O atributo também pode informar se ele permite valores nulos ou não. O atributo também é conhecido como as colunas de um tabela. Uma tabela possui um conjunto de registros. Cada registro possui um valor para cada atributo da tabela. O registro pode possuir também o valor nulo caso o atributo da tabela permita essa possibilidade. O valor nulo representa a ausência de valor.  O registro também é conhecido como uma linha da tabela. Os dados são inseridos através desses registros. 

### Consulta de registros, chaves e a linguagem SQL

Para acessar um registro de uma tabela, vamos precisar saber a definição de chave de uma tabela. Uma chave é um conjunto de um ou mais atributos que definem a unicidade de cada registro dentro de uma tabela. Ou seja, é a forma na qual é possível identificar um registro dentro da tabela. Como exemplo, podemos pensar que o atributo CPF poderia ser a chave utilizada em uma tabela, que tem os dados das pessoas físicas, para localizar os registros. Cada valor de CPF vai, então, identificar unicamente um registro de uma pessoa dentro dessa tabela. Assim, é através do nome da tabela e do valor da chave dessa tabela (por exemplo um número de cpf) que será possível montar um comando que irá buscar esse registro no banco de dados. Veremos mais tarde que essa busca será feita utilizando uma linguagem de “programação” chamada de SQL.

### Comandos utilizados na aula  

```sql
CREATE DATABASE TESTE; -- CRIA UM BANCO DE DADOS

USE TESTE; -- SELECIONA UM BANCO DE DADOS PARA SER UTILIZADO

-- CRIA UMA TABELA CHAMADA ALUNO
CREATE TABLE Aluno (
    Matricula INT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    DataInscricao Date NOT NULL);

-- CRIA UMA TABELA CHAMADA CURSO  
CREATE TABLE Curso (
    Codigo INT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Preco Decimal NOT NULL);

-- INSERE UM REGISTRO NA TABELA ALUNO

INSERT INTO Aluno (Matricula, Nome, DataInscricao) VALUES (1,'Fábio Neves','2022-06-04');
INSERT INTO Aluno (Matricula, Nome, DataInscricao) VALUES (2,'Antônio Neves','2022-06-04');

-- SELECIONA OS REGSITROS DE UMA TABELA  

SELECT * FROM Aluno WHERE MAtricula = 1;
SELECT * FROM Aluno WHERE MAtricula = 2;

-- REMOVER UMA TABELA  

DROP TABLE Aluno;
DROP TABLE Curso;

-- REMOVER UM BANCO DE DADOS

DROP DATABASE TESTE;

```