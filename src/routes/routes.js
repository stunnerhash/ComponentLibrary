import {Routes, Route} from 'react-router-dom';
import Dashboard from '../layout/DashboardLayout';

const Router = () => {
  return ( 
    <Routes>
			<Route path="/" element={<Dashboard/>}/>
			<Route path="/dashboard" element={<Dashboard/>}/>
		</Routes>
   );
}
 
export default Router;