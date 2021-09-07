class DimensionalChartPlot extends HTMLElement {
  constructor() {
    // always call super first in constructor
    super();

    const shadow = this.attachShadow({ mode: 'open' });
  }
}

customElements.define('dimensional-plot', DimensionalChartPlot);
