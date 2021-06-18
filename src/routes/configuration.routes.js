const host =
  process.env.REACT_APP_DEVENV === "1"
    ? "http://localhost:8081/api/v1/configuration"
    : "";

const routes = [
  {
    name: "update-env",
    route: `${host}/`,
    method: "PUT",
  },
  {
    name: "list-env",
    route: `${host}/`,
    method: "GET",
  },
];

const getRoute = (Name) => {
  const route = routes.filter((r) => r.Name === Name);
  return route[0].Route;
};

export default getRoute;
