import HttpService from "services/http.service";

export const FilterTodoAPI= async (status) => {
  const response = await HttpService.get(`/todo?checked=${status}`);
  return response.data;
}