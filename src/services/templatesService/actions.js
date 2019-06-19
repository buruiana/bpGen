import * as actionTypes from "./actionTypes";

export const setTemplate = template => ({
  type: actionTypes.SET_TEMPLATE,
  template
});

export const setTemplateSuccess = template => ({
  type: actionTypes.SET_TEMPLATE,
  template
});

export const setTemplateFailure = error => ({
  type: actionTypes.SET_TEMPLATE_FAILURE,
  error
});

export const getTemplate = template => ({
  type: actionTypes.GET_TEMPLATE,
  template
});

export const getTemplateSuccess = () => ({
  type: actionTypes.GET_TEMPLATE,
  template
});

export const getTemplateFailure = error => ({
  type: actionTypes.GET_TEMPLATE_FAILURE,
  error
});

export const getAllTemplates = templates => ({
  type: actionTypes.GET_ALL_TEMPLATES,
  templates
});

export const getAllTemplatesSuccess = templates => ({
  type: actionTypes.GET_ALL_TEMPLATES_SUCCESS,
  templates
});

export const getAllTemplatesFailure = error => ({
  type: actionTypes.GET_ALL_TEMPLATES_FAILURE,
  error
});

export const setAllTemplates = templates => ({
  type: actionTypes.SET_ALL_TEMPLATES,
  templates
});

export const setAllTemplatesSuccess = templates => ({
  type: actionTypes.SET_ALL_TEMPLATES_SUCCESS,
  templates
});

export const setAllTemplatesFailure = error => ({
  type: actionTypes.SET_ALL_TEMPLATES_FAILURE,
  error
});

export const deleteTemplate = template => ({
  type: actionTypes.DELETE_TEMPLATE,
  template
});
