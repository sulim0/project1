<video src="video/test.mp4" id="video_obj" controls></video>
<button onclick="video_start()">영상 재생하기</button>
 
<script>
    function video_start() {
        document.getElementById("video_obj").play();
    }
</script>