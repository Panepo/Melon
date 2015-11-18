var data = require("./data.json");

var DataArr = {

	toggle: function(CBtoggle)
	{
		var output = new Array();
		var checkboxlist = [
		"小口径主砲", "中口径主砲", "大口径主砲", "副砲", "魚雷", "電探",
		"ソナー", "爆雷", "対艦強化弾", "対空機銃", "高射装置", "探照灯"
		];
		
		for ( var k = 0; k < data.length; k++)
		{
			output[k] = new Array();
			for ( var i = 0; i < CBtoggle.length; i++)
			{
				if ( CBtoggle[i] )
				{
					for ( var j = 0; j < data[k].length; j++)
					{
						if ( data[k][j][0] == checkboxlist[i] )
						{
							output[k].push([data[k][j][0], data[k][j][1], data[k][j][2]]);
						}
					}
				}
			}
		}
		return output;
	}
}
module.exports = DataArr;
/*
		var output = new Array();
		CBtoggle = [0,0,1,1,1,1,1,1,1,1,1,1];
		var checkboxlist = [
		"小口径主砲", "中口径主砲", "大口径主砲", "副砲", "魚雷", "電探",
		"ソナー", "爆雷", "対艦強化弾", "対空機銃", "高射装置", "探照灯"
		];
		
		for ( var k = 0; k < data.length; k++)
		{
			output[k] = new Array();
			for ( var i = 0; i < CBtoggle.length; i++)
			{
				if ( CBtoggle[i] )
				{
					for ( var j = 0; j < data[k].length; j++)
					{
						if ( data[k][j][0] == checkboxlist[i] )
						{
							output[k].push([data[k][j][0], data[k][j][1], data[k][j][2]]);
						}
					}
				}
			}
		}
//console.log(data[1]);
console.log(output[1]);

*/