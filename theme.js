(function () {
  var theme = "light";
  try { if(localStorage.getItem("monster-theme") === "dark") theme = "dark"; } catch(e) {}
  document.documentElement.dataset.theme = theme;
})();
