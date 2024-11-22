import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "../components/Spinner";
import { Alert } from "../components/Alert";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { useToggle } from "../hooks/useToggle";
import { Modal } from "../components/Modal";
import { EditPostModal } from "./Single/EditPostModal";

export default function Single({ postId }) {
  useDocumentTitle("Mon blog");
  const { data: post, loading, error, setData } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  useDocumentTitle(post?.title);
  const [isEditing, toggleEditing] = useToggle(false);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>;
  }

  const handleSave = (data) => {
    setData({
      ...post,
      ...data,
    });
    toggleEditing();
  };

  return (
    <>
      <h1 className="mb-3">{post.title}</h1>
      <img src={`https://picsum.photos/id/${post.id}/800/600`} alt="" className="img-fluid img-thumbnail my-3" />
      <p>{post.body}</p>
      {isEditing && <EditPostModal post={post} onClose={toggleEditing} onSave={handleSave} />}
      <Button variant="secondary" onClick={toggleEditing}>
        Editer l'article
      </Button>
      <p>
        <a href={`#post:${post.id + 1}`}>Article suivant</a>
      </p>
    </>
  );
}