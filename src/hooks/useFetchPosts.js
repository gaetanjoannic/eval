import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAsync } from '../features/posts/postsSlice';

const useFetchPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPostsAsync());
    }
  }, [status, dispatch]);

  return { posts, status, error };
}

export default useFetchPosts;