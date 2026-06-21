// ads.js - Fully Functional Script

(function() {
    // १. सर्व आवश्यक स्क्रिप्ट्सची यादी
    const scripts = [
        "https://pl29771026.effectivecpmnetwork.com/8d/7f/50/8d7f504587004391580f2b828baca6f8.js",
        "https://pl29771028.effectivecpmnetwork.com/a5/9d/1b/a59d1b609bbaf19d19fd1c124776d780.js",
        "https://pl29771021.effectivecpmnetwork.com/24405e7671380bdad5f4995cc3ced788/invoke.js"
    ];

    // २. स्क्रिप्ट्स लोड करण्याचे फंक्शन
    scripts.forEach(src => {
        let s = document.createElement('script');
        s.src = src;
        s.async = true;
        // काही स्क्रिप्ट्ससाठी आवश्यक ॲट्रीब्यूट
        if(src.includes('24405e7671380bdad5f4995cc3ced788')) {
            s.setAttribute('data-cfasync', 'false');
        }
        document.body.appendChild(s);
    });

    // ३. High Performance Ads साठी डायनॅमिक लोडिंग (जर तुम्ही इंडेक्समध्ये atOptions आधीच दिले असतील तर हे भाग काढून टाका किंवा हे त्याना सपोर्ट करेल)
    const hpAds = [
        { key: 'cf7bd4ee539eda2677efd99eff50a2d2', src: 'https://www.highperformanceformat.com/cf7bd4ee539eda2677efd99eff50a2d2/invoke.js' },
        { key: '205fb233060fbad43fbc41be95aa1f80', src: 'https://www.highperformanceformat.com/205fb233060fbad43fbc41be95aa1f80/invoke.js' }
    ];

    hpAds.forEach(ad => {
        let s = document.createElement('script');
        s.src = ad.src;
        document.body.appendChild(s);
    });

    console.log("InterviewHub Ads Loaded Successfully.");
})();
