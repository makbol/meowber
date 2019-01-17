export function debounce (fn, delay) {
    let timeoutID = null;
    return function () {
        clearTimeout(timeoutID);
        let that = this;
        timeoutID = setTimeout(function () {
            fn.apply(that);
        }, delay);
    };
}
