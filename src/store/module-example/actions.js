import firebase from "firebase/app";

export default {
  async register(
    { dispatch, commit },
    { email, password, firstName, lastName, userName }
  ) {
    try {
      const aut = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const id = await dispatch("getUid");
      await firebase
        .database()
        .ref(`users/${id}`)
        .set({
          user: userName,
          name: firstName,
          lastname: lastName
        });
      commit("addUserName", userName);
    } catch (e) {
      console.log(e);
    }
  },
  getUid() {
    const user = firebase.auth().currentUser;
    return user ? user.uid : null;
  }
};
