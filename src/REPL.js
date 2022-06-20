import { Component } from "react";
import { SQLFramesComponent } from "./SQLFramesComponent";
import SQLFramesContext from './SQLFramesContext';

class REPL extends Component {
	render(){
		return(
			<SQLFramesContext.Consumer>
				{(sf) => {
					if(!this.repl) {
						// @ts-ignore
						const { REPL } = sf.repl;
						this.sf = sf;
						this.repl = new REPL();
					}
					return (<SQLFramesComponent value={this.repl}/>)
				}}
			</SQLFramesContext.Consumer>
		);
	}
}

export default REPL;