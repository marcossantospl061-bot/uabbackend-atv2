const express = require('express');
const app = express();
const PORT = 3030;

// Rota principal
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Catálogo de Heróis</title>

    </head>
    <body>
      <h1>Catálogo de Heróis</h1>
      <p>Bem-vindo ao site da Marvel e DC!</p>

      <a href="/marvel">Marvel</a>
      <a href="/dc">DC</a>

      <hr />

      <a href="/personagem/marvel/Thor">Thor</a>
      <a href="/personagem/marvel/Hulk">Hulk</a>
      <a href="/personagem/dc/Batman">Batman</a>
      <a href="/personagem/dc/Superman">Superman</a>
    </body>
    </html>
  `);
});

app.get('/marvel', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Marvel</title>

    </head>
    <body>
      <h1>Marvel</h1>
      <p>Este é o universo de heróis da Marvel, editora conhecida por personagens como Thor, Hulk e Homem de Ferro.</p>

      <ul>
        <li><a href="/personagem/marvel/Thor">Thor</a></li>
        <li><a href="/personagem/marvel/Hulk">Hulk</a></li>
        <li><a href="/personagem/marvel/Wolverine">Wolverine</a></li>
      </ul>

      <a href="/">Voltar para a página inicial</a>
    </body>
    </html>
  `);
});

app.get('/dc', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>DC</title>

    </head>
    <body>
      <h1>DC</h1>
      <p>Este é o universo de heróis da DC, editora conhecida por personagens como Batman, Superman e Mulher-Maravilha.</p>

      <ul>
        <li><a href="/personagem/dc/Batman">Batman</a></li>
        <li><a href="/personagem/dc/Superman">Superman</a></li>
        <li><a href="/personagem/dc/Flash">Flash</a></li>
      </ul>

      <a href="/">Voltar para a página inicial</a>
    </body>
    </html>
  `);
});

app.get('/personagem/:empresa/:nome', (req, res) => {
  const { empresa, nome } = req.params;
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${nome}</title>

    </head>
    <body>
      <h1>${nome}</h1>
      <p>Personagem: ${nome} | Empresa: ${empresa}</p>

      <a href="/">Voltar para a página inicial</a>
    </body>
    </html>
  `);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
