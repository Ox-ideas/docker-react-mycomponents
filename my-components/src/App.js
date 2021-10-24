import CommentDetail from './CommentDetail';

function App() {
  return (
    <div className="ui container comments">      
      <CommentDetail author="Sam" />
      <CommentDetail author="Alex" />
      <CommentDetail author="Jane" />
    </div>
  );
}

export default App;
