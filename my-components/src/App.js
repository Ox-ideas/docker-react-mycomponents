import CommentDetail from './CommentDetail';
import faker from 'faker'

function App() {
  return (
    <div className="ui container comments">      
      <CommentDetail 
        author="Sam" 
        timePosted="Today at 4:45PM" 
        comment="Buy One, Take One Pizza starting now!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Arlene" 
        timePosted="Today at 2:00AM" 
        comment="Fabulous." 
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Jane" 
        timePosted="Yesterday at 5:00PM" 
        comment="Yummmmmmyy!!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
}

export default App;
