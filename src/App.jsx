import './App.css';
import Button from '@mui/joy/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Text from './componets/Text';

function App() {
  return (
    <div className="container">
      <div className="header">
        <Text content="Hello World" />
      </div>
      <div className="content">
        <Button variant="solid">Hello world</Button>
        <Button variant="outlined">Hello world</Button>
        <Button variant="text">Hello world</Button>
        <AccessAlarmIcon />
      </div>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
