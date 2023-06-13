import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { getPostsFetch } from './postSlice';

export const PostView = () => {
  const post = useAppSelector((state) => state.post);

  console.log('Post view');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);

  return (
    <div>
      <h2>List of Posts</h2>
      {post.isLoading && <div>Loading...</div>}
      {!post.isLoading && post.posts.length ? (
        <ul>
          {post.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
