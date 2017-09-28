var svg = d3.select('svg');

var words = ['one', 'two', 'three', 'four'];
words.forEach(function(word) {
    console.log(word);
    if (word === 'two') {
        words.shift();
    }
});

