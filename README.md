# Functions
Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

**Return** é uma declaração que finaliza a execução de uma função, retornando um determinado valor. Tudo o que estiver antes do return será executado. Já os códigos colocados após o return não serão executados. Por isso, tenha o cuidado de usar o return somente quando toda a sua função já tiver sido percorrida, para que o resultado seja o que você deseja imprimir.

## **Funções de Expressão (Function Expressions)**

Funções de Expressão podem ser anônimas, ou seja sem nome, dizemos que uma função é uma functions expression quando ela atribui o seu valor a uma variável, veja abaixo:

## **Funções auto-executáveis (IIFE)**

São funções que se auto-invocam, extremamento útil para não poluir o escopo global desnecessariamente.Faça uso do ‘use strict’ para evitar problemas com escopo, ele gera um erro no browser ao tentar declararmos uma variável sem a palavra “var”.

## Escopo de uma função

As variáveis definidas no interior de uma função não podem ser acessadas de nenhum lugar fora da função, porque a variável está definida apenas no escopo da função. No entanto, uma função pode acessar todas variáveis e funções definida fora do escopo onde ela está definida. Em outras palavras, a função definida no escopo global pode acessar todas as variáveis definidas no escopo global. A função definida dentro de outra função também pode acessar todas as variáveis definidas na função hospedeira e outras variáveis ao qual a função hospedeira tem acesso.

## Closures

*Closures* são um dos recursos mais poderosos de JavaScript. JavaScript permite o aninhamento de funções e garante acesso completo à função interna a todas as variáveis e funções definidas dentro da função externa (e todas as outras variáveis e funções que a função externa tem acesso). No entanto, a função externa não tem acesso às variáveis e funções definidas dentro da função interna. Isto proporciona uma espécie de segurança para as variáveis da função interna. Além disso, uma vez  que a função interna tem acesso ao escopo da função externa, as variáveis e funções definidas na função externa vão durar na memória mais do que a própria função externa, isto se a função interna permanecer na memória mais tempo do que a função externa. Uma *closure* é criada quando a função interna é de alguma forma disponibilizada para qualquer escopo fora da função externa.
