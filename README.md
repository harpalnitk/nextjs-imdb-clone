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


 ## TMDB API REQUEST
 https://api.themoviedb.org/3/movie/550?api_key=58104afaca2d72e3702f6839e8f4a49c

 ## loading.io website for loading indicators

 ## Image host URL also needs to be added to the next.config.js file

 > npm install -D @tailwindcss/line-clamp

 to limit a paragaraph to only 2 lines in tailwindcss

also, add below code to tailwind.config.js file
   plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
 