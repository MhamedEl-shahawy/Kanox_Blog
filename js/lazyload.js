    $(function() {
        $('.lazy').lazy({
          delay: 5000,
          effect: 'fadeIn',
          effectTime: 4000,
         onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }

        });
    });
                  