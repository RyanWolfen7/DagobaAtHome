import * as elements from "typed-html";

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> Ryan Clark's Portfolio V4 </title>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
  <script src="https://unpkg.com/idiomorph/dist/idiomorph-ext.min.js"></script>
  <link href="/styles.css" rel="stylesheet">
</head>

${children}
`;

export default BaseHtml