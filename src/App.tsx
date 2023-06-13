import './App.css';
import { CakeView } from './features/cake/CakeView';
import { IcecreamView } from './features/icecream/IcecreamView';
import { PostView } from './features/post/PostView';
import { UserView } from './features/user/UserView';

function App() {
  return (
    <>
      <CakeView />
      <IcecreamView />
      <UserView />
      <PostView />
    </>
  );
}

export default App;
