/**
 * Created by Administrator on 2019/3/25.
 */
/**
 * 元素拖拽
 * drag
 * @param obj 拖拽对象
 */
function drag(obj) {
    obj.onmousedown = function(e) {
        var ev = e || event;
        var disX = ev.clientX - this.offsetLeft;
        var disY = ev.clientY - this.offsetTop;

        if ( obj.setCapture ) {
            obj.setCapture();
        }

        document.onmousemove = function(e) {
            var ev = e || event;
            var L = ev.clientX - disX;
            var T = ev.clientY - disY;

            if(L < 0){//磁性吸附效果可以将0变为需要产生吸附的距离大小
                L = 0;
            }else if(L > document.documentElement.clientWidth - obj.offsetWidth){
                L = document.documentElement.clientWidth - obj.offsetWidth;
            }
            if ( T < 0 ) {
                T = 0;
            } else if ( T > document.documentElement.clientHeight - obj.offsetHeight ) {
                T = document.documentElement.clientHeight - obj.offsetHeight;
            }

            obj.style.left = L + 'px';
            obj.style.top = T + 'px';
        };

        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
            //释放全局捕获 releaseCapture();
            if ( obj.releaseCapture ) {
                obj.releaseCapture();
            }
        };
        return false;
    }
}