function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    const fn = function() {
        console.log("I am named")
    }
    return fn;
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log("So anonymous right now.")
    }
}