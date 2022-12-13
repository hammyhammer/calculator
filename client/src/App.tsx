import './App.css';
import Calculator from './components/Calculator/Calculator';
import useButtonFunctions from './hooks/ButtonFunctions/useButtonFunctions';
function App() {
  const { previousEquations } = useButtonFunctions()
  return (
    <div className="App">
      <Calculator />
      <div>
        {previousEquations.map(equation => (
          <div key={equation}>
            {
              <p>{equation}</p>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
