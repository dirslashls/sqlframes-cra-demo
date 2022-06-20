import React, { useRef, useEffect, useContext } from 'react';
import SQLFramesContext from './SQLFramesContext';
// Destructuring assignment of the exported namespaces 
// All the top level classes and objects exported in the namespaces

const SQLFramesComponent = function({ value }) {
	const ref = useRef(null);
	const sf = useContext(SQLFramesContext);

	useEffect(() => {
		// @ts-ignore
		const { View } = sf.sqlframes;
		View.render(ref.current,value);
	});

	return (
		<div className="sf" ref={ref}></div>
	)
}

export { SQLFramesComponent };