import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Contacts from './components/Contacts';
import AddContacts from './components/AddContacts';

function App() {
  return (
    <Provider store={store}>
      <Contacts />
      <AddContacts />
    </Provider>
  );
}

export default App;
