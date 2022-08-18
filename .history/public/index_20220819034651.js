const data = {
  item1: 'item1-click',
  ifShow: true,
  elements: ['elem1', 'elem2', 'elem3']
};
let jsx = createElement("view", {
  id: "main"
}, createElement("h2", null, "Title"), createElement("ul", {
  className: "list"
}, createElement("li", {
  className: "item",
  style: {
    background: 'blue',
    color: 'yellow'
  },
  onClick: () => alert(1)
}, data.item1), createElement("li", {
  className: "item"
}, data.ifShow ? "item-2" : ""), data.elements.map(item => createElement("li", {
  className: "item"
}, item))), createElement("View", {
  id: "data",
  show: data.ifShow
}, createElement("h1", null, "Title")), createElement(List, {
  id: "list",
  textColor: '#87ceeb'
}));
render(jsx, document.getElementById('root'));