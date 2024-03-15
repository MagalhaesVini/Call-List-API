# Documentação da API Lista Telefônica

## Descrição

A API Lista Telefônica é uma ferramenta para gerenciar uma lista de contatos telefônicos de forma eficiente e fácil.

## Como Usar

Para utilizar a API Lista Telefônica, você pode enviar solicitações HTTP para os endpoints fornecidos, conforme descrito abaixo. Os parâmetros necessários variam de acordo com o endpoint específico, conforme documentado.

## Base URL

    https://call-list-api.onrender.com/

## Autenticação

Esta API não requer autenticação.

## Exemplos de Uso:
</br>
1.  Adicionar uma Nova Pessoa

             POST /pessoas
</br>
Corpo da Solicitação:

        {
            "nome": "Fulano de Tal",
            "documento_identificacao": 123456789,
            "empresa": "Empresa ABC",
            "setor": "TI",
            "endereço": "Rua Principal, 123",
            "comercial": 987654321,
            "celular": 999888777,
            "outros": 111222333
        }
</br>
2.  Visualizar Todas as Pessoas

        GET /pessoas
</br>
3.  Visualizar Pessoas por Nome

        GET /pessoas/{nome}
</br>
4.  Visualizar Pessoas por Documento de Identificação

        GET /pessoas/documento/{documento_identificacao}
</br>
5.  Visualizar Pessoas por Número de Celular

        GET /pessoas/celular/{celular}
</br>
6.  Atualizar os Detalhes de uma Pessoa

        PATCH /pessoas/{id}
</br>
Corpo da Solicitação:

        {
            "nome": "Novo Nome",
            "documento_identificacao": 987654321,
            "empresa": "Nova Empresa",
            "setor": "Vendas",
            "endereço": "Nova Rua, 456",
            "comercial": 123456789,
            "celular": 777888999,
            "outros": 444555666
        }
</br>
7.  Remover uma Pessoa

        DELETE /pessoas/{id}

## Estrutura do Diretório do Projeto

    ├── index.js
    ├── models/
    │ ├── Person.js
    │ └── ...
    ├── routes/
    │ ├── personRoutes.js
    │ └── ...
    ├── .gitignore
    ├── package-lock.json
    └── package.json

## Parâmetros dos Endpoints

    nome: Nome da pessoa.
    documento_identificacao: Número de documento de identificação.
    empresa: Nome da empresa onde a pessoa trabalha.
    setor: Setor de trabalho da pessoa.
    endereço: Endereço da pessoa.
    comercial: Número de telefone comercial.
    celular: Número de telefone celular.
    outros: Outro número de telefone (opcional).

## Formato das Respostas:

Todas as respostas são retornadas no formato JSON.

</br>
Adicionar/Atualizar Pessoa (POST/PATCH):

    {
        "msg": "Pessoa inserida no sistema com sucesso!"
    }

</br>
Visualizar Pessoas (GET):

        [
            {
                "_id": "ID_DA_PESSOA",
                "nome": "Nome da Pessoa",
                "documento_identificacao": 123456789,
                "empresa": "Empresa ABC",
                "setor": "TI",
                "endereço": "Rua Principal, 123",
                "comercial": 987654321,
                "celular": 999888777,
                "outros": 111222333
            }
        ]

</br>
Atualizar Pessoa (PATCH):

    {
        "msg": "Pessoa atualizada com sucesso"
    }

</br>
Remover Pessoa (DELETE):

    {
        "msg": "Pessoa excluída com sucesso"
    }

</br>
Erro:

    {
        "error": "Mensagem de erro"
    }

## Informações de Contato

Para quaisquer dúvidas, sugestões ou problemas relacionados à API, sinta-se à vontade para entrar em contato via email ou GitHub Issues.

## Licença

Esta API é livre para uso pessoal e não comercial. Para uso comercial ou outras questões, entre em contato.
