import faker from 'faker'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timePosted="Today at 4:45PM"
          comment="Buy One, Take One Pizza starting now!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard >

      <ApprovalCard>
        <CommentDetail
          author="Arlene"
          timePosted="Today at 2:00AM"
          comment="Fabulous."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timePosted="Yesterday at 5:00PM"
          comment="Yummmmmmyy!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div >
  );
}

export default App;
