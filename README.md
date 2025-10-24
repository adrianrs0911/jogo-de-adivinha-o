# jogo-de-adivinha-o

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Jogo do Número Secreto</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(to right, #4e54c8, #8f94fb);
      color: white;
      text-align: center;
    }

    .banner {
      padding: 60px 20px;
      background-image: url('https://images.unsplash.com/photo-1605902711622-cfb43c4437d3');
      background-size: cover;
      background-position: center;
      position: relative;
    }

    .banner::after {
      content: "";
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 0;
    }

    .banner-content {
      position: relative;
      z-index: 1;
    }

    .banner h1 {
      font-size: 3em;
      margin-bottom: 10px;
    }

    .banner p {
      font-size: 1.2em;
      margin-bottom: 30px;
    }

    .btn-jogar {
      padding: 15px 30px;
      font-size: 1em;
      background-color: #ffcc00;
      color: #333;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .btn-jogar:hover {
      background-color: #ffdd33;
    }
  </style>
</head>
<body>
  <div class="banner">
    <div class="banner-content">
      <h1>Jogo do Número Secreto</h1>
      <p>Descubra o número misterioso e desafie sua sorte!</p>
      <button class="btn-jogar">Jogar Agora</button>
    </div>
  </div>
</body>
</html>
