---
layout: post
title:  "Um framework para monitorar aplicações ASP.Net Core"
date:   2019-08-21
permalink: "/2019/08/health-check.html"
comments: true
categories: code
---
Na minha carreira, trabalhei em empresas que ofereciam produtos ou serviços na forma de aplicações web. Como elas precisavam estar sempre disponíveis, era muito importante ter alguma forma de monitorá-las.
Isso, geralmente, era responsabilidade de uma equipe de operações.

Para monitorar o estado da rede e da infraestrutura, essas equipes utilizam aplicações específicas que alertam quando ocorre problema e quando eles são resolvidos. Podemos citar o Nagios e o Zabbix como exemplo dessas ferramentas.

No caso de aplicações web, esse tipo de monitoramento não é suficiente para garantir que elas estão funcionando. Em alguns casos, essas aplicações podem ficar fora do ar sem que tenha algum problema na infraestrutura ou na rede. Como exemplo, erros na configuração ou bugs podem fazer com que a aplicação apresente erros sem que seja detectado por essas ferramentas. A solução para resolver esse problema é configurar o Nagios ou o Zabbix para fazer uma ou mais requisições de forma a cobrir os pontos prováveis de falha.

Do ponto de vista prático, essa técnica precisa da ajuda dos desenvolvedores. Eles precisam explicar para a equipe de operações quais são os melhores cenários para serem utilizados. Entretanto, nem sempre é simples esse procedimento. Na prática o desenvolvedor implementa uma url com o objetivo específico de testar a disponibilidade da sua aplicação ao invés de definir um conjunto de chamadas para serem executadas pelo monitoramento.

Para simplificar e padronizar essa técnica, irei apresentar uma solução simples que pode ser usada em aplicações web implementadas usando o ASP.Net Core. A mesma pode ser utilizada também em aplicações feitas com o ASP.Net legado.

Primeiro precisamos definir uma interface que será usada como o ponto de extensão da nossa solução. A interface tem um método chamado Check que não tem parâmetros e retorna um booleano. A checagem da aplicação será feita implementando essa interface para cada tipo de verificação. A ideia aqui é criar uma sequência de passos. A aplicação estará funcionando se todos os passos forem executados com sucesso.

<script src="https://gist.github.com/fabio-neves/14d0a84dc02b34bac16c130cd37d4650.js"></script>

Após criarmos a interface, vamos criar um middleware. O middleware no nosso caso será o responsável por interceptar as requisições, verificar se a requisição é uma requisição de monitoramento e se for, ela deve rodar a sequência de passos de verificação. Observe que o middleware recebe por injeção de dependência uma coleção de objetos do tipo IHealthCheckServices. É essa coleção que será usada para definir se a aplicação está ou não funcionando. Note que se alguma chamada feita ao método Check retornar falso a aplicação é considerada não funcionando. Nesse caso, a requisição irá terminar com uma mensagem de erro e o status http 500.

<script src="https://gist.github.com/fabio-neves/5cd1f50324b0e17472ed08e7981af4ac.js"></script>

Até agora, definimos o funcionamento principal do nosso framework. Vale explicar também como se faz para integrar esse código nas aplicações ASP.Net Core. A configuração é toda feita na classe Startup. No método Configure, iremos registrar nosso middleware. No método ConfigureServices, iremos registrar todas as classes que implementam nossa interface IHealthCheckServices. Para facilitar esse trabalho e organizar melhor o código vamos utilizar uma classe estática com alguns métodos de extensão para facilitar essa configuração.

<script src="https://gist.github.com/fabio-neves/b7071d9f079633c0daa53b83cfc69788.js"></script>

Nesse artigo, minha proposta foi apresentar um framework simples com o objetivo de facilitar o processo de desenvolvimento e monitoramento de aplicações web. Dessa forma os desenvolvedores não irão precisar reescrever código quando implementarem suas urls de monitoramento. Verificar se todas as connectionstrings ou se os endereços de apis estão configurados certos, podem ser compartilhados entre diversas aplicações. A equipe de operações também terá uma forma padrão de verificar se as aplicações ASP.Net Core estão funcionando. Elas poderão definir a url ou até mesmo como querem receber a resposta do servidor. Como sugestão, eu disponibilizei esse framework como um pacote nuget. Caso seja de seu interesse, você pode instalar usando o seguinte comando.

```powershell
Install-Package FNS.HealthCheck 
```
 O código fonte completo dessa solução está disponível no meu repositório do [github][github]{:target="_blank"}. 


[github]: https://github.com/fabio-neves/HealthCheck
