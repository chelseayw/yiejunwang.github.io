var loadProject = function(proj_id){
    var disp = $("#proj_display");
    if(proj_id != undefined){
        $(document.body).stop().fadeTo(500,0,function(){
            $.ajax("projects/" + proj_id + "/index.html", {
                dataType: "html"
            }).done(function(data){
                $("#proj_display").html(data.replace(/(src *= *\")/g,"$1projects\/"+proj_id+"\/")).show();
                $(document.body).stop().scrollTo("#proj_display",0, {offset:{top:-80}}).fadeTo(500,1);
            });
        });
    }
}

$(".project").click(function() {
    loadProject($(this).attr("projid"));
});

$("#header a").click(function(event) {
    switch($(this).attr("href")){
        case "#":
            $(document.body).scrollTo(0, 1000);
            break;
        case "#work":
            $(document.body).scrollTo("#work", 1000, {offset:{top:-80}});
            break;
        case "#about":
            loadProject("about");
            break;
    }
    event.preventDefault();         
});

$("#header_left").click(function() {
    $("#proj_display").css("opacity", "0");
    setTimeout(function(){
        $('#proj_display').html('').show(); 
        $('#proj_display').css('opacity', '1');
    }, 1800);
});

$("#work .project").each(function(){
    var proj_id = $(this).attr("projid");
    if(proj_id != undefined){
        $(this).find(".project_thumb").css("background-image","url('projects/"+proj_id+"/thumb.png')");
    }
});
//
//var proj_width = $(".project").first().width();
//$(document).resize(function() {
//    var docwidth = $(document).width();
//    var maxwidth = Math.min(docwidth - docwidth % proj_width, proj_width * 3.2);
//    $("#work").width(maxwidth)
//});
