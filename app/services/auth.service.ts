import firebase, { auth, firestore, storage } from "./firebase";

export function signUpWithEmailAddressAndPassword(
  emailAddress: string,
  password: string
): any {
  return auth.createUserWithEmailAndPassword(emailAddress, password);
}

export function signIn(emailAddress: string, password: string) {
  return auth.signInWithEmailAndPassword(emailAddress, password);
}

export function updateUser(data: any) {
  return auth.currentUser?.updateProfile(data);
}