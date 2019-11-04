let headscript = document.createElement("script");
script.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PK3F6LX');";

let bodyscript = document.write('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PK3F6LX" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>')

document.head.appendChild(headscript)
document.body.insertBefore(bodyscript, document.body.firstChild);
