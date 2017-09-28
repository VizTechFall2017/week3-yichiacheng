var svg = d3.select('svg');

/* Your code goes here */
d3.csv("dataps02.csv",function(dataIn){
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
            return d.y;
        })
        .attr('r', function(d) {
            return d.r;

        })

        .attr('fill','yellow')
        .attr('stroke','brown')
        .attr('opacity','0.8')
        .attr('stroke-width',function(d){
            return d*0.2;
        })

})

