require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"../constants/constants.ls": Constants
}

{div, button, table, tbody, tr, td, label, input, img} = React.DOM

AltList = React.createClass do
	displayName: "AltList"
	
	propTypes:
		output: ReactPropTypes.array.isRequired
		display: ReactPropTypes.bool.isRequired
		tableId: ReactPropTypes.string.isRequired
	
	componentDidUpdate: !->
		componentHandler.upgradeDom()
	
	handleChange: (event) !->
		trId = event.target.id + "tr"
		if event.target.checked
			document.getElementById(trId).style.color = "blue"
		else
			document.getElementById(trId).style.color = "black"
		
	render: ->
		div null,
			if @props.display is true and @props.output.length !== 0
				table className: Constants.TableClass,
					tbody null,
						for data, i in @props.output
							tr key:i, id:@props.tableId + i.toString() + "tr",
								td className: "th0",
									label className: "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select", htmlFor: @props.tableId + i.toString(),
										input type: "checkbox" id:@props.tableId + i.toString(), className: "mdl-checkbox__input", onChange: @handleChange, null
								td className: "th1",
									img src: data.img, height: "25", width: "25", null
								td className: "th2", data.type
								td className: "th3", data.name
								td className: "th4 mdl-data-table__cell--non-numeric",
									if data.owner.length !== 0
										img src: "./img/" + data.owner + ".jpg", height: "25", width: "100", null

module.exports = AltList