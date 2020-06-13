/* eslint-disable */
// @ts-nocheck
import { Component, Vue } from 'vue-property-decorator'
import { Tag, Modal, Button, Table, Avatar, Rate, Badge } from 'ant-design-vue'
import { tableList, FilterFormList, Opreat } from '@/interface'
import MTable from '@/views/components/FilterTable/MTable'

@Component({
  name: 'release',
  components: {
    'a-tag': Tag,
    'a-modal': Modal,
    'a-button': Button,
    'a-table': Table,
    'a-avatar': Avatar,
    'a-rate': Rate,
    'a-badge': Badge,
    'm-table': MTable
  }
})
export default class Release extends Vue {
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
      title: '意向金额',
      dataIndex: 'legalLockQuantity',
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
      msg: '确定撤销吗？'
    }
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
      <div class='baseInfo-wrap'>
        <m-table
          ref='MTable'
          table-list={this.tableList}
          url={'http://edu.ibwei.com/api/test/part/list'}
          data-type={'json'}
          row-key={'id'}
          opreat={this.opreat}
          out-params={this.outParams}
          opreat-width={'120px'}
          back-params={this.BackParams}
          local-name={'userList'}
          fetch-type={'get'}
          // default-page-size="defaultPageSize"
          // highlight-current-row="highlightCurrentRow"
          scroll={{ x: 900 }}
          // expanded-row-render="expandedRowRender"
          tableClick={this.tableClick}
          // selectChange="selectChange"
          // currentChange="currentChange"
        />
      </div>
    )
  }
}
