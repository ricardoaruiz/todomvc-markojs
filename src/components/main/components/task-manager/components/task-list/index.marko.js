// Compiled using marko@4.21.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/todomvc-marko$1.0.1/src/components/main/components/task-manager/components/task-list/index.marko",
    marko_component = require("./component"),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_classAttr = require("marko/src/runtime/html/helpers/class-attr");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<ul class=task-list>");

  var $for$0 = 0;

  marko_forOf(input.tasks, function(task, index) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<li><input type=checkbox" +
      marko_attr("value", task.id) +
      marko_attr("checked", task.done) +
      "><p" +
      marko_classAttr({
        done: task.done
      }) +
      ">" +
      marko_escapeXml(task.description) +
      "</p><button title=Remover>X</button></li>");
  });

  out.w("</ul>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    deps: [
      "./style.sass"
    ],
    id: "/todomvc-marko$1.0.1/src/components/main/components/task-manager/components/task-list/index.marko",
    component: "./"
  };
