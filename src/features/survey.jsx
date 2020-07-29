import API from './../utils/API'

  const survey = (state = [], action) => {
    switch (action.type) {
      case SURVEY_DATA:
        return {
          surveyData: action.surveyData,
          message: action.message,
          stepperData: action.surveyData.surveyContent[0].surveyFields
        };
      default:
        return state;
    }
   }

export const SURVEY_ACTION_REQUEST = "SURVEY_ACTION_REQUEST";
export const SURVEY_DATA = "SURVEY_DATA";

export function surveyActionRequest() {
    return function(dispatch) {
      return API.get("/survey")
        .then(({ data }) => {
        dispatch(surveyData(data));
      });
    };
  }

  function surveyData (result) {
      console.log(result)
    return {
        type: 'SURVEY_DATA',
        surveyData: result.payload,
        message: "Form Action Success!"
    }
}

export default survey;
