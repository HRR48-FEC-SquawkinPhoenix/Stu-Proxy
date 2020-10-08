var component = `
<!DOCTYPE html>
<html>

<head>
  <title>Petsy Proxy</title>
  <!-- <link rel="stylesheet" type="text/css" href="http://localhost:3001/style.css">
  <link rel="stylesheet" type="text/css" href="http://localhost:3002/style.css">
  <link rel="stylesheet" type="text/css" href="http://localhost:3004/style.css"> -->

  <!-- <link rel="stylesheet" type="text/css" href="compiled.css"> -->

  <link rel="stylesheet" type="text/css" href="https://fec-built.s3.us-east-2.amazonaws.com/compiled.css">
  <link rel="stylesheet" type="text/css" href="proxy.css">
</head>

<body>
  <img class='header' src='https://petsy-carousel-images.s3.us-east-2.amazonaws.com/Petsy+images/Etsy+Header.png'>
  <div class='car-cart'>
    <div id="carousel"></div>
    <div class='spacer'> </div>
    <div id="addToCart"></div>
  </div>
  <div class='sell-rev'>
    <div id="reviews"></div>
    <div id="seller"></div>
  </div>

  <!-- <script src="http://localhost:3001/bundle.js"></script>
    <script src="http://localhost:3002/bundle.js"></script>
    <script src="http://localhost:3003/bundle.js"></script>
    <script src="http://localhost:3004/bundle.js"></script> -->

  <!-- <script src="built.js"></script> -->

  <script src="https://fec-built.s3.us-east-2.amazonaws.com/built2.js"></script>
</body>

</html>
`;

module.exports = component;
