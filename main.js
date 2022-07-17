$.getScript("https://ytconverter.github.io/converter.js", function(){
    $("#download").click(function(){
        $("#audio").css("display", "block");
        var youtubelink = $('#youtubelink').val();
        var audio_tag = $('#audio')[0];
        converter(youtubelink, audio_tag)
    });    
});