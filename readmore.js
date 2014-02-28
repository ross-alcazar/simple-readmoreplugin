(function ( $ ) {
 
    $.fn.readmore = function(char) {

        var self = $(this)
        var orgContent = self.html();
        
        if (char==undefined) {
            char = 500;
        }
        
        if (self.html().length < char) {return self;}

        var txtContent = self.html().substr(0, char) + '... <a href="#" id="morelink">Read more</a>';
        self.html(txtContent);
        $("body").on("click", '#morelink', function(e){
            e.preventDefault();
            self.empty();
            self.html(orgContent);
            $('<p><a href="#" id="lesslink"> Less</a></p>').appendTo(self);
        });
        $("body").on("click", '#lesslink', function(e){
            e.preventDefault();
            self.html(txtContent);
        });
    };
 
}( jQuery ));
