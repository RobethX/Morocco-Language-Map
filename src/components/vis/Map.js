import * as d3 from "d3";
import * as topojson from "topojson-client";

export default function Map(props) {
    var provinces = topojson.feature(props.data, props.data.objects.regions);
    //var data = props.data;
    var projection = d3.geoMercator().fitSize([props.width, props.height], provinces);
    var path = d3.geoPath().projection(projection);

    return (
        <div className="Map">
            <svg className="Map-svg" width={props.width} height={props.height}>
                <g className="Map-provinces">
                    {provinces.features.map((feature, i) => (
                        <path
                            key={feature.properties.name}
                            d={path(feature)}
                            fill="#fff"
                            stroke="#000"
                            strokeWidth="1"
                            onMouseEnter={(e) => {
                                e.target.setAttribute("fill", "red");
                                props.hoverCallback(feature.properties.name);
                            }}
                            onMouseLeave={(e) => {
                                e.target.setAttribute("fill", "#fff");
                            }}
                        >
                            <title>{feature.properties["name:en"]}</title>
                        </path>
                    ))}
                </g>
            </svg>
        </div>
    );
}