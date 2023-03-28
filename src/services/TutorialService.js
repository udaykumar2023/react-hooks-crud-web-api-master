import http from "../http-common";

const getAll = () => {
  // return http.get("/test");
  let data = {"accountID":695233040351};
  return http.post("/test", data);
};

const get = id => {
  //return http.get(`/tutorials/${id}`);
  let data = {"accountID":695233040351};
  return http.post("/test", data);
};

const create = data => {
  return http.post("/test", data);
};

const update = (id, data) => {
  return http.put(`/test/${id}`, data);
};

const remove = id => {
  return http.delete(`/test/${id}`);
};

const removeAll = () => {
  return http.delete(`/test`);
};

const findByTitle = title => {
  return http.get(`/test?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TutorialService;
