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

### Mapeamento de personas 

| Persona | Descrição |
| ----------- | ----------- |
| Usuário | Refere-se aos dois sócios  da Gummy's Store |

### Requisitos Funcionais:

| Valor de Fibonacci | Significado                                           |
|-------------------|------------------------------------------------------|
| 0                 | Tarefa sem esforço significativo, praticamente concluída.    |
| 1                 | Tarefa muito pequena, pode ser concluída rapidamente.     |
| 2                 | Tarefa pequena, requer um esforço mínimo.                 |
| 3                 | Tarefa de tamanho moderado, levará algum tempo para concluir. |
| 5                 | Tarefa um pouco maior, levará algum tempo considerável.  |
| 8                 | Tarefa de tamanho significativo, requer esforço substancial. |
| 13                | Tarefa grande, complexa e com alta incerteza.              |

| Temas | Épicos | User Story |  Valor de Negocio | Viabilidade | Complexidade |  Média |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | --------|
| **[TE01]** Gerenciamento de Produtos | **[EP01]** Gestão de Estoque e Inventário| **[US01:]** Eu, como usuário, quero preencher um formulário que irá registrar um novo produto em meu estoque, para poder fazer um melhor controle dos produtos que tenho disponíveis | 13 | 13 | 1 | 9 |
| **[TE01]** Gerenciamento de Produtos | **[EP01]** Gestão de Estoque e Inventário | **[US02:]** Eu, como usuário, quero visualizar o estoque de produtos com informações de quantidade e localização do produto para ter noção do que tenho disponível para vender. | 13 | 8 | 3 |  8 |
| **[TE01]** Gerenciamento de Produtos | **[EP03]** Plataforma de logística com acesso restrito | **[US08:]** Eu, como usuário, quero recuperar minha conta por e-mail para não perder acesso aos meus dados do GummyLog. | 8 | 8 | 5 | 7 |
| **[TE02]**  Otimização Logistica | **[EP02]** Processamento de Pedidos e Entregas | **[US11:]** Eu, como usuário, quero registrar uma venda para reservar a saída de um produto do meu estoque a fim de não correr o risco de fazer vendas sem o produto em estoque.| 8 | 8 |  5 | 7 |
| **[TE01]** Gerenciamento de Produtos | **[EP01]** Gestão de Estoque e Inventário | **[US10:]** Eu, como usuário, quero inserir uma nova quantidade em um produto já existe no estoque a fim de manter o histórico de um produto que já foi cadastrado anteriormente e ter uma noção de como meu estoque realmente está.| 8 | 8 |  3 | 6.333 |
| **[TE02]**  Otimização Logistica | **[EP01]** Gestão de Estoque e Inventário | **[US13:]** Eu, como usuário, quero visualizar um dashboard com métricas de entrada e saída de produtos a fim de ter uma melhor noção de como meu negócio está se saindo. | 8 | 3 | 8 | 6.33 |
| **[TE01]** Gerenciamento de Produtos | **[EP01]** Gestão de Estoque e Inventário | **[US03:]** Eu, como usuário, quero receber notificações dentro da aplicação e por e-mail quando o estoque de um dos meus produtos estiver baixo para que eu não esqueça de reabastecer o estoque desse produto. | 3 | 8 | 5 | 5.333|
| **[TE02]**  Otimização Logistica | **[EP03]** Plataforma de logística com acesso restrito | **[US14:]** Eu,, como usuário, quero escolher para qual e-mail as notificações serão enviadas a fim de manter as notificações centralizadas em um endereço reservado para essa finalidade. | 2 | 13 | 1 | 5.333| 
| **[TE02]**  Otimização Logistica |  **[EP02]** Processamento de Pedidos e Entregas | **[US04:]** Eu, como usuário, quero alterar o status dos produtos em estoque a medida que as vendas forem andando para poder ter controle do meu processo de retirada do estoque e entrega para o cliente. | 5 | 8 | 2 | 5 |
| **[TE02]**  Otimização Logistica |  **[EP02]** Processamento de Pedidos e Entregas | **[US12:]** Eu, como usuário, quero receber sugestões de qual unidade de armazenamento um produto deve ser retirado para reduzir os custos de uma entrega. |  3 | 3 | 8 | 4.66 |
| **[TE02]**  Otimização Logistica | **[EP03]** Plataforma de logística com acesso restrito | **[US05:]** Eu como usuário quero realizar autenticação através do endereço de e-mail cadastrado a fim de manter meus dados seguros com minhas credenciais.| 3 | 2 | 5 | 3.333|
| **[TE02]**  Otimização Logistica | **[EP03]** Plataforma de logística com acesso restrito | **[US06:]** Eu como usuário quero criar uma conta no GummyLog usando meu endereço de e-mail para ter mais controle sobre a minha conta.| 3 | 2 | 5 | 3.333|

### Requisitos Não Funcionais

| Categoria | Requisito |
| ----------- | ----------- |
| **Usabilidade** | **[RNF01]** O sistema deve ajustar dinamicamente o layout e o conteúdo para diferentes tamanhos de tela, permitindo uma visualização apropriada em telas pequenas, médias e grandes. | 
| **Confiabilidade**|  **[RNF02]** O sistema deve proporcionar um ambiente suficientemente seguro para garantir que apenas aqueles registrados no sistema tenham acesso a ele.|
| **Interface** | **[RNF03]** O sistema deve conter estilização das páginas com cores, fontes, botões e icones padronizados|
| **Usabilidade**  | **[RNF04]** O usuário deverá realizar qualquer funcionalidade no sistema com até 5 cliques| 
| **Confiabilidade**| **[RNF05]** O sistema deve registrar erros não relacionados à interação do usuário em um log e notificar a equipe responsável | 
| **Suportabilidade** | **[RNF06]** O sistema  deve ser compatível com as versões de até Novembro de 2023 dos navegadores modernos como Chrome, Safari, Edge, Firefox e Opera. |

## MVPs

### MVP1

| Tema | Épico | User Story |   
| ----------- | ----------- |----------- |
|**[TE01]** Gerenciamento de Produtos | **[EP01]** Gestão de Estoque e Inventário | **[US01:]** Eu, como usuário, quero preencher um formulário que irá registrar um novo produto em meu estoque, para poder fazer um melhor controle dos produtos que tenho disponíveis| 
| **[TE01]** Gerenciamento de Produtos | **[EP01]** Gestão de Estoque e Inventário | **[US02:]** Eu, como usuário, quero visualizar o estoque de produtos com informações de quantidade e localização do produto para ter noção do que tenho disponível para vender. |
| **[TE01]** Gerenciamento de Produtos | **[EP03]** Plataforma de logística com acesso restrito | **[US08:]**  Eu, como usuário, quero recuperar minha conta por e-mail para não perder acesso aos meus dados do GummyLog. |
| **[TE01]** Gerenciamento de Produtos | **[EP01]** Gestão de Estoque e Inventário | **[US10:]** Eu, como usuário, quero inserir uma nova quantidade em um produto já existe no estoque a fim de manter o histórico de um produto que já foi cadastrado anteriormente e ter uma noção de como meu estoque realmente está. |
| **[TE01]** Gerenciamento de Produtos | **[EP01]** Gestão de Estoque e Inventário | **[US03:]** Eu, como usuário, quero receber notificações dentro da aplicação e por e-mail quando o estoque de um dos meus produtos estiver baixo para que eu não esqueça de reabastecer o estoque desse produto. |

###  MVP2
| Tema | Épico | User Story |   
| ----------- | ----------- |----------- |
| **[TE02]** Otimização Logistica |  **[EP02]** Processamento de Pedidos e Entregas | **[US11:]** Eu, como usuário, quero registrar uma venda para reservar a saída de um produto do meu estoque a fim de não correr o risco de fazer vendas sem o produto em estoque.|
| **[TE02]** Otimização Logistica | **[EP01]** Gestão de Estoque e Inventário | **[US13:]** Eu, como usuário, quero visualizar um dashboard com métricas de entrada e saída de produtos a fim de ter uma melhor noção de como meu negócio está se saindo|
| **[TE02]**  Otimização Logistica | **[EP03]** Plataforma de logística com acesso restrito | **[US14:]** Eu,, como usuário, quero escolher para qual e-mail as notificações serão enviadas a fim de manter as notificações centralizadas em um endereço reservado para essa finalidade. |
| **[TE02]**  Otimização Logistica | **[EP02]** Processamento de Pedidos e Entregas | **[US04:]** Eu, como usuário, quero alterar o status dos produtos em estoque a medida que as vendas forem andando para poder ter controle do meu processo de retirada do estoque e entrega para o cliente |
| **[TE02]**  Otimização Logistica  | **[EP02]** Processamento de Pedidos e Entregas | **[US12:]** Eu, como usuário, quero receber sugestões de qual unidade de armazenamento um produto deve ser retirado para reduzir os custos de uma entrega. |
| **[TE02]**  Otimização Logistica | **[EP03]** Plataforma de logística com acesso restrito | **[US05:]** Eu como usuário quero realizar autenticação através do endereço de e-mail cadastrado a fim de manter meus dados seguros com minhas credenciais.|
| **[TE02]**  Otimização Logistica | **[EP03]** Plataforma de logística com acesso restrito | **[US06:]** Eu como usuário quero criar uma conta no GummyLog usando meu endereço de e-mail para ter mais controle sobre a minha conta.|


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

* Geral: cinza(201F1F), branco(FFFFFF), tons de lilás(AA67B5, 704577).

* Warnings e notificações: vermelho(C53131), laranja(F47933), verde(308E2E).

![Tela1](../../static/img/prototipoTela1.png)

![Tela2](../../static/img/prototipoTela2.png)

![Tela5](../../static/img/prototipoTela5.png)

![Tela3](../../static/img/prototipoTela3.png)

![Tela4](../../static/img/prototipoTela4.png)


## Referências bibliográficas

- O Guia do Scrum, Ken Schwaber e Jeff Sutherland
- Extreme Programming Explained: Embrace Change,  Kent Beck e Cynthia Andres
- Slides Métodos de Desenvolvimento de Software - Desing de Interface, George Marsicano