import React from "react";

import { Bar } from "react-chartjs-2";

export default class Grafico1 extends React.Component{

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
                <Bar
                data={this.state.chartData}
                options={{
                    title:{
                    display:this.props.displayTitle,
                    text:'Grafico en Barras',
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