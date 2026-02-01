{/*import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import Auth from "./Auth";

export default function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      orderBy("createdAt", "desc")
    );

    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((c) => c.articleId === articleId);
      setComments(data);
    });

    return () => unsub();
  }, [articleId]);

  const sendComment = async () => {
    if (!auth.currentUser || !message) return;

    await addDoc(collection(db, "comments"), {
      articleId,
      message,
      userId: auth.currentUser.uid,
      name: auth.currentUser.displayName,
      photoURL: auth.currentUser.photoURL,
      createdAt: serverTimestamp(),
      likes: 0,
      dislikes: 0,
      repliesCount: 0,
    });

    setMessage("");
  };

  const vote = async (id, type) => {
    const ref = doc(db, "comments", id);
    await updateDoc(ref, {
      [type]: increment(1),
    });
  };

  return (
    <div className="mt-16 border-t pt-10">
      <h2 className="text-2xl font-bold mb-4">Commentaires</h2>

      <Auth />

      {auth.currentUser && (
        <div className="flex gap-3 mb-6">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Votre commentaire..."
            className="border p-2 flex-1 rounded"
          />
          <button
            onClick={sendComment}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Envoyer
          </button>
        </div>
      )}

      <div className="space-y-6">
        {comments.map((c) => {
          const total = c.likes + c.dislikes;
          const percent = total ? Math.round((c.likes / total) * 100) : 0;

          return (
            <div key={c.id} className="border p-4 rounded">
              <div className="flex items-center gap-3">
                <img src={c.photoURL} className="w-8 h-8 rounded-full" />
                <span className="font-semibold">{c.name}</span>
              </div>

              <p className="my-2">{c.message}</p>

              <div className="flex items-center gap-4 text-sm">
                <button onClick={() => vote(c.id, "likes")}>👍 {c.likes}</button>
                <button onClick={() => vote(c.id, "dislikes")}>
                  👎 {c.dislikes}
                </button>
                <span>{percent}% d’avis positifs</span>
                <span>💬 {c.repliesCount} réponses</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
        }
*/}