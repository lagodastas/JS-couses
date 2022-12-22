import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card title="hi" />
      <hr />
      <Card text="who are you?" />
      <hr />
      <Card title="hi" text="who are you?" />
    </div>
  );
}

export default App;
