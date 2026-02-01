{/*import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useEffect, useState } from "react";

export default function Auth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsub();
  }, []);

  return (
    <div className="flex items-center gap-4 my-6">
      {user ? (
        <>
          <img src={user.photoURL} className="w-10 h-10 rounded-full" />
          <span className="font-semibold">{user.displayName}</span>
          <button
            onClick={() => signOut(auth)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Déconnexion
          </button>
        </>
      ) : (
        <button
          onClick={() => signInWithPopup(auth, provider)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Se connecter avec Google
        </button>
      )}
    </div>
  );
          }
*/}