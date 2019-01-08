import React from 'react';
import {CountSlider} from "./CountSlider";
import {ShotChart} from "./ShotChart";
import {Row, Col, Radio, Switch} from "antd";
import _ from "lodash";


const RadioGroup = Radio.Group;
export class DataViewContainer extends React.Component {
    state = {
        minCount : 2,
        chartType:'hexbin',
    }

    onMinCountChange = (minCount) => {
        this.setState({ minCount });
    }

    onChartTypeChange = (e) => {
        this.setState({ chartType: e.target.value});
    }

    render() {
        return(
            <div className="data-view">
                <ShotChart playerId={this.props.playerId} minCount={this.state.minCount} chartType={this.state.chartType}/>
                <div className="filters">
                    {this.state.chartType === 'hexbin' ? (
                        <Row className="filter-row">
                            <Col span={2} offset={3} className="filter-label">Shot:</Col>
                            <Col span={16}>
                                <CountSlider className="filter-control" onMinCountChange={_.debounce(this.onMinCountChange, 500)}/>
                            </Col>
                        </Row>
                    ) : null}
                    <Row className="filter-row">
                        <Col span={10} offset={3}>
                            <RadioGroup className="filter-control" onChange={this.onChartTypeChange} value={this.state.chartType}>
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}