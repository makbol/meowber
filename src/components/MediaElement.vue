<template>
    <div class="media-element">
        <video
            v-show="isLoaded"
            autoplay
            loop
            muted
            playsinline
            @loadeddata="onLoad">
            <source
                :src="media.mp4"
                type="video/mp4">
        </video>
    </div>
</template>

<script>
export default {
    /*
    TODO: Improve performance on low cost mobile devices
          by serving correct media type (webp for Chrome), hiding
          elements invisible in viewport, set height/width for
          video
     */

    name: 'MediaElement',
    props: {
        media: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isLoaded: false
        };
    },
    methods: {
        onLoad() {
            this.isLoaded = true;
            this.$emit('loaded');
        }
    }
};
</script>

<style lang="scss">
    .media-element {
        width: 100%;
        video {
            width: 100%;
        }
    }
</style>
