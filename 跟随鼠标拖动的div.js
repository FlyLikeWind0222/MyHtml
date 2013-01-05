 <script src="js/jquery-1.7.js" type="text/javascript"></script>
    <script type="text/javascript"> 
    var bool = false;
    var offsetX = 0;
    var offsetY = 0;
    $('document').ready(function() {
        $("#用需要跟随移动的组件ID代替这些字").mousedown(function(event) {
            bool = true;
            offsetX = event.offsetX ? event.offsetX : event.layerX;
            offsetY = event.offsetY ? event.offsetY : event.layerY;
            $("#用需要跟随移动的组件ID代替这些字").css('cursor', 'move');
        })
        .mouseup(function() {
            bool = false;
        })
        $(document).mousemove(function(event) {
            if (!bool) {
                return;
            }
            else {
                var x = event.clientX - offsetX;
                var y = event.clientY - offsetY;
                $("#用需要跟随移动的组件ID代替这些字").css("position", "absolute");
                $("#用需要跟随移动的组件ID代替这些字").css("left", x);
                $("#用需要跟随移动的组件ID代替这些字").css("top", y);
            }
        })
    });

</script>