import API from './../utils/API'

const initialState = {
  surveyData: {},
  message: '',
  stepperData:[],
  form: {},
  step: 1
}

  const survey = (state = initialState, action) => {
    switch (action.type) {
      case SURVEY_DATA:
        return {
          ...state,
          surveyData: action.surveyData,
          message: action.message,
          stepperData: action.surveyData.surveyContent[0].surveyFields
        };
        case SET_FORM:
          return {
            ...state,
            form: action.form
          };
        case SET_STEP:
          console.log(action.step)
          return {
            ...state,
            step: action.step
          };
      default:
        return state;
    }
   }

export const SURVEY_ACTION_REQUEST = "SURVEY_ACTION_REQUEST";
export const SURVEY_DATA = "SURVEY_DATA";
export const SET_FORM = "SET_FORM";
export const SET_STEP = "SET_STEP";

export function surveyActionRequest() {
    return function(dispatch) {
      return API.get("/survey")
        .then(({ data }) => {
        dispatch(surveyData(data));
      });
    };
  }

  function surveyData (result) {
    return {
        type: 'SURVEY_DATA',
        surveyData: result.payload,
        message: "Form Action Success!"
    }
}

export function setForm(form) {
  return {
    type: 'SET_FORM',
    form: form
  }
}

export function setStep(step) {
  console.log('in')
  return {
    type: 'SET_STEP',
    step: step
  }
}

export default survey;
