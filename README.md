# NodeJS-CRUD-simple-with-mongo

Criação da APIREST simples

### 1º Abrir o terminal no diretorio onde pretende e criar uma pasta do projeto, dentro dela digitar o comando
```
npm init NOME_DO_PROJETO_NODE -y
```
_Ele vai criar um packge.json inicial._

### 2º Agora instale o express

```
npm install express
```
_Nesse momento o npm vai baixar o pacote do express e colocar como depedencia no package.json. uma pasta chamada node_modules é criada._

### 3º Crie um arquivo chamado server.js ou index.js no diretorio raiz.
##### em server.js
Importe o express em uma constante e crie outra variavel para instanciar o express. em seguinda use a função listen para dizer ao node que esculte a porta 3001.

```
// server.js

const express = require('express');

const app = express();

app.listen(3001)
```

#### subindo o servidor.
Em seguida basta subir o servidor no terminal usando o comando node server.js

```
node server.js
```
Então basta verificar no navegador usando http://localhost:3001
se o sevidor estiver de pé a mensagem " **Cannot GET /** " vai ser apresentada.
Essa mensagem é por que ainda não implementamos uma rota, nem mesmo a / e não retornamos uma resposta.

### 4º Instalando o Nodemon
Contudo, toda vez que houver alteração no codigo vai ser necessário sempre que restartar o servidor. Portanto para melhorar esse problema você vai instalar o nodemon

```
npm install nodemon
```
Configure os script do package.json para facilitar ainda mais o comando, ao invez de usar o nodemon servidor.js , ao adicionamos um script no package.json para facilitar o uso do comando através do npm run.

```
// package.json
"scripts": {
	"dev": "nodemon server.js"
}

```

então, para levantar o servidor usaremos.

```
npm run dev
```
### 5º Configuração do mongo
Depois de ter o Mongo instalado em sua maquina ou apontando para alguma maquina virtual.

instale como depedencias do seu projeto o mongoose.

```
	npm install mongoose
```

Ele é responsável para conectamos ao banco de dados do mongo. E será a ponte entre o NodeJS e o mongoDB.

Em seguida abra o servidor.js para fazer a conexão com o mongo.

```
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/NOME_DO_BANCO',
{ userNewUrlParser: true }
);

app.listen(3001);



```
importe o mongoose e depois faça sua conexão apontando para o endereço e qual esta o mongo e seu banco.

UserNewUrlParser é um flag que passamos para contornar o aviso 

*DeprecationWarning: current URL string parser is deprecated, and will be
removed in a future version. To use the new parser, pass option
{ useNewUrlParser: true } to MongoClient.connect.*

que aparece no terminal do servidor. Aviso de depreciação mais detalhes em
[https://mongoosejs.com/docs/deprecations.html](https://mongoosejs.com/docs/deprecations.html)

### 6º Criando um model 

Vamos criar uma pasta chamada src e dentro dela outra pasta chamada models, nesses models vamos colocar qual modelo de dados vamos querer que nosso banco tenha. a estrutura do objeto a ser salvo, se é required ou não. Ou seja um Schema do objeto.

1 - Importe o mongoose
2 - Faca uma instancia do mongoose.Schema, passando o objeto que vamos salvar
3 - Depois referencie qual o modelo a ser salvo o schema

```
// src/models/Product.js

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

});

mongoose.model('Product', ProductSchema);

```


 // TODO: Terminar de escrever


