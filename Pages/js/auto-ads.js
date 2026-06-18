(function () {
function exists(text) {
return document.documentElement.innerHTML.includes(text);
}

function createHTML(html) {
const div = document.createElement("div");
div.innerHTML = html;
return div.firstElementChild;
}

document.addEventListener("DOMContentLoaded", function () {

// Ad #1
if (!exists("205fb233060fbad43fbc41be95aa1f80")) {
  const main = document.querySelector("main");
  if (main) {
    const ad1 = document.createElement("div");
    ad1.className = "ad-wrapper";
    ad1.innerHTML = `
      <div>
        <script>
          atOptions = {
            'key':'205fb233060fbad43fbc41be95aa1f80',
            'format':'iframe',
            'height':50,
            'width':320,
            'params':{}
          };
        </script>
        <script src="https://www.highperformanceformat.com/205fb233060fbad43fbc41be95aa1f80/invoke.js"><\/script>
      </div>
    `;
    main.prepend(ad1);
  }
}

// Ad #2
if (!exists("cf7bd4ee539eda2677efd99eff50a2d2")) {
  const main = document.querySelector("main");
  if (main) {
    const ad2 = document.createElement("div");
    ad2.className = "ad-wrapper";
    ad2.innerHTML = `
      <div>
        <script>
          atOptions = {
            'key':'cf7bd4ee539eda2677efd99eff50a2d2',
            'format':'iframe',
            'height':60,
            'width':468,
            'params':{}
          };
        </script>
        <script src="https://www.highperformanceformat.com/cf7bd4ee539eda2677efd99eff50a2d2/invoke.js"><\/script>
      </div>
    `;
    main.appendChild(ad2);
  }
}

// Ad #3
if (!exists("24405e7671380bdad5f4995cc3ced788")) {
  const footer = document.querySelector("footer");
  const box = document.createElement("div");
  box.innerHTML = `
    <div id="container-24405e7671380bdad5f4995cc3ced788"></div>
    <script async="async" data-cfasync="false" src="https://pl29771021.effectivecpmnetwork.com/24405e7671380bdad5f4995cc3ced788/invoke.js"><\/script>
  `;

  if (footer) {
    footer.parentNode.insertBefore(box, footer);
  } else {
    document.body.appendChild(box);
  }
}

// Ad #4
if (!exists("8d7f504587004391580f2b828baca6f8")) {
  const s1 = document.createElement("script");
  s1.src = "https://pl29771026.effectivecpmnetwork.com/8d/7f/50/8d7f504587004391580f2b828baca6f8.js";
  document.body.appendChild(s1);
}

// Ad #5
if (!exists("a59d1b609bbaf19d19fd1c124776d780")) {
  const s2 = document.createElement("script");
  s2.src = "https://pl29771028.effectivecpmnetwork.com/a5/9d/1b/a59d1b609bbaf19d19fd1c124776d780.js";
  document.body.appendChild(s2);
}

});
})();