<template>
    <div
        :class="{ 'search--active': isActive }"
        class="search"
    >
        <label
            :class="{'search--focus': isFocused}"
            for="search"
            class="search__label">
            <input
                id="search"
                v-model="keyword"
                class="search__input"
                type="search"
                autocomplete="off"
                placeholder="Type to search gifs"
                @focus="onFocus"
                @blur="onBlur"
            >
        </label>
    </div>
</template>

<script>
import { debounce } from '../common/utils';

export default {
    name: 'Search',
    data() {
        return {
            keyword: '',
            isFocused: false
        };
    },
    computed: {
        isActive() {
            return this.keyword.length > 0;
        }
    },
    watch: {
        keyword: debounce(function() {
            this.$emit('keyword-change', this.keyword);
        }, 300)
    },
    methods: {
        onFocus() {
            this.isFocused = true;
        },
        onBlur() {
            this.isFocused = false;
        }
    },
};
</script>

<style lang="scss">
    $txt-color: #fff;
    $icn-color: #fff;

    .search {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &--active {
            height: auto;
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }
    .search__label {
        display: inline-block;
        position: relative;
        height: 80px;
        width: 80px;
        box-sizing: border-box;
        margin: 0 8px 7px 0;
        padding: 13px 20px 0 30px;
        border: 3px solid $icn-color;
        border-radius: 40px;
        transition: all 200ms ease;
        cursor: text;

        &:after {
            content: "";
            position: absolute;
            width: 8px;
            height: 50px;
            right: -12px;
            top: 56px;
            background: $icn-color;
            border-radius: 3px;
            transform: rotate(-45deg);
            transition: all 200ms ease;
        }

        &.active,
        &:hover,
        .search--active &,
        &.search--focus {
            width: 100%;
            max-width: 900px;
            margin: 0 15px;

            &:after {
                height: 0;
            }
        }

        input {
            width: 100%;
            border: none;
            box-sizing: border-box;
            font-family: Helvetica;
            font-size: 40px;
            color: $txt-color;
            background: transparent;
            outline-width: 0;

            &::placeholder {
                opacity: 0;
                transition: opacity 300ms ease;
            }
        }

        &.search--focus,
        &:hover {
            input::placeholder {
                opacity: 1;
            }
        }
    }
</style>
