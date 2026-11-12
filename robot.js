
/* ChatForge robot: a small animated robot that roams the page and opens /chat.html.
   Add to index.html just before </body>:  <script src="robot.js" defer></script> */
(function () {
  if (/chat\.html$/.test(location.pathname)) return;
 
  var CHAT_URL = "/chat.html";
  var MESSAGE = "Clear all your questions, click me!";
 
  var css = `
  .cf-robot{position:fixed;right:clamp(12px,3vw,32px);bottom:clamp(10px,2.5vw,24px);z-index:9999;
    display:flex;flex-direction:column;align-items:flex-end;text-decoration:none;color:#14183a;
    --cf-roam:clamp(30px,16vw,260px);animation:cf-roam 16s ease-in-out infinite;-webkit-tap-highlight-color:transparent}
  .cf-robot:focus-visible{outline:3px solid #4f5bff;outline-offset:6px;border-radius:20px}
  .cf-bubble{position:relative;max-width:210px;margin:0 6px 12px 0;padding:10px 14px;background:#fff;
    border:2.5px solid #14183a;border-radius:18px 18px 4px 18px;font:700 14px/1.3 system-ui,-apple-system,"Segoe UI",sans-serif;
    box-shadow:0 5px 0 #14183a;animation:cf-pop 3.2s ease-in-out infinite;transform-origin:bottom right}
  .cf-svg{width:clamp(104px,11vw,136px);height:auto;overflow:visible;transition:transform .25s}
  .cf-robot:hover .cf-svg{transform:scale(1.08) rotate(-3deg)}
  .cf-bob{animation:cf-bob 2.6s ease-in-out infinite}
  .cf-shadow{transform-box:fill-box;transform-origin:center;animation:cf-shadow 2.6s ease-in-out infinite}
  .cf-eye{transform-box:fill-box;transform-origin:center;animation:cf-blink 4.5s infinite}
  .cf-arm{transform-box:fill-box;transform-origin:50% 12%;animation:cf-wave 2.4s ease-in-out infinite}
  .cf-robot:hover .cf-arm{animation-duration:.5s}
  .cf-glow{animation:cf-glow 1.6s ease-in-out infinite}
  @keyframes cf-roam{0%,100%{transform:translateX(0)}50%{transform:translateX(calc(-1 * var(--cf-roam)))}}
  @keyframes cf-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
  @keyframes cf-shadow{0%,100%{transform:scale(1);opacity:.18}50%{transform:scale(.75);opacity:.1}}
  @keyframes cf-blink{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
  @keyframes cf-wave{0%,55%,100%{transform:rotate(0)}65%{transform:rotate(-55deg)}75%{transform:rotate(-20deg)}85%{transform:rotate(-55deg)}}
  @keyframes cf-glow{0%,100%{opacity:1}50%{opacity:.4}}
  @keyframes cf-pop{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
  @media (prefers-reduced-motion:reduce){.cf-robot,.cf-bubble,.cf-bob,.cf-shadow,.cf-eye,.cf-arm,.cf-glow{animation:none!important}}
  `;
 
  var ink = "#14183a", blue = "#4f5bff", mint = "#36d6a4";
  var svg =
    '<svg class="cf-svg" viewBox="0 0 120 130" aria-hidden="true">' +
    '<ellipse class="cf-shadow" cx="60" cy="125" rx="26" ry="5" fill="' + ink + '"/>' +
    '<g class="cf-bob">' +
    '<line x1="60" y1="20" x2="60" y2="9" stroke="' + ink + '" stroke-width="3" stroke-linecap="round"/>' +
    '<circle class="cf-glow" cx="60" cy="7" r="5" fill="' + mint + '" stroke="' + ink + '" stroke-width="2.5"/>' +
    '<rect x="8" y="38" width="10" height="20" rx="5" fill="' + blue + '" stroke="' + ink + '" stroke-width="2.5"/>' +
    '<rect x="102" y="38" width="10" height="20" rx="5" fill="' + blue + '" stroke="' + ink + '" stroke-width="2.5"/>' +
    '<rect x="18" y="20" width="84" height="58" rx="26" fill="#fff" stroke="' + ink + '" stroke-width="3"/>' +
    '<rect x="27" y="29" width="66" height="40" rx="18" fill="' + ink + '"/>' +
    '<ellipse class="cf-eye" cx="46" cy="45" rx="5.5" ry="7" fill="' + mint + '"/>' +
    '<ellipse class="cf-eye" cx="74" cy="45" rx="5.5" ry="7" fill="' + mint + '"/>' +
    '<circle cx="36" cy="57" r="4" fill="#ff8fab" opacity=".85"/><circle cx="84" cy="57" r="4" fill="#ff8fab" opacity=".85"/>' +
    '<path d="M52 57q8 7 16 0" stroke="' + mint + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<rect x="36" y="82" width="48" height="34" rx="14" fill="' + blue + '" stroke="' + ink + '" stroke-width="3"/>' +
    '<circle cx="60" cy="99" r="6" fill="#fff" stroke="' + ink + '" stroke-width="2.5"/>' +
    '<rect x="21" y="88" width="10" height="22" rx="5" fill="#fff" stroke="' + ink + '" stroke-width="2.5"/>' +
    '<rect class="cf-arm" x="89" y="88" width="10" height="22" rx="5" fill="#fff" stroke="' + ink + '" stroke-width="2.5"/>' +
    '<ellipse cx="48" cy="118" rx="10" ry="5" fill="#fff" stroke="' + ink + '" stroke-width="2.5"/>' +
    '<ellipse cx="72" cy="118" rx="10" ry="5" fill="#fff" stroke="' + ink + '" stroke-width="2.5"/>' +
    "</g></svg>";
 
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
 
  var a = document.createElement("a");
  a.className = "cf-robot";
  a.href = CHAT_URL;
  a.setAttribute("aria-label", "Open the ChatForge assistant chat");
  a.innerHTML = '<span class="cf-bubble">' + MESSAGE + "</span>" + svg;
  document.body.appendChild(a);
})();
 
