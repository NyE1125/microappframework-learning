
const data = {
    item1: 'item1-click',
    ifShow: true,
    elements: ['elem1', 'elem2', 'elem3']
};

let jsx =
    <View id="main">
        <h2>Title</h2>
        <ul className="list">
            <li className="item" style={{ background: 'blue', color: 'yellow' }} onClick={() => alert(1)}>{data.item1}</li>
            <li className="item">{data.ifShow ? "item-2" : ""}</li>
            {data.elements.map(item => <li className="item">{item}</li>)}
        </ul >
        <View id="data" show={data.ifShow}>
            <h1>Title</h1>
        </View>
        <button onclick={() => ViewShow.publish("data")}>SHOW</button>
        <List id="list" textColor={'#87ceeb'} />
    </View>;

render(jsx, document.getElementById('root'));