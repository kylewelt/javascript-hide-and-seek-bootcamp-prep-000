function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var nodes = document.getElementById('app').querySelector('div#grand-node *');
  var next = [];
  console.warn(nodes);

  while (nodes) {
    if (nodes.querySelector('*') === null) {
      return nodes;
    }
    for (let i = 0, l = nodes.length; i < l; i++) {
      next.push(nodes.querySelector('*'));
    }
    nodes = nodes.querySelector('*');
  }
  return null;
}

function increaseRankBy(n) {
  var nodes = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = nodes.length; i < l; i++) {
    nodes[i].innerHTML = (nodes[i] + 1).toString();
  }
}
