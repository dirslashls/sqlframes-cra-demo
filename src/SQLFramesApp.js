import { useContext, useState } from "react";
import { SQLFramesComponent } from "./SQLFramesComponent";
import SQLFramesContext from "./SQLFramesContext";

export default function SQLFramesApp() {
	const sf = useContext(SQLFramesContext);
	// @ts-ignore
	const { DataFrame, SQL } = sf.sqlframes;
	const { groupBy, agg: { min, max } } = SQL;
	let [df,setDF] = useState(DataFrame.fromURL('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv'));
	const gdf = df.gdf(groupBy('type'),min('mag').as('min'),max('mag').as('max'));
	const chart = gdf.chart.bar('type',['min','max']);
	chart.title = 'Latest earthquake stats';
	return (<div>
		<SQLFramesComponent value={df}/>
		<div style={{position: 'relative', height: '400px'}}>
			<SQLFramesComponent value={chart}/>
		</div>
	</div>);
}