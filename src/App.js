import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./Content";
import { TodoProvider } from "./Contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>

      <Footer />
    </TodoProvider>
  );
}

export default App;
