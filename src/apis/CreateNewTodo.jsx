import HttpService from "services/http.service";

export const AddTodoAPI = async (data) => {
  const response = await HttpService.post("/todo", data);
  return response;
};
