<template>
    <div id="app">
        <Search @keyword-change="onKeywordChange" />
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
        <LoadingIndicator v-if="isLoading" />
        <InfiniteScroll
            v-if="results.length"
            :offset="150"
            :threshold="0.5"
            @in-viewport="loadMoreResults"
        />
    </div>
</template>

<script>
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import InfiniteScroll from './components/InfiniteScroll';
import LoadingIndicator from './components/LoadingIndicator';

import * as api from './common/api.service';

const NUM_OF_MEDIA = 25;

export default {
    name: 'Meowber',
    components: {
        Search,
        SearchResults,
        InfiniteScroll,
        LoadingIndicator,
    },
    data() {
        return {
            results: [],
            numberOfColumns: 3,
            currentKeyword: '',
            isLoading: false,
            hasRecords: true
        };
    },
    methods: {
        onKeywordChange(keyword) {
            if(keyword) {
                this.currentKeyword = keyword;
                this.performSearch(keyword)
                    .then(searchResults => {
                        this.results = searchResults;
                    });
            } else {
                this.results = [];
                this.hasRecords = true;
            }
        },
        performSearch(keyword) {
            this.isLoading = true;

            return api.search(keyword, NUM_OF_MEDIA, this.results.length)
                .then(searchResults => {
                    this.isLoading = false;

                    if(searchResults.length === 0) {
                        this.hasRecords = false;
                    }
                    return searchResults;
                })
                .catch(err => {
                    this.isLoading = false;
                    console.error(err);
                });
        },
        loadMoreResults() {
            if(this.isLoading || !this.hasRecords) {
                return;
            }

            if(this.results.length) {
                this.performSearch(this.currentKeyword)
                    .then(searchResults => {
                        this.results.push(...searchResults);
                    });
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
