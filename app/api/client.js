import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";


//Production
const apiClient = create({
  baseURL: "https://mighty-lake-33739.herokuapp.com/api",
});


//Development
// const apiClient = create({
//   baseURL: "http://192.168.1.8:19000/api",
// });



apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }aa

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;