module.exports = function(babel) {
    return {
        visitor: {
            Literal(path) {
                path.node.value = "Hi"
            }
        }
    }
}
