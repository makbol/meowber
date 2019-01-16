<template>
    <div class="search-results">
        <div
            v-for="column in columns"
            :key="column.id"
            :style="{width: columnWidth}"
            class="search-results__column">
            <search-result
                v-for="result in column.elements"
                :key="result.id"
                :result="result" />
        </div>
    </div>
</template>

<script>
import SearchResult from './SearchResult';

function createArrayIterator(numberOfArrays) {
    let index = 0;
    return {
        getIndex() {
            if(index >= numberOfArrays) {
                index = 0;
            }
            return index++;
        }
    };
}

export default {
    name: 'SearchResults',
    components: {
        SearchResult
    },
    props: {
        results: {
            type: Array,
            required: true
        },
        numberOfColumns: {
            type: Number,
            required: true
        }
    },
    computed: {
        columns() {
            const columns = [...Array(this.numberOfColumns).keys()].map((key) => { return {id: key, elements: [] }; });
            const arrayIterator = createArrayIterator(this.numberOfColumns);

            this.results.forEach(result => {
                columns[arrayIterator.getIndex()].elements.push(result);
            });

            return columns;
        },
        columnWidth() {
            return 100 / this.numberOfColumns + '%';
        }
    }
};
</script>

<style lang="scss">
    .search-results {
        max-width: 900px;
        padding: 0 15px;
        margin: 0 auto;
        display: flex;
        margin-top: 15px;
    }
    .search-results__column {
        padding-right: 15px;
        box-sizing: border-box;

        &:last-of-type {
            padding-right: 0;
        }
    }
</style>
