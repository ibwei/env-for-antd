import { Component, Vue } from 'vue-property-decorator'
import { Tag, Modal, Button, Table } from 'ant-design-vue'
import { tableList, FilterFormList, Opreat } from '@/interface'
import './test.less'

@Component({
  name: 'part',
  components: {
    'a-tag': Tag,
    'a-modal': Modal,
    'a-button': Button,
    'a-table': Table
  }
})
export default class Part extends Vue {
  filterParams: any = {
    name: '',
    address: [],
    createtime: [],
    startTime: '',
    endTime: ''
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
      key: 'name',
      label: 'name',
      type: 'input',
      placeholder: '请输入板块名'
    }
  ]

  tableList: tableList[] = [
    {
      title: '序号',
      align: 'center',
      dataIndex: 'id'
    },
    {
      title: '5-10分区间分析结果',
      dataIndex: 'a_answer',
      align: 'center'
    },
    {
      title: '11-15分区间分析结果',
      dataIndex: 'b_answer'
    },
    {
      title: '16-20分区间分析结果',
      dataIndex: 'c_answer'
    },
    {
      title: '20-25分区间分析结果',
      dataIndex: 'd_answer'
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      width: '180px'
    }
  ]

  opreat: Opreat[] = [
    {
      key: 'edit',
      rowKey: 'id',
      color: 'green',
      text: '编辑',
      roles: true,
      popconfirm: false
    },
    {
      key: 'delete',
      rowKey: 'id',
      color: 'red',
      text: '删除',
      roles: true,
      msg: '确定删除？'
    }
  ]

  changeVis = false

  detailVis = false

  title = '新增题库板块'

  visible = false

  modelType = 'add'

  editData = {}

  dataSource: Array<any> = []

  handleOk() {
    this.detailVis = true
  }

  nameRender(name: string) {
    return <a-tag color="green">{name}</a-tag>
  }

  device(device: number) {
    if (device === 0) {
      return <a-tag color={'green'}>手机</a-tag>
    }
    return <a-tag color={'blue'}>PC</a-tag>
  }

  handleCancel() {
    this.detailVis = false
  }

  tableClick(key: string, row: any) {
    const data = JSON.parse(JSON.stringify(row))
    switch (key) {
      case 'edit':
        this.editData = data
        this.visible = true
        if (row.status === 0) {
          this.title = '处理板块'
        } else {
          this.title = '查看板块处理结果'
        }
        break
      default:
        break
    }
  }

  add() {
    this.title = '新增板块'
    this.visible = true
    this.editData = {}
  }

  closeModal() {
    this.visible = false
    this.editData = {}
  }

  success() {
    this.visible = false
    const Table2: any = this.$refs.baseInfoTable
    this.editData = {}
    Table2.reloadTable()
  }

  render() {
    return (
      <div class="baseInfo-wrap">
        <filter-table
          ref='baseInfoTable'
          tableList={this.tableList}
          filterList={this.filterList}
          filterGrade={[]}
          scroll={{ x: 1400 }}
          url={'http://edu.ibwei.com/api/test/part/list'}
          filterParams={this.filterParams}
          outParams={this.outParams}
          addBtn={true}
          exportBtn={false}
          opreatWidth={'140px'}
          dataType={'json'}
          rowKey={'id'}
          localName={'feedback'}
          opreat={this.opreat}
          fetchType={'get'}
          backParams={this.BackParams}
          on-menuClick={this.tableClick}
          on-add={this.add}
        />
      </div>
    )
  }
}
