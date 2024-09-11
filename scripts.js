
(function() {
    var scripts = [
        'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js'
      //  'https://code.jquery.com/jquery-3.5.1.slim.min.js',
     //   'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js',
      //  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
    ];

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src; 
    
        document.head.appendChild(script);
        
        });
})();
