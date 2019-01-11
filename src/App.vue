<template>
    <div id="app">
        <Search />
        <SearchResults />
    </div>
</template>

<script>
    import Search from './components/Search'
    import SearchResults from './components/SearchResults'

    export default {
        name: 'Meowber',
        components: {
            Search,
            SearchResults
        }
    }
</script>

<style>
    body {
        margin: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
