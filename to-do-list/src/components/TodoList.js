import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import { Button, Input, InputLabel, FormControl, Paper, List, Divider } from '@material-ui/core';
import { pink } from "@material-ui/core/colors"

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formText: "",
      listItems: [],
    }
  }

  handleChange = e => {
    this.setState({
      formText: e.target.value
    });
  }

  handleKeyUp = e => {
    if (e.keyCode !== 13) return;
    this.handleAdd();
  }

  handleAdd = () => {
    if (!this.state.formText) return;
    const newListItem = this.state.formText;
    const listItems = this.state.listItems.slice();
    listItems.push({text: newListItem});
    this.setState({
      formText: "",
      listItems: listItems
    });
  }

  handleRemove = totoListItemIndex => {
    const listItems = this.state.listItems.slice();
    listItems.splice(totoListItemIndex, 1);
    console.log(listItems)
    this.setState({
      listItems: listItems
    });
  }

  render() {
    return (
      <Paper style={styles.container}>
        <FormControl style={styles.form}>
          <InputLabel htmlFor="list-input" style={styles.input}>What do you need to do?</InputLabel>
          <Input 
            id="list-input" 
            style={styles.input} 
            onKeyUp={e => this.handleKeyUp(e)} 
            onChange={this.handleChange} 
            value={this.state.formText}
          />
        </FormControl>
        <Button onClick={this.handleAdd} style={styles.button}>+ Add</Button>
        <List>
          {this.state.listItems.map((todoListItem, todoListItemIndex) => (
            <div key={todoListItemIndex}>
              <Divider/>              
              <TodoListItem 
                todoListItem={todoListItem} 
                todoListItemIndex={todoListItemIndex} 
                onRemove={() => this.handleRemove(todoListItemIndex)}
              />
            </div>
          ))}
        </List>
      </Paper>
    )
  }
}

const styles = {
  container: {
    background: pink[50],
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    padding: 15
  },
  form: {
    flexGrow: 1
  },
  button: {
    flexGrow: .5
  },
}