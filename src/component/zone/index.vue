<style>

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.index-box {
    padding: 0.8rem 0;
    background: #f8f8f8;

}

.app-fade-enter-active {
    transition: all .3s ease;
}

.app-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.app-fade-enter,
.app-fade-leave-active {
    padding-right: 500px;
    padding-left: 500px;
    opacity: 0;
}
.search-fade-enter-active {
  transition: all .3s ease;
}
.search-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.search-fade-enter, .search-fade-leave-active {
  transform: translateX(-10px);
  opacity: 0;
}
.subMenu-fade-enter-active {
  transition: all .6s ease;
}
.subMenu-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.subMenu-fade-enter, .subMenu-fade-leave-active {
  transform: translateX(-10px);
  opacity: 0;
}
</style>

<template>
    <div class="index-box">
        <headnav v-on:showRight="addMood=true" v-on:leftEvent="subMenu=true" v-bind:headConfig="headConfig"></headnav>
        <transition name="subMenu-fade">
            <subMenu v-show="subMenu" v-on:hide="hideSubMenu"></subMenu>
        </transition>
        <transition name="search-fade">
            <addMood v-show="addMood" v-on:hide="hideAddMood"></addMood>
        </transition>
        <mood-item v-on:showMoodModule="addMoods"></mood-item>
    </div>
</template>

<script>

import {
    mapGetters
}
from 'vuex'
import headnav  from './../common/header.vue'
import subMenu  from './../common/zone-sub-menu.vue'
import addMood  from './add-mood.vue'
import moodItem from './mood-item.vue'
import loading  from './../common/loading.vue'

const components = {
    headnav, subMenu, addMood, moodItem, loading
}

export default {
    data() {
        return {
            lo: false,
            headConfig : {
                title : "喵zone",
                leftIcon : true,
                leftIconClass : 'icon-liebiao',
                rightIcon : true,
                rightIconClass : 'icon-shuxie'
            },
            subMenu    : false,
            addMood    : false
        }
    },
    computed: mapGetters({
    }),
    methods : {
        hideSubMenu : function(){
            this.subMenu = false;
        },
        hideAddMood : function(){
            this.addMood  = false;
        },
        addMoods : function (index) {
            this.addMood = true;
            console.log(index);
        }
    },
    created() {

    },
    name: 'index',
    components: components
}

</script>
