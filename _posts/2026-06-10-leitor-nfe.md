---
layout: post
title:  "Leitor de Nfe usando Power Automate"
date:   2026-06-10
permalink: "/2026/06/leitornfe.html"
comments: true
categories: Low Code
---

Tudo começou com uma ideia antiga. Gostaria de registrar em um banco de dados todos os itens que eu comprei no supermercado e seus preços. Acho que nem é preciso dizer o valor que isso tem para quem faz as compras da casa. Posso usar essa informação para fazer a contabilidade da casa de forma mais detalhada, gerar uma nova lista de compras, controlar a minha despensa e até mesmo pesquisar preços em outros estabelecimentos. No mundo da IA, essa informação é essencial para que o agente assuma a função na casa. Então, antes de ficar viajando na maionese, precisei validar a minha ideia. 
<!--more--> 

Uma forma simples de obter as informações da compra é ler a nota fiscal que você recebe após o pagamento. Antigamente você teria que fazer o OCR dessa nota, mas hoje em dia as notas já vêm com um QR Code apontando para um link da receita, onde essas informações já estão estruturadas em um documento HTML. 

O próximo passo seria elaborar a solução: criar uma forma para ler o QR, ler as informações do HTML e salvar tudo em um banco de dados.

Uma arquitetura poderia ser desenhada da seguinte maneira.

<div style="display:flex; justify-content: center">
    <img src="/assets/images/leitornfe/arquitetura.png" alt="Arquitetura" />
</div>

O celular faria o papel de ler o QR e de compartilhar o link da nota fiscal por e-mail. Na minha conta de e-mail, a nota cairá em uma pasta específica que será usada pelo [Power Automate][powerautomate-ref]{:target="_blank"} para ler esse e-mail. Ao final do processamento o [Power Automate][powerautomate-ref]{:target="_blank"} irá mover esse e-mail para lixeira.

Além de ler o e-mail e movê-lo para lixeira, o [Power Automate][powerautomate-ref]{:target="_blank"} acessará o link da nota fiscal, lerá suas informações e, por fim, as salvará no banco de dados.

O banco de dados guardará todas as informações. Nessa solução, utilizei o sqlite como banco de dados. O modelo de dados seguiu o seguinte diagrama de ER

<div style="display:flex; justify-content: center">
    <img src="/assets/images/leitornfe/diagrama-er.png" alt="Diagrama de ER" />
</div>

Em linhas gerais o módulo do [Power Automate][powerautomate-ref]{:target="_blank"} seguirá o seguinte diagrama de fluxo:

<div style="display:flex; justify-content: center">
    <img src="/assets/images/leitornfe/fluxo-power-automate.png" alt="Diagrama de Fluxo" />
</div>

O ponto principal do fluxo é a extração das informações da nota. Para isso, desenvolvi uma função javascript responsável pela conversão do html em um objeto JSON. A página já possui JQuery carregado, por isso foi mais simples buscar as informações necessárias.

Esse fluxo do [Power Automate][powerautomate-ref]{:target="_blank"} pode ser agendado para ser executado de tempos em tempos. Para isso, é necessário criar uma tarefa no Gerenciador de Tarefas do Windows e passar a linha de comando necessária. Algo parecido com esta linha aqui:

```cmd
PAD.Console.Host.exe "ms-powerautomate:/console/flow/run?workflowName=Leitor NFe
```

Essa publicação teve o objetivo de mostrar a experiência que eu tive com o [Power Automate][powerautomate-ref]{:target="_blank"} para resolver um problema prático. Acho que ele serve como um bom ponto de partida para outras pessoas se aventurarem nesse mundo e terem outras ideias de automação. Eu vou deixar [aqui][repositorio-ref]{:target="_blank"} o link do repositório onde se encontram o código do fluxo. Caso alguém se interesse em sugerir melhorias, não deixe de fazer um pull request.

[repositorio-ref]: https://github.com/fabio-neves/LeitorNfe
[powerautomate-ref]: https://www.microsoft.com/pt-br/power-platform/products/power-automate