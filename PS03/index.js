var svg = d3.select('svg');

/* Your code goes here */


d3.csv("data.csv", function(data){
    console.debug(JSON.stringify(data));
    dataset = data;

    var w = 600,h = 500,padding = 30, barMargin = 2;

    var Ymax = d3.max(dataset, function(d){return d.value}),
        Ymin = d3.min(dataset, function(d){return d.value});

    var xScale = d3.scale.linear()
        .domain([0, dataset.length])
        .range([padding , w - padding]);

    var yScale = d3.scale.linear()
        .domain([Ymin, Ymax])
        .range([padding, h - padding]);

    var colorScale = d3.scale.linear()
        .domain([Ymin, Ymax])
        .range([0, 700]);

    var barWidth = (w - padding*2) / dataset.length - barMargin;
    var svg = d3.select('Boston1bedrent').append('svg').attr({'width': w,'height': h})

    svg.selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
        .attr({
            'x': function(d, i){return xScale(i)},
            'y': function(d){return h - yScale(d.value)},
            'width': barWidth,
            'height':function(d){return yScale(d.value)},
            'r': function(d){return Math.sqrt(h - d[1])},
            'fill': function(d){
                var color = 0.2 + colorScale(d.value) * 0.001;
                return  d3.hsl(200 ,color, color);
            },
            'title': function(d){
                return 'Name : ' + d.name;
            }

        });

    svg.selectAll('text').data(dataset).enter()
        .append('text')
        .text(function(d){ return d.value})
        .attr({
            'x': function(d, i){return xScale(i) + barWidth/2},
            'y': function(d){return h - yScale(d.value) + 15},
        });
    svg.append('g').selectAll('text').data(dataset).enter()
        .append('text')
        .text(function(d){ return d.name})
        .attr({
            'x': function(d, i){return xScale(i) + barWidth/2},
            'y': function(d){return h - yScale(d.value) - 10},

        });
});




