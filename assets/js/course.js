$(document).ready(function () {
  $('.ui.dropdown').dropdown();
});
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('pre code').forEach(function (block) {
    hljs.highlightElement(block);
  });
});
