<h2>Introduction</h2>
css file might be big (e.g. for bootstrap) but your app might use part of it. Yet the browser will download all the file and block rendering until it finish download and processing. 

<h2>Motivation</h2>
Use a tool that take from css file only what is used in html and js files. here i use PurgeCSS which is a postCSS plugin

<h2>Installation</h2>
<p>postcss and postcss-cli are installed as dev dependencies and used in package.json script (check also <a href='https://github.com/NathanKr/post-css-playground'>post-css-playground</a>)</p>
<p>@fullhuman/postcss-purgecss is purgecss engine</p>
```
pnpm i
```

<h2>Usage</h2>

```
npm run build-css-watch
or
npm run build-css
```

<h2>Points of interest</h2>
<ul>
<li></li>
<li>following the usage check in dist/styles.css and see that the selector for body h1 does not appear because it is not used by the html</li>
</ul>