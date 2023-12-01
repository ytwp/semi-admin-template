import { Form, Button } from '@douyinfe/semi-ui';
import styles from './login.module.scss';

export function Login() {
  return (
    <div className={styles.main}>
      <div className={styles.login}>
        <div className={styles.component66}>
          <img
            src="https://lf9-static.semi.design/obj/semi-tos/template/caee33dd-322d-4e91-a4ed-eea1b94605bb.png"
            className={styles.logo}
          />
          <div className={styles.header}>
            <p className={styles.title}>欢迎回来</p>
            <p className={styles.text}>
              <span className={styles.text}>登录</span>
              <span className={styles.text1}> Semi Design </span>
              <span className={styles.text2}>账户</span>
            </p>
          </div>
        </div>
        <div className={styles.form}>
          <Form className={styles.inputs}>
            <Form.Input
              label={{ text: "用户名" }}
              field="input"
              placeholder="输入用户名"
              style={{ width: "100%" }}
              fieldStyle={{ alignSelf: "stretch", padding: 0 }}
            />
            <Form.Input
              label={{ text: "密码" }}
              field="field1"
              placeholder="输入密码"
              style={{ width: "100%" }}
              fieldStyle={{ alignSelf: "stretch", padding: 0 }}
            />
          </Form>
          <Button theme="solid" className={styles.button}>
            登录
          </Button>
        </div>
      </div>
    </div>
  );
}
