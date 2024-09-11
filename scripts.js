// scripts.js
(function() {
    var scripts = [
        'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js',
        'https://example.com/another-script.js'
    ];

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
    });
})();
