import { configureStore } from '@reduxjs/toolkit';
import survey from '../reducers/survey';

export default configureStore({
  reducer: {
    survey: survey
  },
});
