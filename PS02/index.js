var svg = d3.select('svg');

/* Your code goes here */
d3.csv("data.csv",function(dataIn){
    console.log(dataIn);

    svg.selectAll('circle')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr('cx', function(data){
            console.log(data.cx);
            return data.x;
        })
        .attr('cy', function(d){
            return d.cy;
        })
        .attr('r', function(d) {
            return d.r;

        })
        .attr('fill',function(d){
            return d.color;
        })

})