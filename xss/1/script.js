const searchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(searchParams);

if (params.search) {
  const search = '<h4>No results found for "' + params.search +'"</h4>'
  document.write(search);
  //   document.getElementById("output").append(document.createRange().createContextualFragment(search));
}
