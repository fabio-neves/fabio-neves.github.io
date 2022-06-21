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

### Banco de Dados, Tabelas e Tuplas (Registros)

O banco de dados pode ser visto como conjuntos de dados que estão relacionados entre si com o objetivo de juntos fornecerem informações para seus usuários. Iremos tratar nesse curso dos bancos de dados relacionais. Existem outros tipos, mas não são tão importantes.

 Em um banco de dados relacional, os dados são organizados em relações. As relações possuem uma estrutura de tabela. Uma relação é descrita por um conjunto de atributos. Os atributos são formados por um identificador e um tipo de dado. Por exemplo: Uma tabela que representa os dados de alunos de uma escola pode ter um atributo cujo identificador é “nome_do_aluno” e o tipo de dado desse atributo é texto (o tipo texto tem o nome de varchar). O atributo também pode ser entendido como sendo as colunas da tabela. 
 
 A relação possui um conjunto de tuplas. Cada tupla define um valor para cada atributo da relação. Podemos dizer também que a tupla define os valores das colunas de uma determinada linha da tabela. A tupla pode definir também o valor nulo para algum atributo da relação. Veremos mais tarde que a tabela pode criar uma restrição obrigando que a tupla tenha sempre que definir um valor para determinados atributos. 

### Consulta, chaves e a linguagem SQL

Para acessar uma tupla de uma relação, vamos precisar saber a definição de chave. Uma chave é um conjunto de um ou mais atributos que definem a identidade de cada tupla dentro de uma relação. Ou seja, é a forma na qual é possível identificar uma linha dentro da tabela. Como exemplo, podemos pensar que o atributo CPF poderia ser a chave utilizada em uma tabela, que tem os dados das pessoas físicas, para localizar uma determinada pessoa. Cada valor de CPF vai, então, identificar unicamente um registro de uma pessoa dentro dessa tabela. Assim, é através do nome da tabela e do valor da chave dessa tabela (por exemplo um número de cpf) que será possível montar um comando que irá buscar esse registro no banco de dados. Veremos mais tarde que essa busca será feita utilizando uma linguagem de “programação” chamada de SQL.

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