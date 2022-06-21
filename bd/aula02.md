---
layout: curso
title: Aula 02
---

# Banco de Dados

## Aula 02 - Integridade referencial

### Banco de dados, Relação, Tuplas, Atributos

Na aula passada vimos que um banco de dados relacional possui um conjunto de relações. As relações são as tabelas do banco de dados. Vimos também que cada relação possui um conjunto de tuplas. As tuplas são as linhas de uma tabelas. Uma tabela possui um nome e é descrita por um conjunto de atributos. Os atributos formam as colunas dessa tabela. Cada atributo possui um nome e um tipo de dado. Vimos que o tipo de dado é o formato que o dado possui. Por exemplo o dado pode ter o tipo de dado numérico onde ele é representado por números ou pode ter um tipo de dado texto onde o dado possui a forma de uma sequência de caracteres alfanuméricos.

### Superchave, chave candidata e chave primária

Uma superchave é um conjunto de atributos de uma relação no qual os valores desses atributos não se repetem dentro da relação. Podemos dizer também que a superchave determina a unicidade de cada registro dentro da relação.
Uma chave é quando o conjunto de atributos é mínimo. Isso quer dizer que caso se remova um atributo desse conjunto ela já não consegue determinar unicamente as tuplas dentro de uma relação. Uma relação pode ter mais de uma chave. Nesse caso, cada chave é também uma chave candidata. Chamamos de chave primária a chave candidata escolhida para ser utilizada como o identificador das tuplas dentro da relação.

### Chave estrangeira

### Relacionamentos entre relações