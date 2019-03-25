/**
 * Created by Administrator on 2019/3/25.
 */
function drag(id){
    var obj = document.getElementById(id);
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function(e){
        var ev = e || event;
        disX = ev.pageX - obj.offsetLeft;
        disY = ev.pageY - obj.offsetTop;
        document.onmousemove = function(e){
            var ev = e || event;
            obj.style.left = ev.pageX - disX + "px";
            obj.style.top = ev.pageY - disY + "px";
        };
        document.onmouseup = function(){
            document.onmousemove = document.onmouseup = null;
        };
    };
    return false;
}