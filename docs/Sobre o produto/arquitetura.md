---
title: Arquitetura do Produto
sidebar_position: 3
---

# Arquitetura do produto

A arquitetura Cliente-server é composta por dois componentes, o fornecedor, o qual se encarrega de prover os serviços e o consumidor, o qual usa os serviços.

Nesta arquitetura podem existir vários clientes conectados a um único servidor para recuperar os recursos necessários para funcionar.

O cliente neste caso é apenas uma camada para mostrar os dados, é o servidor que faz todas as tarefas pesadas, porém ambas as partes são igualmente importantes, o cliente é completamente inutil se o servidor não estiver disponível e o servidor sozinho não poderia ser usado. 

A arquitetura Client-server no caso do GummyLog funciona da seguinte maneira o usuário, neste caso um membro do GummyStore, realiza um pedido através de uma interface no ReactJS, depois desta interface envia solicitações ao sistema de back-end que usa ExpressJS, este se encarregará de conectar a parte de front-end com o servidor SQL, posteriormente se envia as querendo ao servidor que responde com dados, logo a parte de back-end envia estes dados à parte front-end para que o usuário possa visualizá-los.

# Justificativa

Este modelo foi escolhido de entre muitos outros, já que se alinha melhor às necessidades do programa, em formas que se descreverão a seguir.

## Consistência dos dados:

Porque a informação reflete o estoque físico de produtos e as ordens recebidas não podem ser perdidas uma vez que o programa é fechado, existem muitas maneiras de fazer isso, mas nós escolhemos o modelo cliente-servidor, que seria um servidor central, isto é bem-vindo com os benefícios de ter a data centralizada, pelo que é mais fácil assegurá-la e prover autorizações a usuários.

## Compartilhamento:

Atualmente existem 2 membros na equipe de GummyStore, estes 2 precisarão ter acesso aos dados em lugares distantes e em computadores separados, não somente computadores mas também podem ser telefones celulares, para garantir o acesso aos dados independentemente do local e do dispositivo utilizado será utilizado o servidor centralizado da arquitetura Client-Server para lidar com os dados.

## Requests:

A maioria das funcionalidades da aplicação são de modificação, leitura e eliminação de dados coisas nas quais a arquitetura Client-Server destaca-se.

## Escalabilidade:

GummyStore pretende expandir-se no futuro, por isso é necessário autenticar mais usuários e armazenar mais produtos, em uma arquitetura onde toda essa informação é centralizada é muito mais fácil realizar as mudanças necessários.

## Funcionalidade:

Permite que com buscas mais específicas que limitam os resultados na base de dados, se possa realizar uma filtragem dos dados realizada pelo servidor e estes sejam enviados à aplicação a qual simplesmente deve mostrá-los.

```mermaid
C4Context
title Contexto da Arquitetura do MVP1

Enterprise_Boundary(g0, "GummyStore") {
    Person(Partner, "Sócio", "Um dos donos da GummyStore")

    System_Boundary(g1, "GummyLog") {
        System(SystemB, "ReactJS", "Interface de usuário")
        System(SystemA, "ExpressJS", "Servidor back-end que recebe e responde requisições e <br/> aplica regras de negócio")
    }
    SystemDb_Ext(DB, "PostgreSQL", "Banco de dados que armazena informações de SKUs")

    Rel(Partner, SystemB, "Realiza solicitações de adição, remoção, <br/> reabastecimento e apagar SKUs")
    UpdateRelStyle(Partner, SystemB, $lineColor="red", $textColor="red", $offsetX="-235", $offsetY="-50")
    
    Rel(SystemB, SystemA, "Envia a solicitação para o <br/> back-end aplicar as regras de negócio")
    UpdateRelStyle(SystemB, SystemA, $lineColor="red", $textColor="red", $offsetY="40", $offsetX="-80",)
    
    Rel(SystemA, DB, "Envia as queries para alterar <br/> os dados no banco")
    UpdateRelStyle(SystemA, DB, $lineColor="red", $textColor="red", $offsetX="15")
    
    Rel(DB, SystemA, "Envia dados para o back-end <br/> como resposta às queries")
    UpdateRelStyle(DB, SystemA, $lineColor="blue", $textColor="blue", $offsetX="-170")

    Rel(SystemA, SystemB, "Envia a resposta <br/> das solicitações <br/> do front-end")
    UpdateRelStyle(SystemA, SystemB, $lineColor="blue", $textColor="blue", $offsetY="-35", $offsetX="-45")

    Rel(SystemB, Partner, "Envia a resposta das <br/> solicitações do usuário")
    UpdateRelStyle(SystemB, Partner, $lineColor="blue", $textColor="blue", $offsetY="-50", $offsetX="10")
}

```
