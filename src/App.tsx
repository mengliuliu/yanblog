import Home from 'src/pages/home'
import * as actions from 'src/actions'
import { StoreState } from 'src/types'
import { connect, DispatchProp} from 'react-redux'
import './App.css';


export function mapStateToProps({ enthusiasmLevel,languageName  }: StoreState){
  return {
      enthusiasmLevel,
      name: languageName
  }
} 

export function mapDispatchToProps( dispatch: DispatchProp<actions.EnthusiasmAction>){
  return {
    // onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    // onDecrement: () => dispatch(actions.decrementEnthusiasm())
  }
}

function App() {
  return (
    <div className="App">
     <Home name='yhf' enthusiasmLevel={2} />
    </div>
  );
}

export default App;
