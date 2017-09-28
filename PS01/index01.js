var svg = d3.select('svg');

/* Your code goes here */
var dataset = [];
for (var i=0; i<10; i++)
    dataset.push(Math.round(Math.random()*30));

var circles = svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle');

circles.attr('cx',function(d,i){
    return (i*60)+30;
})
    .attr('cy',600/2)
    .attr('r',function(d){
        return d;
    })
    .attr('fill','pink')
    .attr('stroke','black')
    .attr('stroke-width',function(d){
        return d*0.2;
    });