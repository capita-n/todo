import TodoForm from "../components/TodoForm";
import Layout from "../components/Layout";

const Index = () => {
    return (
        <Layout>
            <div className="card">
                <TodoForm />
            </div>
        </Layout>
        
    )
}

export default Index;