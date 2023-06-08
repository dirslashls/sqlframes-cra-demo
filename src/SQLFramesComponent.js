import React, { useRef, useEffect, useContext } from 'react';
import SQLFramesContext from './SQLFramesContext';

function SQLFramesComponent({ value }) {
	const ref = useRef(null);
	const sf = useContext(SQLFramesContext);
	// @ts-ignore
	const sqlframes = sf.sqlframes;
	const { View } = sqlframes;
	useEffect(() => {
		if(ref.current) View.render(ref.current,value);
	},[value]);

	useEffect(() => {
		const e = ref.current;
		return () => { View.render(e,null); };
	},[]);

	return (
		<div className="sf" ref={ref}></div>
	)
}

export default SQLFramesComponent;