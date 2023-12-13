import { Table } from "@douyinfe/semi-ui";
import Column from "@douyinfe/semi-ui/lib/es/table/Column";

export function Settings() {
  const backendData = [{
    id:1,
    name:'name1'
  },{
    id:2,
    name:'name1'
  },{
    id:3,
    name:'name2'
  },{
    id:3,
    name:'name2'
  }]
  return (
    <>
      <Table dataSource={backendData} pagination={false} >
          <Column title="id" dataIndex="id" key="id" />
          <Column title="name" dataIndex="name" key="name"
            filters={[{
              text: 'name1',
              value: 'name1'
            },{
              text: 'name2',
              value: 'name2'
            }]}
            onFilter={(value, record) => {
              return record.name.includes(value)
            }} />
        </Table>

    </>
  );
}