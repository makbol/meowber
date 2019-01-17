<template>
    <div
        ref="container"
        class="search-result"
    >
        <div
            :style="{'background': backgroundColor, 'height': height}"
            class="search-result__gif-container">
            <span class="search-result__title">{{ result.title }}</span>
            <MediaElement
                :media="result.images.fixedWidth"
                @loaded="onLoad"
            />
        </div>
    </div>
</template>

<script>
import MediaElement from './MediaElement';

export default {
    name: 'SearchResult',
    components: {
        MediaElement
    },
    props: {
        result: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isLoaded: false,
            elementWidth: null
        };
    },
    computed: {
        backgroundColor() {
            // Credits https://stackoverflow.com/a/5092846
            return this.isLoaded ? 'none' : '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        },
        height() {
            const elementWidth = this.elementWidth
                ? this.elementWidth
                : this.result.images.fixedWidth.height;

            const ratio = elementWidth / this.result.images.fixedWidth.width;
            const height = Math.floor(this.result.images.fixedWidth.height * ratio) + 'px';
            return this.isLoaded ? 'auto' : height;
        }
    },
    mounted() {
        this.elementWidth = this.$refs.container.clientWidth;
    },
    methods: {
        onLoad() {
            this.isLoaded = true;
        }
    }
};
</script>

<style lang="scss">
    .search-result {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
    .search-result__gif-container {
        position: relative;
    }
    .search-result__title {
        position: absolute;
        left: 0;
        bottom: 4px;
        text-shadow: 1px 1px 0 #000;
        padding: 5px;
        font-size: 12px;
    }
</style>
