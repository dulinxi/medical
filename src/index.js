import * as d3 from 'd3';
export default class Medical {
  constructor() {
    this.version = '1.0';
    this.timeline = Timeline;
  }
}

class Timeline extends Medical {
  constructor() {
    super();
  }
  // initialize the timeline
  init() {}
  // draw the wireframe of the timeline
  drawFrame() {
    console.log(`timeline start ${this.version}`);
  }
  // update the timeline when the data change
  update() {}
}
