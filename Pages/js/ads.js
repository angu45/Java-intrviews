(function() {
    function injectAd(url, container, isAtOptions = false, key = null) {
        let wrapper = document.createElement('div');
        wrapper.style.margin = "20px auto";
        wrapper.style.textAlign = "center";
        
        if (isAtOptions) {
            window.atOptions = { 'key': key, 'format': 'iframe', 'height': 60, 'width': 468, 'params': {} };
            let s = document.createElement('script');
            s.src = url;
            wrapper.appendChild(s);
        } else {
            let s = document.createElement('script');
            s.src = url;
            s.async = true;
            wrapper.appendChild(s);
        }
        container.appendChild(wrapper);
    }

    // १. हेडर ॲड
    const header = document.querySelector('.header');
    if (header) injectAd('https://www.highperformanceformat.com/cf7bd4ee539eda2677efd99eff50a2d2/invoke.js', header.parentNode, true, 'cf7bd4ee539eda2677efd99eff50a2d2');

    // २. रँडम बॉडी ॲड
    const main = document.querySelector('main');
    if (main) {
        let randomDiv = document.createElement('div');
        let children = main.children;
        let randomIndex = Math.floor(Math.random() * children.length);
        main.insertBefore(randomDiv, children[randomIndex]);
        injectAd('https://pl29771026.effectivecpmnetwork.com/8d/7f/50/8d7f504587004391580f2b828baca6f8.js', randomDiv);
    }

    // ३. फूटर ॲड
    const footer = document.querySelector('.footer');
    if (footer) {
        let footerAdContainer = document.createElement('div');
        footer.parentNode.insertBefore(footerAdContainer, footer);
        injectAd('https://www.highperformanceformat.com/205fb233060fbad43fbc41be95aa1f80/invoke.js', footerAdContainer, true, '205fb233060fbad43fbc41be95aa1f80');
    }

    // ४. इतर स्क्रिप्ट्स लोड करणे
    let s = document.createElement('script');
    s.src = "https://pl29771021.effectivecpmnetwork.com/24405e7671380bdad5f4995cc3ced788/invoke.js";
    s.setAttribute('data-cfasync', 'false');
    document.body.appendChild(s);
})();
