const Controller = require('egg').Controller

class CategoryController extends Controller {
  constructor(ctx) {
    super(ctx)
  }

  // 创建标签
  async create() {
    const { ctx, service } = this
    // 校验参数
    // ctx.validate(this.UserCreateTransfer)
    // 组装参数
    const payload = ctx.request.body || {}
    // 调用 Service 进行业务处理
    const res = await service.category.create(payload)
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res})
  }

  // 删除单个标签
  async destroy() {
    const { ctx, service } = this
    // 校验参数
    const { id } = ctx.params
    // 调用 Service 进行业务处理
    await service.category.destroy(id)
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx})
  }

  // 修改标签
  async update() {
    const { ctx, service } = this
    // 校验参数
    // ctx.validate(this.UserUpdateTransfer)
    // 组装参数
    const { id } = ctx.params
    const payload = ctx.request.body || {}
    // 调用 Service 进行业务处理
    await service.category.update(id, payload)
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx})
  }
 
  // 获取单个标签
  async show() {
    const { ctx, service } = this
    // 组装参数
    const { id } = ctx.params
    // 调用 Service 进行业务处理
    const res = await service.category.show(id)
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res})
  }

  // 获取所有标签
  async index() {
    const { ctx, service } = this
    // 组装参数
    const payload = ctx.query
    // 调用 Service 进行业务处理
    const res = await service.category.index(payload)
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res})
  }

  // 删除所选标签(条件id[])
  async removes() {
    const { ctx, service } = this
    // 组装参数
    // const payload = ctx.queries.id
    const { id } = ctx.request.body
    const payload = id.split(',') || []
    // 调用 Service 进行业务处理
    const result = await service.category.removes(payload)
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx})
  }

}


module.exports = CategoryController