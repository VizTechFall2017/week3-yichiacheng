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

    var scaleRuler = d3.scaleLinear().domain([0, 100]).range([0, 10]);

    console.log(scaleRuler(95));


    var scaleSizes = d3.scaleOrdinal().domain(["small", "medium", "large"]).range([30, 60, 90]);

    console.log(scaleSizes("large"))

})

