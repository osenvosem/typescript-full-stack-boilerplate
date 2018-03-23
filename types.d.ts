declare module "json-loader!*";
declare module "*.css";
declare module "*.json";

// shared folder
declare module "components/*";
declare module "services/*";
declare module "utils/*";

declare const CLIENT_ASSETS: string;
declare module "react-loadable/webpack";

interface Window {
  __INITIAL_STATE__: any;
  __REDUX_DEVTOOLS_EXTENSION__: () => any;
}
