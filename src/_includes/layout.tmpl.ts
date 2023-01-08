export default ({ content }:{content: string}):string  => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.match("<h1>[^<>]*</h1>")?.length === 1
    ? `${content.match("<h1>[^<>]*</h1>")?.toString().replace(/(<([^>]+)>)/ig, "")} | AL AMIN KOUSER`
    : "AL AMIN KOUSER"
  }</title>
  <link rel="apple-touch-icon" sizes="57x57" href="/ASSETS/favicon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/ASSETS/favicon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/ASSETS/favicon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/ASSETS/favicon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/ASSETS/favicon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/ASSETS/favicon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/ASSETS/favicon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/ASSETS/favicon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/ASSETS/favicon/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="/ASSETS/favicon/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/ASSETS/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/ASSETS/favicon/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/ASSETS/favicon/favicon-16x16.png">
  <link rel="manifest" href="/ASSETS/json/manifest.json">
  <meta name="msapplication-TileColor" content="#000000">
  <meta name="msapplication-TileImage" content="/ASSETS/favicon/ms-icon-144x144.png">
  <meta name="theme-color" content="#000000">
  <link rel="stylesheet" href="/ASSETS/css/index.css">
</head>
<body>
  <div id="top">
    <a href="/">HOME</a>
    <div id="search"></div>
  </div>
  ${content}
  <script src="/ASSETS/js/index.js"></script>
</body>
</html>`
}
