// Compiled using marko@4.21.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/todomvc-marko$1.0.1/src/components/main/index.marko",
    marko_component = require("./component"),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    task_manager_template = require("./components/task-manager"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    task_manager_tag = marko_loadTag(task_manager_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=main><h1 class=title>todos</h1>");

  task_manager_tag({
      tasks: state.tasks
    }, out, __component, "2");

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    deps: [
      "./style.sass"
    ],
    id: "/todomvc-marko$1.0.1/src/components/main/index.marko",
    component: "./",
    tags: [
      "./components/task-manager"
    ]
  };
