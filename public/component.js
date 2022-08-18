const listAdd = {
  list: [],

  subscribe(cb) {
    this.list.push(cb);
  },

  publish(arg) {
    this.list.forEach(cb => {
      cb && cb(arg);
    });
  }

};
const listDel = {
  list: [],

  subscribe(cb) {
    this.list.push(cb);
  },

  publish(arg) {
    this.list.forEach(cb => {
      cb && cb(arg);
    });
  }

};
const ViewShow = {
    list: [],

    subscribe(cb) {
        this.list.push(cb);
    },

    publish(arg) {
        this.list.forEach(cb => {
            cb && cb(arg);
        });
    }

};
let logicWorker;

if (typeof Worker !== "undefined") {
  if (typeof logicWorker == "undefined") {
    logicWorker = new Worker("logic.js");
  }

  logicWorker.onmessage = e => {
    console.log(e.data);
    const edata = JSON.parse(e.data);

    if ("listdel" in edata) {
      listDel.publish(edata);
    }

    if ("listadd" in edata) {
      listAdd.publish(edata);
    }
  };
} else {
  alert("web worker is not supported");
}

function Item(props) {
  return createElement("li", {
    className: "item",
    style: props.style
  }, " ", props.children, " ", createElement("a", {
    href: "#",
    onClick: props.onRemoveItem
  }, " X "));
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        text: 'aaabbbccc',
        color: 'pink'
      }, {
        text: 'abcabc',
        color: 'orange'
      }, {
        text: 'abcdef',
        color: 'yellow'
      }]
    };
    listAdd.subscribe(this.handleAdd.bind(this));
    listDel.subscribe(this.handleItemRemove.bind(this));
  }

  handleItemRemove(edata) {
    if (typeof this.props.id == "undefined" || this.props.id == edata["listdel"]) {
      this.setState({
        list: this.state.list.filter((item, i) => i !== edata["index"])
      });
    }
  }

  handleAdd(edata) {
    console.log(edata);

    if (typeof this.props.id == "undefined" || this.props.id == edata["listadd"]) {
      this.setState({
        list: [...this.state.list, {
          text: edata["value"]
        }]
      });
    }
  }

  render() {
    return createElement(View, null, createElement("ul", {
      className: "list"
    }, this.state.list.map((item, index) => {
      return createElement(Item, {
        style: {
          background: item.color,
          color: this.props.textColor
        },
        onRemoveItem: () => {
          let tmp = {
            listdel: this.props.id,
            index: index
          };
          logicWorker.postMessage(JSON.stringify(tmp));
        }
      }, item.text);
    })), createElement(View, null, createElement("input", {
      ref: ele => {
        this.ref = ele;
      }
    }), createElement("button", {
      onclick: () => {
        let tmp = {
          listadd: this.props.id,
          value: this.ref.value
        };
        logicWorker.postMessage(JSON.stringify(tmp));
      }
    }, "Add")));
  }

}

class View extends Component {
  constructor(props) {
    super(props);
    ViewShow.subscribe(this.handleShowSwitch.bind(this));
    this.state = {
      show: true
    };

    if ("show" in this.props) {
      this.state.show = this.props.show;
    }
  }

  handleShowSwitch(id) {
    if (typeof this.props.id !== "undefined" && this.props.id == id) {
      console.log(this.state);
      let tmpstate = JSON.parse(JSON.stringify(this.state));
      tmpstate.show = !tmpstate.show;
      console.log(tmpstate);
      this.setState(tmpstate);
    }
  }

  render() {
    return createElement("div", {
      className: "view",
      style: this.state.show ? this.props.style : "display: none"
    }, this.props.children);
  }

}