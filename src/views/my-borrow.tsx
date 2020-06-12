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
  filterParams: any = {
    name: '',
    createtime: [],
    startTime: '',
    endTime: '',
    student_name: '',
    school_name: '',
    parent_phone: '',
    type: ''
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
      key: 'student_name',
      label: '请输入学生姓名',
      type: 'input',
      placeholder: '请输入学生姓名'
    },
    {
      key: 'school_name',
      label: '请输入学校名称',
      type: 'input',
      placeholder: '请输入学校名称'
    },
    {
      key: 'parent_phone',
      label: '请输入家长电话',
      type: 'input',
      placeholder: '请输入家长电话'
    },
    {
      key: 'type',
      label: 'status',
      type: 'cascader',
      placeholder: '请选择账号类型',
      options: [
        { value: 0, label: '学生' },
        { value: 1, label: '管理员' },
        { value: 2, label: '老师' }
      ]
    }
  ]

  warnListModalShow = false

  tableList: tableList[] = [
    {
      title: '序号',
      dataIndex: 'id',
      align: 'center'
    },
    {
      title: '标题',
      dataIndex: 'name',
      align: 'center',
      width: 200
    },
    {
      title: '答案1',
      dataIndex: 'a_answer',
      align: 'center',
      width: 400,
      customRender: this.answerRender
    }
  ]

  opreat: Opreat[] = [
    {
      key: 'pass',
      rowKey: 'id',
      text: 'shanchu',
      roles: true,
      popconfirm: true,
      msg(value: any) {
        if (value.status === 0) {
          return '确认解冻账户吗？'
        }
        return '确定禁用改账户吗？'
      }
    },
    {
      key: 'delete',
      rowKey: 'id',
      color: 'black',
      text: '删除',
      roles: true,
      popconfirm: true,
      msg: '是否删除该用户?'
    }
  ]

  title = '新增图片'

  visible = false

  type = 'add'

  editData = {}

  answerRender(a_anser: any, row: any) {
    return <a-tag color="green">{a_anser}</a-tag>
  }

  nameRender(name: string, row: any) {
    return <a-tag color="green">{name}</a-tag>
  }

  genderRender(gender: number) {
    if (gender === 1) {
      return <a-tag color="blue">男</a-tag>
    }
    return <a-tag color="green">女</a-tag>
  }

  typeRender(gender: number) {
    if (gender === 1) {
      return <a-badge status="success" text="管理员" />
    }
    if (gender === 0) {
      return <a-badge status="warning" text="学生" />
    }
    return <a-badge status="default" text="教师" />
  }

  statusRender(gender: number) {
    console.log(typeof gender)
    if (gender === 1) {
      return <a-badge status="success" text="正常" />
    }
    return <a-badge status="default" text="已禁用" />
  }

  deviceRender(gender: number) {
    if (gender === 1) {
      return <a-badge status="success" text="PC端" />
    }
    return <a-badge status="processing" text="移动端" />
  }

  ImgRender(url: string) {
    if (!url) {
      url = 'http://img.pinxianhs.com/timg.jpeg'
    }
    return <a-avatar shape="circle" size={56} src={url} />
  }

  starRender(star: number) {
    return <a-rate defaultValue={star} allowHalf disabled />
  }

  tagsRender(tags: string) {
    const tagArray = tags.split('-')
    const color = ['green', 'blue', 'cyan', 'pink', 'purple', 'orange']
    const dom = tagArray.map((item, index) => {
      const c = Math.floor(Math.random() * 6)
      return (
        <a-tag key={Math.random() + index} color={color[c]}>
          {item}
        </a-tag>
      )
    })
    return dom
  }

  tableClick(key: string, row: any) {
    const data = JSON.parse(JSON.stringify(row))
    this.type = row.type
    if (row.type === 1) {
      this.$message.info('禁止对管理员账户进行任何操作！')
    }
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
        <filter-table ref="baseInfoTable" tableList={this.tableList} filterList={this.filterList} filterGrade={[]} scroll={{ x: 900 }} url={'http://edu.ibwei.com/api/test/part/list'} filterParams={this.filterParams} outParams={this.outParams} addBtn={true} localName={'userList'} exportBtn={false} opreatWidth={'120px'} dataType={'json'} rowKey={'id'} opreat={this.opreat} fetchType={'get'} backParams={this.BackParams} on-menuClick={this.tableClick} on-add={this.add} />
      </div>
    )
  }
}
