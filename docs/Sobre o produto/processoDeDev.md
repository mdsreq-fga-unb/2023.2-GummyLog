---
title: 'Processos de Desenvolvimento de Software'
sidebar_position: 2 
---

# Processos de Desenvolvimento de Software

## 3.1 - Cerimônias de Scrum

| Nome da Atividade | Método | Ferramenta | Entrega |
|-------------|-------------|-------------|-------------|
| Planning | Reunião online via Discord| Trello e Discord | Cards criados, com estórias de usuário e pontos de estória atribuídos e movimentação de tarefas do backlog para a Sprint |
| Checkpoint| Reunião online via Discord segunda e quarta. Devido a falta de disponibilidade dos membros em fazer a Daily, optamos por fazer duas reuniões um pouco mais extensas duas vezes por semana | Discord| Ata da reunião contendo progresso, problemas encontrados e planejamento |
| Reunião com cliente| Reunião online via Discord aos domingos | Discord | Ata da reunião |
| Review| Reunião online via Discord ao final de cada Sprint | Trello e Discord | Ata da reunião com relatório da Sprint |
| Retrospectiva| Reunião online via discord ao final de cada | Discord | Ata da reunião com quadro da retrospectiva |
| Daily Scrum | **Não serão realizadas** as cerimônias de Daily Scrum tendo em vista a incompatibilidade de horário dos membros da equipe |

<br/>

## Praticas XP a ser utilizadas

| Práticas XP      | Onde vai ser utilizado | Justificativa |
| ----------- | ----------- |-----------|
| TDD (Test Driven Development)      | Desenvolvimento       | O TDD será usado porque ajudará na detecção precoce de erros no código (bugs ou erros lógicos), o que impede que eles causem problemas quando o programa for mais complexo. Isso garante que cada entrega do programa seja 100% funcional. |
| Pair programming   | Desenvolvimento        | Será utilizado no caso de alguém ter problemas para desenvolver alguma parte do projeto, os membros da equipe têm diferentes níveis de experiência em diversos temas, devido a este um problema que para um membro pode ser muito complicado para outro pode ser mais simples, enquanto fisicamente trabalhar em um único computador não é possível, se pode usar a função de compartilhamento de tela em Discord como uma alternativa. |
| Integração contínua   | Desenvolvimento        | Será usado para evitar a integração de código longo e complexo que pode levar muito tempo do ciclo de desenvolvimento, realizar a integração enquanto o código é mais simples evitará muitos problemas. |
| Testes de Aceitação   | Planning        | Os testes de aceitação ajudar-nos-ão a concentrar-nos nas partes que são realmente importantes e a evitar aditamentos desnecessários e sem valor. |
| Pequenos lançamentos   | Final do ciclo        | Pequenos lançamentos nos ajudarão a não realizar entregas muito grandes e complexas, estas devem ser o menor possível para que sejam mais compreensíveis para o resto da equipe |
| Metáfora   | Reunião com cliente        | O cliente não é uma pessoa que tenha muita experiência com temas técnicos relacionados ao software, por isso se utilizará a metafora para tentar um melhor entendimento dos funcionamentos do programa. |
| Posse Coletiva   | Desenvolvimento        | Acesso total de todos os membros da equipe a todas as partes do projeto permite analisar o código e ter um melhor entendimento do que os outros fizeram para facilitar a integração, além de facilitar a busca de erros. |
| Padrões de Codificação   | Planning        | Ajudará a ter um codigo mais simples e legível, para que se facilite aos membros da equipe entender que faz cada parte do codigo.  |
| Design Simples   | Todas as fases        | Vai ajudar a evitar que o código seja demasiado complicado para garantir que este corre rapidamente. |
| Refatoração   | Review        | Além de ajudar a manter o código limpo, este é um requisito de muitas das práticas XP que vamos usar. |
| Jogo do Planejamento   | Não será usado        | Isto não será usado já que o tempo com o cliente é limitado e consideramos que o jogo de planejamento leva muito tempo o que pode afetar negativamente a produtividade das reuniões. |
| Ciclo semanal   | Não será usado        | Consideramos que os membros desta equipa não têm tempo suficiente para completar um ciclo de desenvolvimento em apenas uma semana. |
| Cliente presente   | Não será usado        | A disponibilidade do cliente não permite que esta prática seja aplicada. |
| Ritmo sustentável   | Não será usado        | Devido à imprevisibilidade das atividades semanais correspondentes a outros cursos, consideramos que é impossível ter um número de horas fixas por semana.|

## Backlog de Requisitos

## MVP1

### Requisitos Funcionais:
* Registro de Produtos novos:
    + US: Eu, como usuário, quero preencher um formulário que irá registrar um novo produto em meu estoque, para poder fazer um melhor controle dos produtos que tenho disponíveis
        + Valor de negócio: 13

        + Viabilidade: 13

        + Complexidade: 1

        + Média: 9

* Rastreamento de Estoque:
    + US: Eu, como usuário, quero visualizar o estoque de produtos com informações de quantidade e localização do produto para ter noção do que tenho disponível para vender.
        + Valor de negócio: 13

        + Viabilidade: 8

        + Complexidade: 3

        + Média: 8

* Recuperação de senha por e-mail:
    + US: Eu, como usuário, quero recuperar minha conta por e-mail para não perder acesso aos meus dados do GummyLog.
        + Valor de negócio: 8

        + Viabilidade: 8

        + Complexidade: 5

        + Média: 7


* Inserção de um produto já existente no estoque:
    + US: Eu, como usuário, quero inserir uma nova quantidade em um produto já existe no estoque a fim de manter o histórico de um produto que já foi cadastrado anteriormente e ter uma noção de como meu estoque realmente está.
        + Valor de negócio: 8

        + Viabilidade: 8

        + Complexidade: 3

        + Média: 6,333


* Notificações de Estoque Baixo:
    + US: Eu, como usuário, quero receber notificações dentro da aplicação e por e-mail quando o estoque de um dos meus produtos estiver baixo para que eu não esqueça de reabastecer o estoque desse produto.
        + Valor de negócio: 3

        + Viabilidade: 8

        + Complexidade: 5

        + Média: 5.3333

* Autenticação de usuário por e-mail:
    + US: Eu, como usuário, quero realizar autenticação através do endereço de e-mail cadastrado a fim de manter meus dados seguros com minhas credenciais.

* Criação de usuário por e-mail:
    + US: Eu, como usuário, quero criar uma conta no GummyLog usando meu endereço de e-mail para ter mais controle sobre a minha conta.
        + Valor de negócio: 3

        + Viabilidade: 2

        + Complexidade: 5

        + Média: 3.333

## MVP2

* Criar uma nova venda relacionando produtos em estoque:
    + US: Eu, como usuário, quero registrar uma venda para reservar a saída de um produto do meu estoque a fim de não correr o risco de fazer vendas sem o produto em estoque.
        + Valor de negócio: 8

        + Viabilidade: 8

        + Complexidade: 5

        + Média: 7

* Dashboard com métricas de entrada e saída de produtos:
    + US: Eu, como usuário, quero visualizar um dashboard com métricas de entrada e saída de produtos a fim de ter uma melhor noção de como meu negócio está se saindo.
        + Valor de negócio: 8

        + Viabilidade: 3

        + Complexidade: 8

        + Média: 6,33

* Escolher para qual e-mail as notificações serão enviadas:
    + US: Eu,, como usuário, quero escolher para qual e-mail as notificações serão enviadas a fim de manter as notificações centralizadas em um endereço reservado para essa finalidade.
        + Valor de negócio: 2

        + Viabilidade: 13

        + Complexidade: 1

        + Média: 5.3333

* Manutenção de status de Pedidos:
    + US: Eu, como usuário, quero alterar o status dos produtos em estoque a medida que as vendas forem andando para poder ter controle do meu processo de retirada do estoque e entrega para o cliente.
        + Valor de negócio: 5

        + Viabilidade: 8

        + Complexidade: 2

        + Média: 5

* Sugestão de qual unidade de armazenamento o produto deve ser retirado:
    + US: Eu, como usuário, quero receber sugestões de qual unidade de armazenamento um produto deve ser retirado para reduzir os custos de uma entrega.
        + Valor de negócio: 3

        + Viabilidade: 3

        + Complexidade: 8

        + Média: 4.666666

* Criação de usuário por meio de oAuth.
    + US: Eu, como usuário, quero criar uma conta no GummyLog usando minha conta Google para poupar tempo ao criar a conta.
        + Valor de negócio: 3

        + Viabilidade: 5

        + Complexidade: 3

        + Média: 3.666666

## Requisitos Não Funcionais:
* Sempre que um erro não relacionado ao uso da interface pelo usuário ocorrer ele deve ser registrado em um log e notificar a equipe responsável.
* O usuário deverá realizar qualquer funcionalidade com até 5 cliques.
* O sistema deve ajustar dinamicamente o layout e o conteúdo para diferentes tamanhos de tela, permitindo uma visualização apropriada em telas pequenas, médias e grandes.

# Padrões de UI

**Padrões e princípios**

* Utilização da identidade visual do negócio na interface: familiaridade do usuário.

* Uso de um padrão de cores em relação a notificações e warnings: aprendizagem, familiaridade do usuário, consistência, surpresa mínima e recuperabilidade.

* Uso de perguntas de confirmação para o usuário em determinadas ações: aprendizagem, consistência, surpresa mínima.

* A língua nativa dos usuários será a padrão da interface: aprendizagem e familiaridade do usuário.

* Acesso a uma funcionalidade exigirá do usuário até 5 cliques: aprendizagem e consistência.

* Ajuda textual em botões e campos de preenchimento: orientação ao usuário.

**Modalidade das interações**

* Resposta da questão: alteração nas quantidades de produtos, nos status de pedidos, por exemplo.

* Seleção do menu: menus de ações a serem tomadas e/ou informações a serem exibidas.

* Preenchimento de formulário: no cadastro de novos itens, por exemplo.

**Paleta de cores e fonte**

Geral: cinza(201F1F), branco(FFFFFF), tons de lilás(AA67B5, 704577).

Warnings e notificações: vermelho(C53131), laranja(F47933), verde(308E2E).


## Referências bibliográficas

- O Guia do Scrum, Ken Schwaber e Jeff Sutherland
- Extreme Programming Explained: Embrace Change,  Kent Beck e Cynthia Andres
- Slides Métodos de Desenvolvimento de Software - Desing de Interface, George Marsicano