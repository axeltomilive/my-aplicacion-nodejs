// Importar Express
const express = require('express');

// Inicializar la aplicación Express
const app = express();

// Definir el puerto para el servidor
const PORT = 3000;

// Ruta principal
app.get('', (req, res) => {
    res.send('¡Hola Mundo con Node.js y Express!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Search</title>
</head>
<body>
  <form method="GET" action="/search">
    <input type="text" name="query" placeholder="Search...">
    <button type="submit">Search</button>
  </form>
  
  <div id="results">
    You searched for: <span id="search-query"></span>
  </div>

  <script>
    const query = new URLSearchParams(window.location.search).get('query');
    document.getElementById('search-query').innerHTML = query;
  </script>
</body>
</html>
