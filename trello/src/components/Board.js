import React, { Component } from 'react'
import Lane from './Lane';
import { connect } from 'react-redux';
import store from '../store';
import ActionButton from './ActionButton';


class Board extends Component {
    onAddPost = laneIndex => {
        // let body = window.prompt("Enter body");
        // if (!body) return;
        // this.setState(prevState => {
        //     let { lanes } = prevState;
        //     lanes[laneIndex].posts.push({body});
        //     return { lanes };
        // });
    }
    render() {
        const { lanes } = this.props;
        return (
            <div style={styles.board}>
                {lanes && lanes.map((lane, laneIndex) => (
                    <Lane 
                        key={laneIndex}
                        lane={lane}
                        laneIndex={laneIndex}
                        onAddPost={ () => this.onAddPost(laneIndex) }
                        laneDraggable={true}
                    />
                ))}
                <div style={styles.lane}>
                    <ActionButton lane/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    lanes: state.lanes,
})

const styles = {
    board: {
        display: 'flex',
        flexBasis: '10%',
    },
    lane: {
        width: '15%',
        textAlign: 'center',
        flexGrow: 1,
        flexShrink: 1,
    },

}

export default connect(mapStateToProps)(Board);