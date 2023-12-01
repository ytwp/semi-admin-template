import { Nav, Avatar, Layout, Dropdown } from '@douyinfe/semi-ui';
import { IconFeishuLogo, IconHelpCircle, IconBell, IconSemiLogo, IconDoubleChevronRight, IconDoubleChevronLeft } from '@douyinfe/semi-icons';
import { IconIntro, IconHeart, IconCalendar, IconCheckbox, IconRadio, IconList, IconToast } from '@douyinfe/semi-icons-lab';
import styles from './layout.module.scss';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Path, PathKey } from '../constant';


export const RootLayout = (props: {
  children: React.ReactNode
}) => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState(PathKey.Home)
  return (
    <Layout>
      <Header className={styles.header}>
        <Nav
          mode="horizontal"
          header={{
            logo: (
              <div className={styles.navigationHeaderLogo}>
                <IconSemiLogo className={styles.semiIconsSemiLogo} />
              </div>
            ),
            text: "Semi Templates",
          }}
          footer={
            <div className={styles.dIV}>
              <IconFeishuLogo size="large" className={styles.semiIconsFeishuLogo} />
              <IconHelpCircle size="large" className={styles.semiIconsHelpCircle} />
              <IconBell size="large" className={styles.semiIconsBell} />

              <Dropdown
                position={'bottomRight'}
                render={
                  <Dropdown.Menu>
                    <Dropdown.Item>个人中心</Dropdown.Item>
                    <Dropdown.Item>退出登陆</Dropdown.Item>
                  </Dropdown.Menu>
                }
              >
                <Avatar
                  size="small"
                  src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg"
                  color="blue"
                  className={styles.avatar}
                >
                  示例
                </Avatar>
              </Dropdown>
            </div>
          }
          className={styles.nav}
        >
        </Nav>
      </Header>
      <Layout hasSider={true}>
        <Sider className={styles.sider}>
          <Nav
            defaultSelectedKeys={[selectedKey]}
            selectedKeys={[selectedKey]}
            onSelect={(e) => { setSelectedKey(e.itemKey.toString()) }}
            mode="vertical"
            className={styles.nav}
            isCollapsed={collapsed}
            onCollapseChange={(e) => { console.log(e) }}
            renderWrapper={({ itemElement, props }) => {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  to={Path[props.itemKey]}
                >
                  {itemElement}
                </Link>
              );
            }}
          >
            <Nav.Item
              itemKey={PathKey.Home}
              text="Home"
              icon={<IconIntro className={styles.iconIntro} />}
              className={styles.navItem}
            />
            <Nav.Item
              itemKey={PathKey.Dashboard}
              text="Dashboard"
              icon={<IconHeart className={styles.iconHeart} />}
              className={styles.navItem1}
            />
            <Nav.Item
              itemKey="Project"
              text="Project"
              icon={<IconCalendar className={styles.iconCalendar} />}
              className={styles.navItem2}
            />
            <Nav.Item
              itemKey="Tasks"
              text="Tasks"
              icon={<IconCheckbox className={styles.iconCheckbox} />}
              className={styles.navItem3}
            />
            <Nav.Item
              itemKey="Reporting"
              text="Reporting"
              icon={<IconCalendar className={styles.iconCalendar} />}
              className={styles.navItem4}
            />
            <Nav.Item
              itemKey="Users"
              text="Users"
              icon={<IconRadio className={styles.iconRadio} />}
              className={styles.navItem5}
            />
            <Nav.Item
              itemKey="Support"
              text="Support"
              icon={<IconList className={styles.iconList} />}
              className={styles.navItem6}
            />
            <Nav.Item
              itemKey="Settings"
              text="Settings"
              icon={<IconToast className={styles.iconToast} />}
              className={styles.navItem7}
            />
            <Nav.Sub
              itemKey='Settings0'
              text="Settings0"
              icon={<IconToast className={styles.iconNavSub} />}
            >
              <Nav.Item
                itemKey="Settings1"
                text="Settings1"
                className={styles.navItem7}
              />
              <Nav.Item
                itemKey="Settings2"
                text="Settings2"
                className={styles.navItem7}
              />
            </Nav.Sub>
            <Nav.Sub
              itemKey='Settings0'
              text="Settings0"
              icon={<IconToast className={styles.iconNavSub} />}
            >
              <Nav.Item
                itemKey="Settings1"
                text="Settings1"
                className={styles.navItem7}
              />
              <Nav.Item
                itemKey="Settings2"
                text="Settings2"
                className={styles.navItem7}
              />
            </Nav.Sub>
            <Nav.Sub
              itemKey='Settings0'
              text="Settings0"
              icon={<IconToast className={styles.iconNavSub} />}
            >
              <Nav.Item
                itemKey="Settings1"
                text="Settings1"
                className={styles.navItem7}
              />
              <Nav.Item
                itemKey="Settings2"
                text="Settings2"
                className={styles.navItem7}
              />
            </Nav.Sub>
            <Nav.Sub
              itemKey='Settings0'
              text="Settings0"
              icon={<IconToast className={styles.iconNavSub} />}
            >
              <Nav.Item
                itemKey="Settings1"
                text="Settings1"
                className={styles.navItem7}
              />
              <Nav.Item
                itemKey="Settings2"
                text="Settings2"
                className={styles.navItem7}
              />
            </Nav.Sub>
            <Nav.Sub
              itemKey='Settings0'
              text="Settings0"
              icon={<IconToast className={styles.iconNavSub} />}
            >
              <Nav.Item
                itemKey="Settings1"
                text="Settings1"
                className={styles.navItem7}
              />
              <Nav.Item
                itemKey="Settings2"
                text="Settings2"
                className={styles.navItem7}
              />
            </Nav.Sub>

            <Nav.Footer style={{ padding: 0 }}>
              {collapsed ? (
                <div className={styles.collapsed} style={{ justifyContent: 'center' }}>
                  <IconDoubleChevronRight onClick={() => setCollapsed(false)} />
                </div>
              ) : (
                <div className={styles.collapsed} style={{ justifyContent: 'flex-end' }}>
                  <IconDoubleChevronLeft onClick={() => setCollapsed(true)} style={{ paddingRight: '12px' }} />
                </div>
              )}
            </Nav.Footer>
          </Nav>
        </Sider>
        <Content className={styles.content} style={{ marginLeft: collapsed ? '60px' : '240px' }}>
          {props.children}
        </Content>
      </Layout>
    </Layout >
  );
}
