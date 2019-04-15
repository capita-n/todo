import TodoForm from "../components/TodoForm";
import Layout from "../components/Layout";
import fetch from '/isomorphic-unfetch';

const Index = (props) => {
    return(
        <div>
            <h1>Hello</h1>
        </div>
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