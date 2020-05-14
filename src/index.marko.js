// Compiled using marko@4.21.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/todomvc-marko$1.0.1/src/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    main_template = require("./components/main"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    main_tag = marko_loadTag(main_template),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><title>Todo MVC</title><link rel=stylesheet type=text/css href=./bundle.css><meta name=viewport content=\"width=device-width, initial-scale=1.0\"></head><body>");

  main_tag({}, out, __component, "6");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "7");

  _preferred_script_location_tag({}, out);

  out.w("</body><script src=./bundle.js>\n</script></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    deps: [
      "./style.sass"
    ],
    id: "/todomvc-marko$1.0.1/src/index.marko",
    tags: [
      "./components/main",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
