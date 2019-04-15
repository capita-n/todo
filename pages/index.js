import TodoForm from "../components/TodoForm";
import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
    return (
        <Layout>
            <div className="card">
            <h1></h1>
                <TodoForm  todos={props.todos} />
            </div>
        </Layout>
        
    )
}

Index.getInitialProps = async function() {
    const res = await fetch(`http://localhost:3000/api/express/todolist`)
    const data = await res.json()
	return {
    
		todos: data
	}
}

export default Index;