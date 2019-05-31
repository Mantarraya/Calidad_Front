import React from "react";

import { Pie } from "react-chartjs-2";
import './graficos.css'

export default class Grafico3 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          chartData:props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right'
    }
    render(){
        return(
            <div>
                <Pie
                data={this.state.chartData}
                options={{
                    title:{
                        display:this.props.displayTitle,
                        text:'Grafico Circular ',
                        fontSize:25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                }}
                />
          </div>
        );
    }
}