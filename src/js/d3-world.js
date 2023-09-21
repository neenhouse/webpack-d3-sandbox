// From this example https://d3-graph-gallery.com/graph/backgroundmap_basic.html

import * as d3 from 'd3';

// import worldJson from '../data/world.json';

// The svg
const svg = d3.select('svg'),
    width = +svg.attr('width'),
    height = +svg.attr('height');

// Map and projection
const projection = d3
    .geoNaturalEarth1()
    .scale(width / 1.3 / Math.PI)
    .translate([width / 2, height / 2]);

// Load external data and boot
d3.json('./data/world.json')
    .then((data) => {
        // Draw the map
        svg.append('g')
            .selectAll('path')
            .data(data.features)
            .enter()
            .append('path')
            .attr('fill', '#69b3a2')
            .attr('d', d3.geoPath().projection(projection))
            .style('stroke', '#fff');
    })
    .catch((error) => {
        console.error('error occurred', error);
    });
