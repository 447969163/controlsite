import React, { Component, Fragment } from 'react'
import "./index.css";
export default class Selectmultiple extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleOptionsShowStatus: false,
            options: [
                { id: 0, name: 'pr资源' },
                { id: 1, name: 'ps资源' },
                { id: 2, name: '源码下载' }
            ],
            selectedIdArr: [],
        }
        this.selectedIdArr = []
    }
    handleSelectedId(currentId) {
        if (this.selectedIdArr.indexOf(currentId) == -1) {
            this.selectedIdArr.push(currentId)
        } else {
            let index = this.selectedIdArr.indexOf(currentId)
            this.selectedIdArr.splice(index, 1)
        }
        this.setState({
            selectedIdArr: this.selectedIdArr
        })
        this.props.getCategoryContent(this.state.selectedIdArr)
    }
    toggleOptionsShow() {
        this.setState(
            {
                toggleOptionsShowStatus: !this.state.toggleOptionsShowStatus
            }
        )
        // this.props.getCategoryContent(this.state.selectedIdArr)
    }
    render() {
        const { toggleOptionsShowStatus, options, selectedIdArr, selectedStyle } = this.state
        const optionsMap = options.map(item => {
            return item.name
        })
        return (
            <Fragment>
                <div className="select-multi-container">
                    <div className="imitate-select">
                        <span onClick={() => { this.toggleOptionsShow() }}>
                            {selectedIdArr.length > 0
                                ? selectedIdArr.map((item, i) => {
                                    return <b key={i}>{optionsMap[item]}</b>
                                })
                                : '选择分类'}
                        </span>
                        {toggleOptionsShowStatus ?
                            <div className="imitate-option">
                                {options.map((item, i) => {
                                    return <span key={item.id} onClick={() => { this.handleSelectedId(item.id) }}>
                                        {item.name}
                                    </span>
                                })}
                            </div>
                            : ''
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}