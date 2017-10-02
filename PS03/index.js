var svg = d3.select('svg');

/* Your code goes here */


d3.csv("boston1bed2017.csv",function(dataIn){
    console.log(dataIn);


    var s = d3.select('body').append('svg')
        .attr({
            'width':800,
            'height':900
        })
        .style({
            'border':'1px solid #000'
        });
    var rect = s.append('g')
        .attr({
            'id':'rect'
        });
    var price = s.append('g')
        .attr({
            'id':'value'
        });
    var name = s.append('g')
        .attr({
            'id':'name'
        });

    rect.selectAll('rect')
        .data(nameById)
        .enter()
        .append('rect')
        .attr({
            'width':function(d){
                return d.values[0].values.length;
            },
            'height':10,
            'fill':function(d){
                if(d.values[0].values.length>3000){
                    return '#c00';
                }else if(d.values[0].values.length>2500&&d.values[0].values.length<=3000){
                    return '#f90';
                }else if(d.values[0].values.length>2000&&d.values[0].values.length<=2500){
                    return '#aa0';
                }
            },
            'x':100,
            'y':function(d){
                return d._id*15;
            }
        });

    price.selectAll('text')
        .data(nameById)
        .enter()
        .append('text')
        .attr({
            'fill':'#000',
            'x':function(d){
                return d.values[0].values.length+105;
            },
            'y':function(d){
                return d._id * 15 + 10;
            }
        }).text(function(d){
        return d.values[0].values.length;
    }).style({
        'font-size':'12px'
    });

    name.selectAll('text')
        .data(nameById)
        .enter()
        .append('text')
        .attr({
            'fill':'#000',
            'text-anchor': 'end',
            'x':90,
            'y':function(d){
                console.log(d);
                return d._id * 15 + 10;
            }
        }).text(function(d){
        return d.values[0].values[0].name;
    }).style({
        'font-size':'12px'
    });
})