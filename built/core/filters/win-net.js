module.exports = function(input) {
    var k = input.split(/\n/);
    k.splice(0, 4);
    k = k.map(e => e.trim()).map(function(f) {
        let b = f.split(/\s{2}/).filter(m => m.length);

        //console.log(b);
        return {
            state: b[3],
            local: b[1],
            protocal: b[0],
            ext: b[2]
        }
    });
    return k
}
