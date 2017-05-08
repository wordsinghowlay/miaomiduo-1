<style>

</style>

<template>
    <div class="ztgg">
        <video id="example_video_1" class="video-js vjs-default-skin"
              controls preload="auto" width="100%" height="500"
              :poster="videoData.poster"
              data-setup='{"example_option":true}'>
             <source :src="videoData.src" type='video/mp4' />
             <!-- <source src="http://video-js.zencoder.com/oceans-clip.webm" type='video/webm' />
             <source src="http://video-js.zencoder.com/oceans-clip.ogv" type='video/ogg' /> -->
             <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
        </video>
    </div>
</template>

<script>
import {
    mapGetters
}
from 'vuex'
export default {
    data(){
        return{}
    },
    props: ['videoData']
}

</script>
