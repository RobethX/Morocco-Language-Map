import * as d3 from "d3";
import * as topojson from "topojson-client";

export default function Map() {
	var provinces;

	d3.json("https://raw.githubusercontent.com/yousfiSaad/morocco-map/main/data/provinces.json")
		.then(data => {
			provinces = topojson.feature(data, data.objects.provinces);
			console.log(provinces);
		}).catch(error => {
			console.log("error loading map", error);
		});

	return (
		<div className="Map">
			hello, world!<br/>
			<svg className="Map-svg"/>
		</div>
	);
}