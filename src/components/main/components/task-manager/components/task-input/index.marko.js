// Compiled using marko@4.21.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/todomvc-marko$1.0.1/src/components/main/components/task-manager/components/task-input/index.marko",
    marko_component = require("./component"),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=task-input-container><label for=task class=task-label><i class=\"fas fa-camera\"></i></label><input type=text id=task" +
    marko_attr("placeholder", input.placeholder) +
    " maxlength=50" +
    marko_attr("value", input.value) +
    " class=task-input></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    deps: [
      "./style.sass"
    ],
    id: "/todomvc-marko$1.0.1/src/components/main/components/task-manager/components/task-input/index.marko",
    component: "./"
  };
