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

    POST /person
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

    GET /person
</br>
3.  Visualizar Pessoas por Nome

    GET /person/{nome}
</br>
4.  Visualizar Pessoas por Documento de Identificação

    GET /person/documento/{documento_identificacao}
</br>
5.  Visualizar Pessoas por Número de Celular

    GET /person/celular/{celular}
</br>
6.  Atualizar os Detalhes de uma Pessoa

    PATCH /person/{id}
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

    DELETE /person/{id}

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


## Banco de Dados
A API Lista Telefônica utiliza o MongoDB como seu banco de dados para armazenar informações sobre os contatos telefônicos.

### MongoDB
O MongoDB é um banco de dados NoSQL amplamente utilizado para aplicações web modernas. Ele oferece flexibilidade de esquema e escalabilidade horizontal, tornando-o uma escolha popular para aplicativos com necessidades de dados variáveis ou em evolução.

### Configuração da Conexão
Para conectar a aplicação ao MongoDB, é necessário configurar a URL de conexão com o banco de dados. Esta URL é definida como uma variável de ambiente no arquivo .env.

Exemplo de URL de conexão com o MongoDB:

    mongodb+srv://<usuario>:<senha>@<host>/<nome_do_banco>?retryWrites=true&w=majority

Substitua <usuario> e <senha> pelo nome de usuário e senha do seu banco de dados MongoDB, <host> pelo endereço do servidor MongoDB e <nome_do_banco> pelo nome do banco de dados que você deseja usar.

## Variáveis de Ambiente
A API Lista Telefônica utiliza variáveis de ambiente para configurar diferentes aspectos da aplicação, incluindo a conexão com o banco de dados MongoDB. Todas as configurações sensíveis, como chaves de API e credenciais de banco de dados, são armazenadas em um arquivo .env, que não está incluído no controle de versão do código-fonte.

Para configurar a aplicação localmente ou em um ambiente de produção, você precisará criar um arquivo .env na raiz do diretório do projeto e definir as variáveis de ambiente necessárias conforme mostrado no exemplo abaixo:

    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha

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
