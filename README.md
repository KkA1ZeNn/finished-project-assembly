# GULP BUILDER 
Its a simple gulp build for faster and simpler creating your web project 
Thaks a lot to  [CodeQuest channel](https://www.youtube.com/@CodeQuestRu")


# Usage
1) Unpack the assembly into your future project folder
2) Open the terminal and use npm to download all packages:
```
npm i
```
3) Now you can start gulp builder with a command:
```
npm start
```
4) Create your web site in `src` folder how you usually do it, but dont forget to check all paths to your files
5) When you will be ready to release your project you can make a production version with a command:
```
npm build
```


# Builder structure
![](https://github.com/KkA1ZeNn/gulp-builder-for-the-webproject/assets/95126688/ccd56be8-65d1-4db0-a3b8-7aec64b50e0c) 

`gulpSettings` - Folder with setting files for gulp:

* `config` - Folder with `app.js` for some npm modules settings and `path.js` for paths to files
* `data` - Folder with `news.json` - simple example of JSON file with information for auto-including in your HTML files
* `tasks` - Folder with all tasks for your gulp. Here you can add some new tasks you need

`public` - Folder of your project which you can pass on to your customer (It will be created after using `npm start` or `npm build` commands

`gulpfile.js` - Main file of Gulp Builder with all controllers

`src` - Folder with all project source files. For example: HTML, CSS, JS, Images, Fonts...
* `chunks` - Folder with some parts of HTML to show you than you can concat them in one HTML file with my builder


# What this builder actually do:
You can check `package.json` file to see all npm packages I use and find all information about them [here](https://www.npmjs.com/)

But actually, when you use `npm start` in terminal, builder will start live server to help you see all changes in files in real time. Also it concat all HTML, CSS, JS files in one, minimizes them, minimizes pictures, transform your JS code in ES5 style, maximizes your project's support for older browsers, create all types of font formats etc.


## WARNING
Sometimes when your Live Server is running and you add some new files to your project and change some paths, Live Server breaks and cant show you changes. I dont know why does it happen but to fix it, you just need to reload your Live Server: Press `Ctrl + C` in terminal to exit and after that use `npm start` again
