(function (d3) {
  "use strict";

  var dataset = [
    { x: 10, y: 50 },
    { x: 20, y: 20 },
    { x: 40, y: 10 },
    { x: 60, y: 40 },
    { x: 80, y: 5 },
    { x: 100, y: 30 },
  ];
  var h = 300; //height
  var w = 700; //width
  var p = 30; //padding

  var x = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(dataset, function (d) {
        return d.x;
      }),
    ])
    .range([p, w - p]);

  var y = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(dataset, function (d) {
        return d.y;
      }),
    ])
    .range([h - p, p]);

  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("padding", p)
    .style("border", "1px solid black");

  svg
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
      return x(d.x);
    })
    .attr("cy", function (d) {
      return y(d.y);
    })
    .attr("r", 10);

  d3.selectAll("circle")
    .attr("fill", "red")
    .attr("stroke", "pink")
    .attr("stroke-width", "3px");

  svg
    .append("g")
    .attr("transform", "translate(0,270)")
    .call(d3.axisBottom(x).ticks(5));
  svg
    .append("g")
    .attr("transform", "translate(30,0)")
    .call(d3.axisLeft(y).ticks(5));

  var drawLine = d3
    .line()
    .x(function (d) {
      return x(d.x);
    })
    .y(function (d) {
      return y(d.y);
    });

  svg
    .append("path")
    .attr("d", drawLine(dataset))
    .attr("stroke", "red")
    .attr("stroke-width", 3)
    .attr("fill", "none");
})(d3);
