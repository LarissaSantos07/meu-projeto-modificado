import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', color: '#4caf50' }}>Minhas Tarefas</h1>
      <Header />
      <ListarTarefa />
      <Greeting />
    </div>
  );
}

export default App;
