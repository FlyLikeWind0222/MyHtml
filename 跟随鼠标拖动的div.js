 <script src="js/jquery-1.7.js" type="text/javascript"></script>
    <script type="text/javascript"> 
    var bool = false;
    var offsetX = 0;
    var offsetY = 0;
    $('document').ready(function() {
        $("#����Ҫ�����ƶ������ID������Щ��").mousedown(function(event) {
            bool = true;
            offsetX = event.offsetX ? event.offsetX : event.layerX;
            offsetY = event.offsetY ? event.offsetY : event.layerY;
            $("#����Ҫ�����ƶ������ID������Щ��").css('cursor', 'move');
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
                $("#����Ҫ�����ƶ������ID������Щ��").css("position", "absolute");
                $("#����Ҫ�����ƶ������ID������Щ��").css("left", x);
                $("#����Ҫ�����ƶ������ID������Щ��").css("top", y);
            }
        })
    });

</script>