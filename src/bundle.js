require('./style.sass');
const markoComponent = require('./components/main/index.marko');

const result = markoComponent.renderSync();
document.body.innerHTML = '';
result.appendTo(document.body);
