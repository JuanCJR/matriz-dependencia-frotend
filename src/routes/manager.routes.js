const host =
  process.env.REACT_APP_DEVENV === "1"
    ? "http://localhost:8081/api/v1/manager"
    : "";

const routes = [
  {
    name: "create-repo-list",
    route: `${host}/create-repo-list`,
    method: "POST",
  },
  {
    name: "create-parsing-process",
    route: `${host}/create-parsing-process`,
    method: "POST",
  },
  {
    name: "exec-parsing",
    route: `${host}/exec-parsing`,
    method: "POST",
  },
  {
    name: "get-repositories",
    route: `${host}/repositories`,
    method: "GET",
  },
  {
    name: "get-process-list",
    route: `${host}/parsing-process`,
    method: "GET",
  },
];

const getRoute = (Name) => {
  const route = routes.filter((r) => r.Name === Name);
  return route[0].Route;
};

export default getRoute;
