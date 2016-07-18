module.exports = function(babel) {
    return {
        visitor: {
            Literal(path) {
                // not in the slides, but if we always replace all strings that kinda
                // breaks the other demo a bit
                if (path.node.value !== "Hello") {
                    return
                }
                path.node.value = "Hi"
            }
        }
    }
}
