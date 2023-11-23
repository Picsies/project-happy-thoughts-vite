import { Header } from "./components/Header";
import { ThoughtForm } from "./components/ThoughtForm";
import { ThoughtList } from "./components/ThoughtList";

export const App = () => {
  return (
    <div className="happy-thought-form">
      <Header />
      <ThoughtForm />
      <ThoughtList />
    </div>  
  )
};
