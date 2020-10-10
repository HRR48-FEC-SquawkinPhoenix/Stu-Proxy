var component = `
<!DOCTYPE html>
<html>

<head>
  <title>Petsy Proxy</title>

  <link rel="stylesheet" type="text/css" href="https://fec-built.s3.us-east-2.amazonaws.com/compiled.css">
  <link rel="stylesheet" type="text/css" href="proxy.css">

</head>

<body>
<div class='headContainer'>
<img class='header' src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/Etsy+Header.png'>
</div>
  <div class='services'>
    <div class='leftCol'>
      <div id="carousel"></div>
      <div id="reviews"></div>
    </div>
    <div class='rightCol'>
      <div id="addToCart"></div>
      <div id="seller"></div>
    </div>
  </div>

  <script src="https://fec-built.s3.us-east-2.amazonaws.com/built.js"></script>
  <script src="https://kit.fontawesome.com/d236a51708.js"></script>
</body>

</html>
`;

module.exports = component;
