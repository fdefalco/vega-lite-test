import 'jquery';
import 'tether';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from '../cover.css';

var vega = require('vega-lite');
vega.embed = require('vega-embed');

var vlSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "description": "A simple bar chart with embedded data.",
  "config" : {
    "background" : "#fff"
  },
  "width" : "500",
  "height" : "400",
  "data": {
    "values": [
      {"a": "A","b": 40}, {"a": "B","b": 55}, {"a": "C","b": 43},
      {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},
      {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52},
			{"a": "J","b": 10}, {"a": "K","b": 10}, {"a": "L","b": 20}
    ]
  },
  "mark": "circle",
  "encoding": {
    "x": {"field": "a", "type": "ordinal"},
    "y": {"field": "b", "type": "quantitative"}
  }
};

vega.embed("#vega", vlSpec, function(error, result) {
  // Callback receiving the View instance and parsed Vega spec
  // result.view is the View, which resides under the '#vis' element
});
