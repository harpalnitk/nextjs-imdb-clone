### nextjs 13 beta docs
https://beta.nextjs.org/docs 

> npx create-next-app@latest --experimental-app

select eslint and tailwind
select src dir
select app dir

## metdata is exported automatically in layout file
 or pages
 charset and viewport meta tags are added by default 
favicon is also added automatically

## favicon generated form website favicon.io
 move favicon.ico tompublic folder

 ## tailwind
 2 files
 1. postcss.congig.js
 2. tailwind.config.js

 In nextjs 13 all pages, components are server side by default

 > npm i react-icons --save   for icons

 >npm i next-themes  for  dark/light mode
 # the provider in the above package works only for client side code
 we need to create our own provider to use it for server side code also