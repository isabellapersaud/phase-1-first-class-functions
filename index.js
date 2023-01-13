function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function named() {
        console.log ('my name is isabella')
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log ('girl has no name')
    }
}