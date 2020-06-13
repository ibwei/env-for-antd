import { Component, Vue } from 'vue-property-decorator'
import { tableList, FilterFormList, Opreat } from '@/interface'

@Component({
  name: 'lendOrderHis'
})
export default class LendOrderHis extends Vue {
  filterParams: any = {
    status: '',
    createtime: []
  }

  BackParams: any = {
    code: 'data.resultCode',
    codeOK: 0,
    message: 'data.resultMessage',
    data: 'data.data',
    total: 'data.total'
  }

  outParams: any = {}

  filterList: FilterFormList[] = [
    {
      key: 'status',
      label: '状态',
      type: 'cascader',
      placeholder: '请选择状态',
      options: [
        { value: 0, label: '学生' },
        { value: 1, label: '管理员' },
        { value: 2, label: '老师' }
      ]
    },
    {
      key: 'createtime',
      label: '选择时间',
      type: 'datetimerange',
      placeholder: '请选择时间'
    }
  ]

  tableList: tableList[] = [
    {
      title: '单号',
      dataIndex: 'tallaNo',
      align: 'center'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      align: 'center'
    },
    {
      title: '质押量',
      dataIndex: 'pawnQuantity',
      align: 'center'
    },
    {
      title: '币种',
      dataIndex: 'pawnCoinEunit',
      align: 'center'
    },
    {
      title: '质押率',
      dataIndex: 'pawnRate',
      align: 'center'
    },
    {
      title: '日利率',
      dataIndex: 'legalDailyRate',
      align: 'center'
    },
    {
      title: '参考年化',
      dataIndex: 'legalDailyRate',
      align: 'center'
    },
    {
      title: '借入金额',
      dataIndex: 'legalQuantity',
      align: 'center'
    },
    {
      title: '期限',
      dataIndex: 'cycle',
      align: 'center'
    },
    {
      title: '到期利息',
      dataIndex: 'totalInterest',
      align: 'center'
    },
    {
      title: '状态',
      dataIndex: 'status',
      align: 'center'
    }
  ]

  opreat: Opreat[] = [
    {
      key: 'id',
      rowKey: 'id',
      color: 'red',
      text: '详情',
      roles: false,
      popconfirm: false
    }
  ]

  render() {
    return (
      <div class='baseInfo-wrap'>
        <filter-table
          ref='baseInfoTable'
          tableList={this.tableList}
          filterList={this.filterList}
          filterGrade={[]}
          scroll={{ x: 900 }}
          url={'http://edu.ibwei.com/api/test/part/list'}
          filterParams={this.filterParams}
          outParams={this.outParams}
          addBtn={false}
          localName={'userList'}
          exportBtn={false}
          opreatWidth={'120px'}
          dataType={'json'}
          rowKey={'id'}
          opreat={this.opreat}
          fetchType={'get'}
          backParams={this.BackParams}
          // on-menuClick={this.tableClick}
          // on-add={this.add}
        />
      </div>
    )
  }
}
