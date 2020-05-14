// Compiled using marko@4.21.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/todomvc-marko$1.0.1/src/components/main/components/task-manager/index.marko",
    marko_component = require("./component"),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    task_input_template = require("./components/task-input"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    task_input_tag = marko_loadTag(task_input_template),
    task_list_template = require("./components/task-list"),
    task_list_tag = marko_loadTag(task_list_template),
    task_footer_template = require("./components/task-footer"),
    task_footer_tag = marko_loadTag(task_footer_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=task-container>");

  task_input_tag({
      placeholder: "What needs to be done?",
      value: state.task
    }, out, __component, "1", [
    [
      "change",
      "handleTaskInput",
      false
    ],
    [
      "endChange",
      "addTask",
      false
    ]
  ]);

  task_list_tag({
      tasks: state.tasks
    }, out, __component, "2", [
    [
      "toggleFinishTask",
      "toggleFinishTask",
      false
    ],
    [
      "deleteTask",
      "deleteTask",
      false
    ]
  ]);

  task_footer_tag({
      itemsLeft: state.itemsLeft,
      hasFinished: state.hasFinished
    }, out, __component, "3", [
    [
      "filter",
      "filter",
      false
    ],
    [
      "clearCompleted",
      "clearCompleted",
      false
    ]
  ]);

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    deps: [
      "./style.sass"
    ],
    id: "/todomvc-marko$1.0.1/src/components/main/components/task-manager/index.marko",
    component: "./",
    tags: [
      "./components/task-input",
      "./components/task-list",
      "./components/task-footer"
    ]
  };
