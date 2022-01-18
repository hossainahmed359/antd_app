import { Card, message } from 'antd';
import ProForm, {
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { fakeSubmitForm ,submitForm} from './service';
import styles from './style.less';

const BasicForm = () => {
  const { run } = useRequest(submitForm, {
    manual: true,
    onSuccess: () => {
      message.success('Product is saved');
    },
    onError: (e) => {
      message.error('Error'+ e.message.toString());
    },

  });

  const onFinish = async (values) => {
    console.log(values);
    run(values);
  };
 
  return (
    <PageContainer content="The amazing product entry">
      <Card bordered={false}>
        <ProForm
          hideRequiredMark
          style={{
            margin: 'auto',
            marginTop: 8,
            maxWidth: 600,
          }}
          name="basic"
          layout="vertical"
          initialValues={{
            public: '1',
          }}
          onFinish={onFinish}
        >
          <ProFormText
            width="md"
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: 'Please enter the title',
              },
            ]}
            placeholder="Please enter the title"
          />
          <ProFormTextArea
            label="Description"
            width="xl"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please enter product description',
              },
            ]}
            placeholder="Please enter product description"
          />
          <ProFormDatePicker  
          width="md" 
          name="manufacturingDate" 
          label="Manufacturing date" 
          />
          <ProFormDigit
            label={
              <span>
                Price
              </span>
            }
            name="Price"
            placeholder="Please enter product price"
            min={0}
            width="md"
            fieldProps={{
              formatter: (value) => `${value || 0}`,
            }}
          />
          <ProFormRadio.Group
            options={[
              {
                value: '1',
                label: 'Small',
              },
              {
                value: '2',
                label: 'Medium',
              },
              {
                value: '3',
                label: 'Large',
              },
            ]}
            label="Size"
            name="size"
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
