import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  setImageUrl,
  setProgress,
  setError,
  resetState,
} from "./reducers/menuFirestore";
import { storage } from "@/firebase";

export const uploadImage = (image) => async (dispatch) => {
  try {
    dispatch(resetState());

    const fileRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(fileRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercentage = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        dispatch(setProgress(progressPercentage));
      },
      (error) => {
        dispatch(setError(error.message));
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          dispatch(setImageUrl(downloadURL));
        });
      }
    );
  } catch (error) {
    dispatch(setError(error.message));
  }
};
