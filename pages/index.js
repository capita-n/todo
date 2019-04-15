import TodoForm from "../components/TodoForm";
import Layout from "../components/Layout";
import fetch from '/isomorphic-unfetch';

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
	const res = await fetch(`http://localhost:3000/api/v1/todo`)
  const data = await res.json()
  console.log(data);
	return {
    
		todos: data
	}
}

export default Index;