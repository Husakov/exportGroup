import { configureStore } from '@reduxjs/toolkit';
import survey from '../features/survey';

export default configureStore({
  reducer: {
    survey: survey
  },
});
