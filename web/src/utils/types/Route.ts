export interface IRoute {
  name: string;
  path: string;
  component: any;
  exact: boolean;
  props?: any;
}
