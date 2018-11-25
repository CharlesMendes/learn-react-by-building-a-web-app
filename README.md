# Learn React by building a web app

Starter files for the <a href="https://www.udemy.com/learn-react-by-building-and-deploying-production-ready-app">Learn React by building and deploying production ready app</a> Course.

<img src="https://udilia.com/images/react-coin-poster.jpg" alt="Poster" width="600" />

# Project structure

`react-coin` is the folder, where we are going to work for this entire course.

`stages` is the folder, that contains specific stage of application, corresponding to course video. E.g. if you lose track while watching `5th` video, `stages/05` folder will contain solution for you. It also contains final project.

# Getting started

### Familiar with Git?

clone this repository and `cd` into `react-coin` folder

```
git clone https://github.com/udilia/learn-react-by-building-a-web-app.git

cd learn-react-by-building-a-web-app/react-coin
```

### Not familiar with Git?

- <a href="https://github.com/udilia/learn-react-by-building-a-web-app/archive/master.zip">Download ZIP</a>
- extract the contents of the zip file
- and `cd` into `react-coin` folder `cd learn-react-by-building-a-web-app-master/react-coin`

### Install dependencies

```
npm install
```

### Start development server

```
npm start
```
# Anotações gerais

Antes de tudo, crie um novo repositório no seu GitHub, por exemplo, criei o:
https://github.com/CharlesMendes/learn-react-by-building-a-web-app.git


Clonar um novo conteúdo
```
➜  Projects git clone https://github.com/udilia/learn-react-by-building-a-web-app.git
```

Entrar no diretório clonado, e remover o .git existente
```
➜  Projects cd learn-react-by-building-a-web-app 
➜  learn-react-by-building-a-web-app git:(master) rm -r .git
```

Inicializar um novo repositório git (seu repositório particular/publico)
```
➜  learn-react-by-building-a-web-app git init
➜  learn-react-by-building-a-web-app git:(master) ✗ git remote add origin 
```

https://github.com/CharlesMendes/learn-react-by-building-a-web-app.git


Crie ou edite o .gitignore, com o conteúdo abaixo (na raiz do projeto)
https://github.com/facebook/react/blob/master/.gitignore

Adicione os arquivos ao seu git, pelo comando abaixo, e realize o commit
```
➜  learn-react-by-building-a-web-app git:(master) ✗ git add *
➜  learn-react-by-building-a-web-app git:(master) ✗ git commit -m 'arquivos iniciais para o projeto’
```

Realize o push
```
➜  learn-react-by-building-a-web-app git:(master) ✗ git push -u origin master
```

Instale o projeto
```
➜  learn-react-by-building-a-web-app git:(master) ✗ cd react-coin 
➜  react-coin git:(master) ✗ yarn install 
```

Atualize as dependencias
```
➜  react-coin git:(master) ✗ yarn upgrade  
```

Rode o projeto para testar
```
➜  react-coin git:(master) ✗ yarn run start
```

http://localhost:3000/

https://api.udilia.com/docs/cryptocurrencies/v1
https://udilia.com/docs/cryptocurrencies/v1

