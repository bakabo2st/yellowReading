function header(){
    $.ajax({
        url: "nav.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}
