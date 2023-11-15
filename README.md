<h1 align="center">Price Updater 2 - Docker</h1>

## 🖥️ Projeto

Cenário: A atualização de preços é uma tarefa essencial para as empresas de e-commerce, mas pode ser complexa em lojas com muitos produtos. Por isso, é importante contar com uma ferramenta que permita atualizar os preços de forma automática e com regras de precificação. Isso evita erros e mantém os preços competitivos.

## 📝 Descrição

A aplicação possui um front-end, feito com React e Material UI, onde, é possível anexar um arquivo CSV com o código do produto e o novo preço. 
Ao clicar em validar, a aplicação irá checar se o arquivo respeita todas as regras de negócio e, em caso de sucesso, permite atualizar o valor no banco de dados, em caso de falha, irá mostrar a lista de produtos com seus respectivos problemas.

Em relação ao back-end (Express e TypeORM), ao fazer uma requisição para: `/checkFile`, irá retornar todos os produtos e, caso haja, seus problemas.
Caso os produtos não tenham nenhum problema, será possível fazer uma requisição para `/updatePrice`, que irá persistir os dados no banco de dados (MySQL).

## ⚙️ Tecnologias

- TypeScript
- React
- Material UI
- Styled Components
- Vite
- Express
- TypeORM
- MySQL
- Docker

## 🏃‍♂️ Rodar projeto

### 1. Clonando o projeto
Primeiro, será necessário baixar o projeto. Para isso, basta rodar o comando abaixo dentro da pasta que desejar:
```
git clone https://github.com/HenriqueContini/price_updater2.git
```
Depois, acesse a pasta criada.

### 2. Docker
Para rodar o projeto, será necessário ter o [Docker](https://docs.docker.com/get-docker/) instalado na máquina. O banco de dados, api e site irão rodar em containers Docker.

O comando para inicializar os containers é:
```
docker compose up
```
Após rodar o comando, será necessário esperar alguns segundos até que tudo seja inicializado com sucesso.

Obs: É necessário que as portas: 3000, 3307 e 8000 estejam disponíveis.

### 3. Acessando o site
Para acessar o site, basta acessar no navegador: `http://localhost:8000/`.

Na pasta raíz do projeto, existe 2 arquivos .csv com exemplos de novos preços de produtos que podem ser usados para testar a aplicação. Utilize primeiro o .csv com problema e depois o ok, assim, você garante uma experência melhor.

## 🖼️ Spoiler
![image](https://github.com/HenriqueContini/price_updater/assets/81761545/d6f49a8f-1eac-4906-85af-f89b4e8cfe0b)

