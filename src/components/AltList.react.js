var React = require("react");
var ReactPropTypes = React.PropTypes;
var Constants = require("../constants/constants");

var AltList = React.createClass({
	displayName: "AltList",
	
	propTypes: {
    list: ReactPropTypes.array.isRequired,
		display: ReactPropTypes.number.isRequired,
		tableId: ReactPropTypes.string.isRequired,
		tableClass: ReactPropTypes.string.isRequired,
		day: ReactPropTypes.number.isRequired,
  },
	
	handleChange: function(event) {
		var trId = this.props.tableId + event.target.id.slice(-2);
		if ( event.target.checked ) {
			document.getElementById(trId).style.color = "blue";
		} else {
			document.getElementById(trId).style.color = "black";
		}
	},

	render: function(){
		var TableData = [];
		var TableCont;
		var ImgString = "";
		var CheckString = "";
		var KeyString = "";

		for ( var j = 0; j < this.props.list.length; j++) {
			for ( var k = 0; k < Constants.listType.length; k++ ) {
				if ( this.props.list[j][0] == Constants.listType[k]) {
					ImgString = "./img/sit" + Constants.listTypeNumber[k] + ".png";
				}
			}
			
			for (var k = 0; k < Constants.listAA.length; k++ ) {
				if ( this.props.list[j][1] == Constants.listAA[k]) {
					ImgString = "./img/sit0.png";
				}
			}
			
			CheckString = this.props.tableId + " row" + this.props.day.toString() + j.toString();
			KeyString = this.props.tableId + this.props.day.toString() + j.toString();
			
			TableCont = (
				<tr key={KeyString} id={KeyString} >
				<td className="th0">
					<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select" htmlFor={CheckString}>
						<input type="checkbox" id={CheckString} className="mdl-checkbox__input" onChange={this.handleChange}/>
					</label>
				</td>
				<td className="th1"><img src={ImgString} height="30" width="30"/></td>
				<td id={KeyString} className="th2">{this.props.list[j][0]}</td>
				<td id={KeyString} className="th3">{this.props.list[j][1]}</td>
				<td id={KeyString} className="th4 mdl-data-table__cell--non-numeric">{this.props.list[j][2]}</td>
				</tr>
			);
			TableData.push(TableCont);
		}
		
		if ( this.props.display === 0 || this.props.list.length === 0 ) {
			return null;
		} else {
			return(
				<div className="AltList">
					<table className={this.props.tableClass}>
						<tbody>
							{TableData}
						</tbody>
					</table>
				</div>
			)
		}
	}
});

module.exports = AltList;