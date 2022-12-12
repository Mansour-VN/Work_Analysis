import HttpService from "services/http.service";

export const CheckTodoAPI = async (data) => {
  const response = await HttpService.put(`/todo/${data.id}`, {
    ...data,
    checked: !data.checked,
  });
  return response.data;
};
