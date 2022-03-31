1.Создаём приложение nextjs и устанавливаем ts
 npx create-next-app@latest --ts
2. Открываем в vscode
  code zaryacosmetic
3.Устанавливаем react-router
 $ npm i react-router
4. Устанавливаем пакет bootstrap
 npm install react-bootstrap bootstrap@5.1.3
5.Запуск локального сервера
  npm run dev
6. touch .gitignore -создаём файл .gitignore
7.git init

8. Прописываем в нём /node_modules
9.Устанавливаем nodemon
 npm i -D nodemon
10. в package.json  для того,чтобы при изменении в этих папках сервак не перезапускался
 "scripts": {
        "dev": "nodemon server/index.js",
}
"nodemonConfig": {
        "ignore": ["node_modules/*", "client/*", "package.json", "package-lock.json", "README.md"]
    },

11.npm init -y инициализируем проект
12.Устанавливаем express БД postgress sequalize и cors
     npm install express pg pg-hstore sequelize cors dotenv
13.Устанавливаем node с dev
   npm install -D nodemon 

14.npm run dev- Запуск сервака

       
  