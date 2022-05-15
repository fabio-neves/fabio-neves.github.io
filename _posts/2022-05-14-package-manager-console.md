---
layout: post
title:  "Console do Gerenciador de Pacotes NuGet - Visual Studio"
date:   2021-02-28
permalink: "/2021/05/console-gerenciador-pacotes.html"
comments: true
categories: Visual Studio
---

Quem programa em .Net para web já está acostumado a utilizar pacotes [NuGet][nuget-home]{:target="_blank"} em suas aplicações. Para quem não conhece, essa é uma forma moderna de compartilhar código entre aplicações. O código compartilhado, que resolve um problema ou disponibiliza uma funcionalidade comum a diversas aplicações, é compilado e depois empacotado em um arquivo zip de extensão.nupkg para ser publicado em um repositório. <!--more--> Outros desenvolvedores poderão, utilizando uma ferramenta própria, consultar, baixar e instalar esse código de forma a adicionar essa funcionalidade em suas aplicações. No Visual Studio isso pode ser feito de duas formas. A primeira é utilizando o Package Manager UI. Para utilizar, o programador deve selecionar com o botão direito o projeto e escolher a opção Gerenciar Pacotes de NuGet.... A segunda opção é uma ferramenta de linha de comando que se encontra no menu Ferramenta, na opção Nuget Gerenciador de pacotes > Gerenciador de Pacotes Console. 

![Hello World!](/assets/img/console-gerenciador-pacotes-fig-01.png)

Nesta opção o desenvolvedor utiliza comandos específicos do poweshell para localizar, instalar, atualizar e remover os pacotes NuGet de sua aplicação. Os comandos mais conhecidos são o Install-Package e o Uninstall-Package. Você só precisa passar o nome do pacote que deseja instalar ou desinstalar e ele já faz a instalação ou a desinstalação do pacote. No caso da instalação será utilizada a última versão, mas existe também a opção de utilizar o parâmetro **-Version** com o número da versão específica. 

```powershell
Install-Package FNS.CRUDService.AspNetCore -Version 1.0.0
Uninstall-Package FNS.CRUDService.AspNetCore 
```

Existem também outros 3 comandos que valem a pena serem mencionados: [Find-Package][find-package-ref]{:target="_blank"}, [Get-Package][get-package-ref]{:target="_blank"} e [Update-Package][update-package-ref]{:target="_blank"}.

O [Find-Package][find-package-ref]{:target="_blank"} é uma ótima opção para fazer busca no repositório de pacotes. Para buscar por algum pacote basta escrever Find-Package e o termo relacionado a busca. Associado a outros comandos do powershell você pode formar uma query. Por exemplo para saber quais são as versões inferiores a um determinado número.

```powershell
Find-Package -id Microsoft.AspNetCore.Authentication.JwtBearer -AllVersions | foreach { $_.Versions} | Where Version -lt 6.0.0 | select version -first 10
```

Já ao digitar [Get-Package][get-package-ref]{:target="_blank"} no Console Gerenciador de Pacotes você lista todos os pacotes instalados na solução. É uma forma prática de fazer um levantamento da sua aplicação. Você também pode filtrar pelo nome do projeto com outros comandos powershell. 

```powershell
Get-Package | where ProjectName -eq FNS.MinhaApi
```

O Get-Package quando utilizado com a flag -update lista quais pacotes possuem versões mais novas no repositório do [NuGet][nuget-home]{:target="_blank"}. Muito útil quando você precisa saber quais são os pacotes que estão desatualizados.

```powershell
Get-Package -update
```

Para atualizar todos os pacotes do projeto basta utilizar o comando [Update-Package][update-package-ref]{:target="_blank"}. Caso queira atualizar apenas um pacote específico utilize o comando junto com o identificador do pacote. Existe o parâmetro -Version onde é possível passar a versão específica a ser atualizada.

Esse texto teve o propósito de incentivar os desenvolvedores .Net a utilizarem a ferramenta do Visual Studio chamada Console do Gerenciador de Pacotes. Ela é uma alternativa produtiva e flexível para gerenciar os pacotes NuGet das nossas aplicações.

[find-package-ref]: https://docs.microsoft.com/pt-br/nuget/reference/ps-reference/ps-ref-find-package
[get-package-ref]: https://docs.microsoft.com/pt-br/nuget/reference/ps-reference/ps-ref-get-package
[update-package-ref]: https://docs.microsoft.com/pt-br/nuget/reference/ps-reference/ps-ref-update-package
[nuget-home]: https://www.nuget.org/