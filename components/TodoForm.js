
import List from '../components/TodoList';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [...props.todos]
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
	}
	
	updateTodo = (data) => {
		this.setState({
      items: [...data]
    });
	}

  onSubmit = (event) => {
    event.preventDefault();
  if (this.state.term) {
		this.setState({
      term: '',
      items: [...this.state.items, {id:this.state.items.length+1, todo:this.state.term}]
    });
	}
  }
  
  render() {
    return (
      <div>
      <div className="card-title"><h2>Todo List App</h2></div>
        <form className="" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} type="text" placeholder="Add a todo list..." />
          <button>Add</button>
        </form>
        <List items={this.state.items} updateTodo={this.updateTodo} /> 
      </div>
    );
  }
}



export default TodoForm;