import { addDoc, collection, getDoc, setDoc } from "firebase/firestore";
import { FIREBASE_DB } from "./firebase";

export async function inserirUsuario(novoUsuario) {
    const docRef = await addDoc(collection(FIREBASE_DB, "usuarios"), novoUsuario);
    return docRef.id;
}

export async function obterUsuario(id) {
    const docRef = doc(db, "usuarios", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

export async function alterarUsuario(usuario) {
    await setDoc(doc(db, "usuarios", usuario.id), usuario);
}