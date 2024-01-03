<h2>Introduction</h2>
css file might be big (e.g. for bootstrap) but your app might use part of it. Yet the browser will download all the file and block rendering until it finish download and processing. 

<h2>Motivation</h2>
Use a tool that take from css file only what is used in html and js files. here i use PurgeCSS which is a postCSS plugin and can be read by vendors like vite \ next.js via postcss.config.js but here i use it stand alone

<h2>Installation</h2>

```
pnpm i
```

<h2>Usage</h2>

<ol>
<li>
<h3>postcss + postcss.config.js</h3>
@fullhuman/postcss-purgecss is required here on top of purgecss

```
npm run build-css-watch
or
npm run build-css
```
</li>
<li>
<h3>purgecss api</h3>
The con here is that i see no direct way to write to dist

```
npm run build-css-with-purgecss-api
```
</li>

<li>
<h3>purgecss via cli</h3>
<p>Limitation : the output dir (dist in this case) must exist</p>
<p>purgecss can also read from purgecss config file instead of using the command line</p>

```
npm run build-css-with-purgecss-cli
```


</li>

</ol>


<h2>Points of interest</h2>
<ul>
<li>following the usage check in dist/styles.css and see that the selector for body h1 does not appear because it is not used by the html</li>
</ul>