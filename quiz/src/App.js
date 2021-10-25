import Message from './exercises/Ex1Message'

function App() {
  return (
    <div>
      {Quiz(ex)}
    </div>
  );
}

export default App;

//- Exercises
function Quiz(ex) {  
  switch (ex) {
    case 1:
      return (
        <Message
          title="Changes in Service"
          message="We just updated our privacy policy!!"
        />
      )      

    default:
        console.log('Out of ex ' + ex + '.')
        return (
          <div>Hello React Components!</div>
        )
  }
}

const ex = 1;
