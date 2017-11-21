import Loadable from 'react-loadable';  // eslint-disable-line

export default function loadComponent(componentPath, loadingComponent) {
  return Loadable({
    loader: () => import(componentPath),
    loading: loadingComponent,
    delay: 300,
    timeout: 10000,
  });
}
