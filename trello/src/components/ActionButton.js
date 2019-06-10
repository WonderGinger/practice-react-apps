import React, { Component } from 'react'
import { Button, TextField, Card } from '@material-ui/core';
import Icon from "@material-ui/core/Icon"
import { connect } from 'react-redux';
import { addLane, addPost } from '../actions/types';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formOpen: false,
            text: ""
        };
    }

    openForm = () => {
        this.setState({formOpen: true})
    }

    closeForm = () => {
        this.setState({formOpen: false})
        const { lane } = this.props;
        if(this.state.text) { 
            lane
                ? this.handleAddLane() 
                : this.handleAddPost();
            this.setState({text: ""})
        }
    }

    handleAddLane = () => {
        const { dispatch } = this.props;
        const { text } = this.state.text;
        dispatch(addLane(text));
    }

    handleAddPost = () => {
        const { dispatch } = this.props;
        const { text } = this.state.text;
        dispatch(addPost(text));
    }

    handleChange = event => {
        this.setState({
            text: event.target.value,
        });
    };

    renderButton = () => {
        const buttonText = this.state.formOpen ? "Submit" : "New";
        return (
            <Button color="default" onClick={() => this.openForm()}>
                <Icon>add</Icon>{buttonText}
            </Button>
        );
    }
    renderForm = () => {
        const { lane } = this.props;
        const placeholder = lane ? "Enter title of new list" : "Enter new post";
        const label = lane ? "List" : "Post";

        return (
                <TextField 
                    style={styles.container}
                    multiline 
                    autoFocus
                    variant="filled" 
                    margin="normal" 
                    placeholder={placeholder} 
                    label={label}
                    onBlur={this.closeForm}
                    onChange={this.handleChange}
                    value={this.state.text}
                />
        );
    }
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderButton();
    }
}

const styles = {
    container: {
        margin: '16px',
    }
}

export default connect()(ActionButton);