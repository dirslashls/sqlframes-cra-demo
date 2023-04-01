import React, { useRef, useEffect, useContext } from 'react';
import SQLFramesContext from './SQLFramesContext';

function SQLFramesComponent({ value }) {
	const ref = useRef(null);
	const sf = useContext(SQLFramesContext);
	// @ts-ignore
	const sqlframes = sf.sqlframes;
	const { View } = sqlframes;
	useEffect(() => {
		const e = ref.current;
		if(!e) return void 0;
		View.render(e,value);
		return () => { View.render(e,null); };
	},[value]);

	return (
		<div className="sf" ref={ref}></div>
	)
}

export default SQLFramesComponent;