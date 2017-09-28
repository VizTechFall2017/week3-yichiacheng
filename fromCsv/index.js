var svg = d3.select('svg');

/* Your code goes here

d3.csv ('./data.csv', function(dataIn){
console.log(dataIn);

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(data){
        console.log(data,cx);
        return d.x,
    })
    .attr('cy', function(d){
        return d.y;
    })
    .attr('fill',function(d){
        return d.fill;
    })


}]
*/

var scaleruler = d3.scaleLinear()
    .domain(0,200) .range(0,10)
console.log(scaleruler(95));

var scaleLinear; d3.scaleLinear()
    .domain{["small","medium","large"]
    console.log(scaleLinear(large)}


