'use strict';

var React = require('react'),
    PlumbPlane;

export default PlumbPlane = React.createClass({
    render: function () {
        return (
            /*jshint ignore:start */
            <div id="diagramContainer">
                <div id="item_left" className="nodepanel">
                    <h1>Titel</h1>
                    Content
                    <hr />
                    <button className="btn btn-success">Button</button>
                </div>
                <div id="item_right" className="nodepanel" style={{'left': '200px'}}>
                    <h1>Titel 2</h1>
                    Content 2
                    <hr />
                    <button className="btn btn-success">Button 2</button>
                </div>
                <div id="item_third" className="nodepanel" style={{'left': '400px'}}>
                    <h1>Titel 3</h1>
                    Content 3
                    <hr />
                    <button className="btn btn-success">Button 3</button>
                </div>
            </div>
            /*jshint ignore:end */
        );
    },

    componentDidMount: function () {

        var common = {
            anchor: ["Left", "Right"],
            endpoint:"Dot"
        };

        jsPlumb.ready(function() {
            jsPlumb.connect({
                source:"item_left",
                target:"item_right",
                endpoint:"Rectangle"
            }, common);
            jsPlumb.connect({
                source:"item_right",
                target:"item_third",
                endpoint:"Rectangle"
            }, common);
            jsPlumb.draggable("item_left");
            jsPlumb.draggable("item_right");
            jsPlumb.draggable("item_third");

            console.log(jsPlumb.getConnections());
        });
    }
});

//module.exports = {
//    PlumbPlane: PlumbPlane
//}
