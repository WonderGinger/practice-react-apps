import React from 'react'
import { ListItem, ListItemIcon, Checkbox, Button } from '@material-ui/core'

const TodoListItem = ({ todoListItem, todoListItemIndex, onRemove }) => {
  const [checked, setChecked] = React.useState([-1]);

  const renderText = () => {
    let style = {};
    if  (checked.indexOf(todoListItemIndex) !== -1) style = { textDecoration: 'line-through' }
    return (
      <p style={style}>{todoListItem.text}</p>
    )
  }
  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <div  style={styles.container}>
    <ListItem role={undefined} dense button onClick={handleToggle(todoListItemIndex)} >
      <ListItemIcon>
        <Checkbox
          edge="start"
          tabIndex={-1}
          checked={checked.indexOf(todoListItemIndex) !== -1}
        />
      </ListItemIcon>
      {renderText()}
    </ListItem>
    <Button onClick={onRemove}>-</Button>
    </div>
  )
}

const styles = {
  container: {
    fontSize: 16,
    display: 'flex',
  }
}

export default TodoListItem
