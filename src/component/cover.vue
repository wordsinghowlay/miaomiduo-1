<style scoped>

.vertical-center {
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    -webkit-box-direction: normal;
    box-direction: normal;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    flex-direction: column;
    -ms-flex-direction: column;
    -webkit-box-pack: center;
    box-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    -o-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
}

#loading-cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: #a5d7ee url('../../src/assets/images/common/cover.png') no-repeat bottom center;
    background-size: 7.5rem auto;
    color: #666;
    text-align: center;
    -webkit-transition: all, .5s;
    transition: all, .5s;

}

#loading-cover a {
    display: block;
    width: 5.02rem;
    margin: 0 auto;
    position: absolute;
    top: 1rem;
    left: 50%;
    margin-left: -2.51rem;
}
#loading-cover a img{
    display: block;
    width: 100%;
    height: 100%;
}
#loading-cover.done {
    opacity: 0;
    z-index: -1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
}

</style>

<template>

<div id="loading-cover" class="vertical-center" :class="show?'':'done'">
    <a href="#" class="logo-img">
        <img src="../../src/assets/images/common/miaomiduo.png"/>
    </a>
</div>

</template>

<script>

export default {
    props: ['show']
}

</script>
