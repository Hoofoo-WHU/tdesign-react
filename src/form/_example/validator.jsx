import React from 'react';
import { Form, FormItem, Input, Radio, Checkbox, Button, Message } from '@tencent/tdesign-react';

export default function BaseForm() {
  const onSubmit = (e) => {
    console.log(e);
    if (e.validateResult === true) {
      Message.info('提交成功');
    }
  };

  const onReset = (e) => {
    console.log(e);
    Message.info('重置成功');
  };

  return (
    <div>
      <Form layout="vertical" onSubmit={onSubmit} onReset={onReset}>
        <FormItem
          label="用户名"
          help="这里请填写用户名"
          name="account"
          rules={[
            { required: true, message: '姓名必填', type: 'error' },
            { min: 2, message: '至少需要两个字', type: 'error' },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="密码"
          help="这里请填写密码"
          name="password"
          rules={[{ required: true, message: '密码必填', type: 'error' }]}
        >
          <Input />
        </FormItem>
        <FormItem label="邮箱" name="email" rules={[{ required: true, message: '格式必须为邮箱', type: 'warning' }]}>
          <Input />
        </FormItem>
        <FormItem label="性别" name="gender" rules={[{ required: true, message: '性别必填', type: 'warning' }]}>
          <Radio.Group buttonStyle="solid">
            <Radio name="male">男</Radio>
            <Radio name="femal">女</Radio>
          </Radio.Group>
        </FormItem>
        <FormItem label="课程" name="course" rules={[{ required: true, message: '课程必填', type: 'warning' }]}>
          <Checkbox.Group>
            <Checkbox name="1">语文</Checkbox>
            <Checkbox name="2">数学</Checkbox>
            <Checkbox name="3">英语</Checkbox>
            <Checkbox name="4">体育</Checkbox>
          </Checkbox.Group>
        </FormItem>
        <FormItem label="入学时间" name="date" rules={[{ date: true, message: '日期格式有误' }]}>
          <Input />
        </FormItem>
        <FormItem
          label="个人网站"
          name="content.url"
          rules={[
            { required: true, message: '个人网站必填', type: 'warning' },
            {
              url: {
                protocols: ['http', 'https', 'ftp'],
                // eslint-disable-next-line @typescript-eslint/camelcase
                require_protocol: true,
              },
              message: '请输入正确的个人主页',
            },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem>
          <Button theme="primary" type="submit" style={{ marginRight: 10 }}>
            提交
          </Button>
          <Button type="reset">重置</Button>
        </FormItem>
      </Form>
    </div>
  );
}