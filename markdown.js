fs = require('fs');

let css = fs.readFileSync('mantra.css', 'utf-8')
let intro = fs.readFileSync('intro.html', 'utf-8')
let forms = fs.readFileSync('forms.html', 'utf-8')

let html =
`<!DOCTYPE HTML>
<html>
<head>
<style>
${css}
</style>
</head>
<body>
${intro}
<hr>
${forms}
</body>
</html>`

fs.writeFileSync('index.html', html, function (error) {
  if (error) return console.log(error)
})
