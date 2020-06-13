/* eslint-disable */
// @ts-nocheck
import { Component, Vue } from 'vue-property-decorator'
import { Tag, Modal, Button, Table, Avatar, Rate, Badge } from 'ant-design-vue'
import { tableList, FilterFormList, Opreat } from '@/interface'

@Component({
  name: 'comment',
  components: {
    'a-tag': Tag,
    'a-modal': Modal,
    'a-button': Button,
    'a-table': Table,
    'a-avatar': Avatar,
    'a-rate': Rate,
    'a-badge': Badge
  }
})
export default class Comment extends Vue {
  BackParams: any = {
    code: 'data.resultCode',
    codeOK: 0,
    message: 'data.resultMessage',
    data: 'data.data',
    total: 'data.total'
  }

  outParams: any = {}

  tableList: tableList[] = [
    {
      title: '单号',
      dataIndex: 'id',
      align: 'center'
    },
    {
      title: '创建时间',
      dataIndex: 'name',
      align: 'center'
    },
    {
      title: '质押量',
      dataIndex: '',
      align: 'center'
    },
    {
      title: '币种',
      dataIndex: '',
      align: 'center'
    },
    {
      title: '质押率',
      dataIndex: '',
      align: 'center'
    },
    {
      title: '日利率',
      dataIndex: '',
      align: 'center'
    },
    {
      title: '参考年化',
      dataIndex: '',
      align: 'center'
    },
    {
      title: '借入金额',
      dataIndex: '',
      align: 'center'
    },
    {
      title: '期限',
      dataIndex: '',
      align: 'center'
    },
    {
      title: '意向金额',
      dataIndex: 'a_answer',
      align: 'center'
    }
  ]

  opreat: Opreat[] = [
    {
      key: 'id',
      rowKey: 'id',
      color: 'red',
      text: '撤销',
      roles: false,
      popconfirm: true,
      msg: '确定禁用改账户吗？'
    }
    // {
    //   key: 'delete',
    //   rowKey: 'id',
    //   color: 'black',
    //   text: '删除',
    //   roles: true,
    //   popconfirm: true,
    //   msg: '是否删除该用户?'
    // }
  ]

  title = '新增图片'

  visible = false

  type = 'add'

  editData = {}

  tableClick(key: string, row: any) {
    const data = JSON.parse(JSON.stringify(row))
    this.type = row.type
    if (row.type === 1) {
      this.$message.info('禁止对管理员账户进行任何操作！')
    }
    console.log(data)
    /*   switch (key) {
      case 'delete':
        window.api.articleCommentDelete({ id: data.id }).then((res: any) => {
          const resultCode = res.data.resultCode
          if (resultCode === 0) {
            this.$message.success('删除成功')
            this.success()
          } else {
            this.$message.error('删除失败')
          }
        })
        break
      case 'pass':
        window.api.userUpdate({ ...row, id: data.id, status: row.status === 1 ? 0 : 1 }).then((res: any) => {
          const resultCode = res.data.resultCode
          if (resultCode === 0) {
            this.$message.success(res.data.resultMessage)
            this.success()
          } else {
            this.$message.error('处理失败')
          }
        })
        break
      default:
        console.log('默认处理')
    } */
  }

  add() {
    this.title = '添加用户'
    this.type = 'add'
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
          ref="baseInfoTable"
          tableList={this.tableList}
          filterList={[]}
          filterGrade={[]}
          scroll={{ x: 900 }}
          url={'http://edu.ibwei.com/api/test/part/list'}
          filterParams={{}}
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
          on-menuClick={this.tableClick}
          on-add={this.add}
        />
      </div>
    )
  }
}
