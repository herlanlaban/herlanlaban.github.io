<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kuis Cinta</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Kuis Cinta</h1>
    <form id="quiz-form">
      <div class="question">
        <h2>Apa warna favoritmu?</h2>
        <div class="options">
          <label>
            <input type="radio" name="q1" value="a">
            Merah
          </label>
          <label>
            <input type="radio" name="q1" value="b">
            Biru
          </label>
          <label>
            <input type="radio" name="q1" value="c">
            Kuning
          </label>
        </div>
      </div>
      <div class="question">
        <h2>Siapa nama panggilanmu?</h2>
        <div class="options">
          <label>
            <input type="radio" name="q2" value="a">
            Sayang
          </label>
          <label>
            <input type="radio" name="q2" value="b">
            Cinta
          </label>
          <label>
            <input type="radio" name="q2" value="c">
            Beb
          </label>
        </div>
      </div>
      <div class="question">
        <h2>Apa makanan favoritmu?</h2>
        <div class="options">
          <label>
            <input type="radio" name="q3" value="a">
            Nasi goreng
          </label>
          <label>
            <input type="radio" name="q3" value="b">
            Pizza
          </label>
          <label>
            <input type="radio" name="q3" value="c">
            Sushi
          </label>
        </div>
      </div>
      <button type="submit">Selesai</button>
    </form>
    <div id="result"></div>
    <div id="share">
      <button id="share-button">Bagikan kuis</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
