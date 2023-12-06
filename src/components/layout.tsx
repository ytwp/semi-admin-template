import { Nav, Avatar, Layout, Dropdown, Button } from '@douyinfe/semi-ui';
import { IconGithubLogo, IconSemiLogo, IconDoubleChevronRight, IconDoubleChevronLeft } from '@douyinfe/semi-icons';
import styles from './layout.module.scss';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { routers } from '../router';


export const RootLayout = (props: {
  children: React.ReactNode
}) => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState('')
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
              <Button icon={<IconGithubLogo className={styles.semiIconsBell} />} aria-label="GitHub" onClick={() => window.open('https://github.com/ytwp/semi-admin-template', '_blank')} />

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
              console.log(itemElement, props)
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              if (props.routeProps) {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    to={props.routeProps.path}
                  >
                    {itemElement}
                  </Link>
                );
              } else {
                return itemElement
              }
            }}
            items={routers}
          >
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
