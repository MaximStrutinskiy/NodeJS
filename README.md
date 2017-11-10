#Learn NodeJs

##MongoDB commands:
````
insert: db.users.insert({name: 'O. Strut', email:'asd123ad@mail.com', username:'Oax', pass: '998908'});
update: db.users.update({name: 'O. Strut'}, {$set: {email:'ad@mail.com'}});
find:   db.users.find().pretty()
````

##Tasks:
````
1) Create base authorization
 - login to acc (Ошибка с паролями, если введен 1 пароль правельно а второй нет - проходит авторизация, добавить проверки на сравнение)
 - register acc
 - update acc
 - personal cabinet

2) Add roles for users (admin, moderator, simple user, annonim)
````

## Lib:
````
NodeJS, Angular, MongDB
https://scotch.io/tutorials/easy-node-authentication-setup-and-local

tutorials:
http://campus.codeschool.com/courses/real-time-web-with-node-js/level/1/video/1

lessons
https://www.youtube.com/watch?v=xs6sSylr-88&list=PLsuEohlthXdkRSxJTkmTstWKHgBHsd3Dx&index=6
````
