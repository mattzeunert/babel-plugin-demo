module.exports = function(babel) {
    return {
        visitor: {
            ImportDeclaration: function(path){
                var filepath = path.node.source.value;

                if (filepath[0] !== "@") {
                    return;
                }

                filepath = filepath.substring(1)
                filepath = process.cwd() + "/import-demo/" + filepath;

                path.node.source.value = filepath;
            }
        }
    }
}
