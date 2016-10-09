module.exports = function(depsArray ,userScriptsArray ,styles, html){

let deps = (Array.isArray(depsArray) && depsArray) || [];
let userScripts = (Array.isArray(userScriptsArray) && userScriptsArray) || [];


let genDeps = deps.map(e => `<script src='${e}'><\/script>`).join('');
let genScripts = userScripts.map(e => `<script>${e}<\/script>`).join('');
let stylesheets = styles.map(e => `<style>${e}<\/style>`).join('');

let innerHTML = html || '<span>loaded<\/span>';

  return `
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title><\/title>
      ${stylesheets}
      ${genDeps}

    <\/head>
    <body>
      ${innerHTML}

    ${genScripts}
    <\/body>
  <\/html>
  `
}
