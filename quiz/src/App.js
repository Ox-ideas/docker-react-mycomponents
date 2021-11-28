import Message from './exercises/Ex1Message'
import Placeholder from './exercises/Ex2Placeholder';
import UserForm from './exercises/Ex3ClassBaseddComponent';

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

    case 2:
      return (
        <div>
          <Placeholder>
            <div className="ui icon header">
              <i className="pdf file outline icon"></i>
              No documents are listed for this computer.
            </div>
            <div className="ui primary button">Add Document</div>
          </Placeholder>
          <Placeholder>
            <h4 className="ui header">For your information</h4>
            <p>
              The house was located at the top of the hill at the end of a winding road.
              It wasn't obvious that the house was there, but everyone in town knew that it existed. They were just all too afraid to ever go and see it in person.
            </p>
          </Placeholder>
        </div>
      )

    case 3:
      return (
        <UserForm />
      )

    default:
      console.log('Out of ex ' + ex + '.')
      return (
        <div>Hello React Components!</div>
      )
  }
}

const ex = 3;
