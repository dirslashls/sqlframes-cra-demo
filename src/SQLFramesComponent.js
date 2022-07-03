import React, { useRef, useEffect, useContext } from 'react';
import SQLFramesContext from './SQLFramesContext';
// Destructuring assignment of the exported namespaces 
// All the top level classes and objects exported in the namespaces

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
	});

	return (
		<div className="sf" ref={ref}></div>
	)
}

export default SQLFramesComponent;