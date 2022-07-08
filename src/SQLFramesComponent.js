import React, { useRef, useEffect, useContext } from 'react';
import SQLFramesContext from './SQLFramesContext';

function SQLFramesComponent({ value }) {
	const ref = useRef(null);
	const sf = useContext(SQLFramesContext);

	useEffect(() => {
		const e = ref.current;
		if(!e) return;
		// @ts-ignore
		const { View } = sf.sqlframes;
		View.render(e,value);
		return () => { View.render(e,null); };
	},[value]);

	return (
		<div className="sf" ref={ref}></div>
	)
}

export default SQLFramesComponent;