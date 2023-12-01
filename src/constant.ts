export enum Path {
  Home = "/",
  Login = "/login",
  Settings = "/settings",
  Dashboard = "/dashboard",
}

export const PathKey = Object.keys(Path).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {} as { [key: string]: string });

export enum StoreKey {
  Access = "access-control",
  Config = "app-config",
}
