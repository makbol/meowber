<template>
    <div class="infinite-scroll" />
</template>

<script>
export default {
    name: 'InfiniteScroll',
    props: {
        offset: {
            type: Number,
            default: 10
        },
        threshold: {
            type: Number,
            default: 1.0
        }
    },
    data() {
        return {
            observer: null
        };
    },
    mounted() {
        /*
         I'm aware of browser compatibility requirements
         but I decided to use this sweet new API
         to try it. It gives nice perf gain and looks
         very clean comparing to "onScroll" method
          */

        const observerOptions = {
            rootMargin: `${this.offset}px`,
            threshold: this.threshold
        };

        this.observer = new IntersectionObserver(entries => {
            const infiniteScrollElement = entries[0];
            if(infiniteScrollElement.isIntersecting) {
                this.$emit('in-viewport');
            }
        }, observerOptions);

        this.observer.observe(this.$el);
    },
    destroyed() {
        this.observer.disconnect();
    }
};
</script>

<style lang="scss">
    .infinite-scroll {
        height: 10px;

        // debug
        //background: red;
    }
</style>
