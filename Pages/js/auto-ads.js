document.addEventListener("DOMContentLoaded", function() {
    // ॲड कंटेनर आणि स्क्रिप्ट्स तयार करणे
    const adContainer = document.createElement('div');
    adContainer.innerHTML = `
        <div id="container-24405e7671380bdad5f4995cc3ced788"></div>
        
        <div class="ad-wrapper">
            <div id="ad-slot-1"></div>
        </div>
        
        <div class="ad-wrapper">
            <div id="ad-slot-2"></div>
        </div>
    `;
    document.body.appendChild(adContainer);

    // Scripts लोड करणे
    const scripts = [
        "https://pl29771021.effectivecpmnetwork.com/24405e7671380bdad5f4995cc3ced788/invoke.js",
        "https://pl29771028.effectivecpmnetwork.com/a5/9d/1b/a59d1b609bbaf19d19fd1c124776d780.js",
        "https://pl29771026.effectivecpmnetwork.com/8d/7f/50/8d7f504587004391580f2b828baca6f8.js"
    ];

    scripts.forEach(src => {
        let s = document.createElement('script');
        s.src = src;
        s.async = true;
        document.body.appendChild(s);
    });

    // High Performance Ad 1
    window.atOptions = { 'key' : 'cf7bd4ee539eda2677efd99eff50a2d2', 'format' : 'iframe', 'height' : 60, 'width' : 468, 'params' : {} };
    loadScript("https://www.highperformanceformat.com/cf7bd4ee539eda2677efd99eff50a2d2/invoke.js", "ad-slot-1");

    // High Performance Ad 2
    window.atOptions = { 'key' : '205fb233060fbad43fbc41be95aa1f80', 'format' : 'iframe', 'height' : 50, 'width' : 320, 'params' : {} };
    loadScript("https://www.highperformanceformat.com/205fb233060fbad43fbc41be95aa1f80/invoke.js", "ad-slot-2");
});

function loadScript(src, targetId) {
    let s = document.createElement('script');
    s.src = src;
    document.getElementById(targetId).appendChild(s);
}
