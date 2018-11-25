import React from 'react';
import {CountSlider} from "./CountSlider";
import {ShotChart} from "./ShotChart";

export class DataViewContainer extends React.Component{
    state = {
        minCount : 2,
    }

    onMinCountChange = (minCount) => {
        this.setState({ minCount });
    }

    render() {
        return(
            <div className="data-view">
                <ShotChart playerId={this.props.playerId} minCount={this.state.minCount}/>
                <CountSlider onMinCountChange={this.onMinCountChange}/>
            </div>
        )
    }
}