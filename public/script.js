d3.json('/assets/js/data/players3.json', function(error, json) {
  var players = json.list;
  console.log(players);

  //set margin variables
  var margin = { top: 0, right: 0, bottom: 20, left: 20 },
      height = 300 - margin.top - margin.bottom,
      width = 400 - margin.left - margin.right
      
  // sort players   
  players.sort(function(a, b) {
    return b.appears - a.appears;
  })
  
  appearancesData = players.map(function(player) {
  return player.appears;
  });

  var max = d3.max(appearancesData);
  

  //set empty variables    
  var   tempColor,
        yScale,
        yAxisValues,
        yAxisTicks,
        xScale,
        colors,
        tooltip,
        myChart;
  
 //set the scale with the highest score
  yScale = d3.scaleLinear()
    .domain([0, max])
    .range([0,height]);

  //set the y axis values with the highest score
  yAxisValues = d3.scaleLinear()
    .domain([0, max])
    .range([height,0]);

  //set the ticks every 10
  yAxisTicks = d3.axisLeft(yAxisValues)
  .ticks(10)

  // set the bars across
  xScale = d3.scaleBand()
    .domain(appearancesData)
    .paddingInner(.2)
    .paddingOuter(.2)
    .range([0, width]);

  //set graduated colors
  // colors = d3.scaleLinear()
  //   .domain([0, 5, 10])
  //   .range(['#07889b','#333', '#66b9bf'])

  //create tool tips
  tooltip = d3.select('body')
    .append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0)

  //create chart
  myChart = d3.select('#charts1')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform',
      'translate(' + margin.left + ',' + margin.right + ')')
    
      //this pulls in the array
    .selectAll('rect')
    .data(players)
    .enter()
    .append('rect')
    .attr('fill', '#07889b')
    .attr('width', function(appearancesData) {
      return xScale.bandwidth();
    })
    .attr('x', function(players) {
      return xScale(players.appears);
    })
    .attr('y', height)
     // use later .attr('fill', colors) 
  
      .on('mouseover', function(individualPlayer) {
        tooltip.transition().duration(200)
          .style('opacity', .9)

      //   //the label and label styles
        tooltip.html(
          '<div style="font-size: 2rem;">' +
            individualPlayer.name + "/ " + individualPlayer.appears + ' matches</div>'
        )
          .style('left', (d3.event.pageX -35) + 'px')
          .style('top', (d3.event.pageY -30) + 'px')
        
        tempColor = this.style.fill;
        d3.select(this)
          .style('fill', '#efaa52')
      })

      // //mouseout
      .on('mouseout', function(individualPlayer) {
        tooltip.html('')
        d3.select(this)
          .style('fill', tempColor)
      })

    yGuide = d3.select('#charts1 svg').append('g')
              .attr('transform', 'translate(20,0)')
              .call(yAxisTicks)   
              .styles({
                "border":"1px",
               "border-style":"solid",
               "border-color":"#f00"})

    myChart.transition()
    .attr('height', function(individualPlayer) {
      return yScale(individualPlayer.appears);
    })
    .attr('y', function(individualPlayer) {
      return height - yScale(individualPlayer.appears);
    })
    .delay(function(individualPlayer, i) {
      return i * 20;
    })
    .duration(1000)
    .ease(d3.easeBounceOut)

  }); // json import
