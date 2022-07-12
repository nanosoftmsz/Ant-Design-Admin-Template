import { Layout } from 'antd';
import MenuTopics from './MenuTopics';

import '../styles/Sidebar.less';

const { Sider } = Layout;

const SideBar = () => {
  return (
    <Sider breakpoint='lg' collapsedWidth='0' trigger={null} className='sidebar-layout'>
      <div className='logo'>E-Commerce</div>
      <MenuTopics />
    </Sider>
  );
};

export default SideBar;
