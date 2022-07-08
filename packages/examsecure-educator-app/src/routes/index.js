import Dashboard from '../components/dashboard/Dashboard';
import CreateTest from '../components/create-test/CreateTest';
import ProctorModeWrapper from '../components/proctor-mode/ProctorModeWrapper';

const routes = [
  {
    path: '/',
    component: Dashboard,
    title: 'Painel de controle',
    exact: true,
  },
  {
    path: '/create-new-test',
    component: CreateTest,
    title: 'Criar novo teste',
    exact: false,
  },
  {
    path: '/proctor-mode',
    component: ProctorModeWrapper,
    title: 'Modo de monitoria',
    exact: false,
  },
];

export default routes;
