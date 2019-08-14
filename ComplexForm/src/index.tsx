import React from 'react';
import styles from './index.module.less';
import { Form, Select, Input, Radio, Checkbox, DatePicker, Button } from 'antd';
import { Card } from '@td/design';
import { FormComponentProps } from 'antd/lib/form';

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 15
  }
}

interface ComplexFormProps extends FormComponentProps {
  method: {
    value: string;
  }
}

class ComplexForm extends React.Component<ComplexFormProps> {

  private handleSubmit = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
      }
    })
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className={styles.container} {...formItemLayout} layout="inline">
        <div className={styles.content}>
        <Card>
          <Form.Item label="登记方式">
            {getFieldDecorator('method', {
              rules: [
                { required: true, message: '请选择登记方式'}
              ]
            })(
              <Radio.Group>
                <Radio value="0">手动登记</Radio>
                <Radio value="1">库表导入</Radio>
              </Radio.Group>
            )}
          </Form.Item>
        </Card>
        <Card title="基础信息">
          <Form.Item label="选择数据源">
            {getFieldDecorator('dataSource', {
              rules: [
                {required: true, message: '请选择数据源'}
              ]
            })(
              <Select>
                <Select.Option value="1">MySQL</Select.Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="选择映射表">
            {getFieldDecorator('table', {})(
              <Select>
                <Select.Option value="1">MySQL</Select.Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="资源名称">
            {getFieldDecorator('name', {})(
              <Input />
            )}
          </Form.Item>
          <Form.Item label="性别">
            {getFieldDecorator('gender', {})(
              <Radio.Group>
                <Radio value="0">男</Radio>
                <Radio value="1">女</Radio>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item label="爱好">
            {getFieldDecorator('hobby', {})(
              <Checkbox.Group>
                <Checkbox>游泳</Checkbox>
                <Checkbox>看书</Checkbox>
                <Checkbox>旅游</Checkbox>
              </Checkbox.Group>
            )}
          </Form.Item>
          <Form.Item label="出生日期">
            {getFieldDecorator('birthday', {})(
              <DatePicker />
            )}
          </Form.Item>
          <Form.Item label="自我评价">
            {getFieldDecorator('comment', {})(
              <Input.TextArea rows={4} />
            )}
          </Form.Item>
        </Card>
        <Card title="权限信息">
          <Form.Item label="籍贯">
            {getFieldDecorator('native', {})(
              <Input />
            )}
          </Form.Item>
          <Form.Item label="年级">
            {getFieldDecorator('grade', {})(
              <Input />
            )}
          </Form.Item>
          <Form.Item label="老师评价">
            {getFieldDecorator('teacherComment', {})(
              <Input.TextArea rows={4} />
            )}
          </Form.Item>
        </Card>
        </div>
        <div className={styles.sticky}>
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
          <Button type="default">返回</Button>
        </div>
      </Form>
    );
  }
}

export default Form.create<ComplexFormProps>({
  onFieldsChange(props, changedFields) {
    // props.onChange(changedFields);
    console.log(changedFields);
  },
  mapPropsToFields(props) {
    return {
      method: Form.createFormField({
        ...props.method,
        value: props.method ? props.method.value : '',
      })
    }
  }
})(ComplexForm);
