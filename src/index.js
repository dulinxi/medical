import * as d3 from 'd3';
export default class Medical {
  constructor() {
    this.version = '1.0';
    this.timeline = Timeline;
  }
}

class Timeline extends Medical {
  constructor(config = {}) {
    super();
    this.layout = ['date', 'indays', 'treatDays', 'noon'];
    this.config = {
      width: 300,
      height: 300,
      ...config
    };
    this.timeline = null;
    this.timeline = d3
      .select(this.config.el)
      .append('svg')
      .attr('width', this.config.width + 20)
      .attr('height', this.config.height + 20);
    this.drawFrame();
  }
  // initialize the timeline
  init() {}
  // draw the wireframe of the timeline
  drawFrame() {
    const frame = this.timeline.append('g').attr('class', 'frame');
    const _that = this;
    frame
      .selectAll('.vlines')
      .data(d3.range(51))
      .enter()
      .append('line')
      .attr('class', 'vlines')
      .attr('x1', function(d, i) {
        return i * 10;
      })
      .attr('y1', 10)
      .attr('x2', function(d, i) {
        return i * 10;
      })
      .attr('y2', function(d, i) {
        return _that.config.height;
      });
    frame
      .selectAll('.hlines')
      .data(d3.range(51))
      .enter()
      .append('line')
      .attr('class', 'hlines')
      .attr('x1', 10)
      .attr('y1', function(d, i) {
        return i * 10;
      })
      .attr('x2', function(d, i) {
        return _that.config.width;
      })
      .attr('y2', function(d, i) {
        return i * 10;
      });
    console.log(`timeline start ${this.version}`);
  }
  // update the timeline when the data change
  update() {}
}
