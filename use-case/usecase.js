(function () {
  var root = document.documentElement, key = "theme";
  try { var s = localStorage.getItem(key); if (s) root.setAttribute("data-theme", s); } catch (e) {}
  var tb = document.getElementById("theme");
  if (tb) tb.addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") === "dark" ||
      (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    var next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(key, next); } catch (e) {}
  });
  document.querySelectorAll(".code").forEach(function (box) {
    var pre = box.querySelector("pre"), b = document.createElement("button");
    b.className = "copy"; b.type = "button"; b.textContent = "copy";
    b.addEventListener("click", function () {
      var t = pre.innerText;
      var done = function () { b.textContent = "copied"; b.classList.add("done");
        setTimeout(function () { b.textContent = "copy"; b.classList.remove("done"); }, 1400); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, done);
      else { var r = document.createRange(); r.selectNodeContents(pre); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); try { document.execCommand("copy"); } catch (e) {} sel.removeAllRanges(); done(); }
    });
    box.appendChild(b);
  });
})();
