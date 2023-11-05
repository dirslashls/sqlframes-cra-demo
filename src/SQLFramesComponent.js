import React, { useRef, useEffect, useContext, useLayoutEffect } from 'react';
import SQLFramesContext from './SQLFramesContext';

function SQLFramesComponent({ value }) {
	const ref = useRef(null);
	const sf = useContext(SQLFramesContext);
	// @ts-ignore
	const sqlframes = sf.sqlframes;
	const { View } = sqlframes;
	useLayoutEffect(() => {
		if(ref.current) View.render(ref.current,value);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[value]);

	useEffect(() => {
		const e = ref.current;
		return () => { View.render(e,null); };
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	return (
		<div className="sf" ref={ref}></div>
	)
}

export default SQLFramesComponent;