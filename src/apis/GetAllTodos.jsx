import HttpService from "services/http.service";
export const GetAllTodosAPI = async () => {
    const response = await HttpService.get('/todo')
    return response.data;
}