// Compiled using marko@4.21.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/todomvc-marko$1.0.1/src/components/main/components/task-manager/components/task-footer/index.marko",
    marko_component = require("./component"),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_classAttr = require("marko/src/runtime/html/helpers/class-attr");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<footer class=task-footer><div>" +
    marko_escapeXml(input.itemsLeft) +
    " itens left</div><div class=task-footer-filters><button" +
    marko_classAttr({
      active: state.activeFilter === "all"
    }) +
    ">All</button><button" +
    marko_classAttr({
      active: state.activeFilter === "active"
    }) +
    ">Active</button><button" +
    marko_classAttr({
      active: state.activeFilter === "completed"
    }) +
    ">Completed</button></div><div class=task-footer-actions><a" +
    marko_classAttr({
      hide: !input.hasFinished
    }) +
    " href=#>Clear Completed</a></div></footer>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    deps: [
      "./style.sass"
    ],
    id: "/todomvc-marko$1.0.1/src/components/main/components/task-manager/components/task-footer/index.marko",
    component: "./"
  };
