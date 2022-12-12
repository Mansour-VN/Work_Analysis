import httpService from "services/http.service";

export const DeleteTodoApi = async (id) => {
  const response = await httpService.delete(`/todo/${id}`);
  return response.data;
};
