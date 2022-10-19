var fs = require('fs');
var filepath = './src/assets/styles/tailwind.css';
// var filepath='./src/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
String.prototype.hashCode = function() {
    var hash = 0,
        i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};
// fs.readFile(filepath, function(err, data) {
//     var re = /\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*\s*/g
//     var s = data.toString();
//     var a = {}

//     function findMatches(regex, str, matches = []) {
//         const res = regex.exec(str)
//         res && matches.push(res) && findMatches(regex, str, matches)
//         return matches
//     }

//     const matches = findMatches(re, s);
//     matches.forEach(element => {
//         a[element[0]]="areis"+element[0].hashCode()
//     });
//     fs.writeFileSync('cssMap.json', JSON.stringify(a));

//     // fs.writeFile('cssMap.json', a, (err) => {
//     //     if (err) throw err;
//     //     console.log('Data written to file');
//     // });
//     // console.log(a);
// });

fs.readFile('./cssMap.json', 'UTF-8', function(err, data) {
    var t = JSON.parse(data);
    // console.log(t)
    
    for (const property in t) {
        console.log(`${property}: ${t[property]}`);
      }
})