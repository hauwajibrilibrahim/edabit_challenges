//Given any number of parameters (which is signified using *args syntax), return True if none of the variables are falsy/empty
function nothing_is_nothing() {
    return [...arguments].every(x => x)
}
