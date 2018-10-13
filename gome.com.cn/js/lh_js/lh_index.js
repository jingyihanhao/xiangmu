function mouse_in(a){
    $(a).css({'background':'#FFFFFF'});
    $(a).children('b').css({'border':'1px solid #e6e6e6','border-bottom-color':'#FFFFFF','height':'31px'});
    $(a).children('b').children('a').css('color','#f5004b');
    $(a).children('div').css({'display':'block'});
    $(a).children('b').children('i').css({'transform':'rotate(180deg)'});
}
function mouse_out(a){
    $(a).css({'background':'transparent'});
    $(a).children('b').css({'border':'1px solid transparent','height':'30px'});
    $(a).children('b').children('a').css('color','#888888');
    $(a).children('div').css({'display':'none'});
    $(a).children('b').children('i').css({'transform':'rotate(0deg)'});
}
$('#gome-user').mouseenter(function () {
    mouse_in('#gome-user');
});
$('#gome-user').mouseleave(function () {
    mouse_out('#gome-user');
});
$('#gome-enterprise').mouseenter(function () {
    mouse_in('#gome-enterprise');
});
$('#gome-enterprise').mouseleave(function () {
    mouse_out('#gome-enterprise');
});
$('#gome-phone').mouseenter(function () {
    mouse_in('#gome-phone');
});
$('#gome-phone').mouseleave(function () {
    mouse_out('#gome-phone');
});
$('#gome-sitemap').mouseenter(function () {
    mouse_in('#gome-sitemap');
});
$('#gome-sitemap').mouseleave(function () {
    mouse_out('#gome-sitemap');
});
$('#gome-service').mouseenter(function () {
    mouse_in('#gome-service');
});
$('#gome-service').mouseleave(function () {
    mouse_out('#gome-service');
});
$('#gome-mygome').mouseenter(function () {
    mouse_in('#gome-mygome');
});
$('#gome-mygome').mouseleave(function () {
    mouse_out('#gome-mygome');
});
$('#navBox ul li').mouseenter(function () {
    $(this).css({'background':'#fbfbfb','border-left':'1px solid #333'});
    $(this).children('h3').children('a').css({'color':'#333333'});
})
$('#navBox ul li').mouseleave(function () {
    $(this).css({'background':'#333333','border-left':'1px solid transparent'});
    $(this).children('h3').children('a').css({'color':'#ffffff'});
})
