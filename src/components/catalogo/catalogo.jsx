import { Component } from 'react';
import TitleComponent from './title/title';

class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "Julián"
         }
    }
    render() { 
        return ( 
            <div>
                <TitleComponent name={this.state.name}/>
            </div>
         );
    }
}
 
export default Catalogo;