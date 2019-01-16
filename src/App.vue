<template>
    <div id="app">
        <Search @perform-search="onPerformSearch" />
        <div
            v-show="results.length"
            class="options">
            <button
                class="button fi icon-onecolumn"
                @click="useOneColumnLayout"
            />
            <button
                class="button fi icon-multicolumn"
                @click="useThreeColumnsLayout"
            />
        </div>
        <SearchResults
            :results="results"
            :number-of-columns="numberOfColumns"
        />
    </div>
</template>

<script>
import Search from './components/Search';
import SearchResults from './components/SearchResults';

import * as api from './common/api.service';

export default {
    name: 'Meowber',
    components: {
        Search,
        SearchResults
    },
    data() {
        return {
            results: [],
            numberOfColumns: 3
        };
    },
    methods: {
        onPerformSearch(keyword) {
            if(keyword) {
                api.search(keyword)
                    .then(searchResults => {
                        this.results = searchResults;
                    });
            } else {
                this.results = [];
            }

        },
        useOneColumnLayout() {
            this.numberOfColumns = 1;
        },
        useThreeColumnsLayout() {
            this.numberOfColumns = 3;
        }
    }
};
</script>

<style lang="scss">
    @import './styles/icons';

    html, body {
        height: 100%;
    }
    body {
        margin: 0;
        background: #000;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #fff;
        height: 100%;
        width: 100%;
    }
    .options {
        display: flex;
        justify-content: flex-end;
        margin: 0 auto;
        padding: 0 15px;
        max-width: 900px;

    }
    .button {
        // reset
        background: none;
        border: none;
        color: #fff;
        outline: none;
        cursor: pointer;
        padding: 0;

        margin: 5px;
    }
</style>
