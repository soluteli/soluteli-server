const Service = require('egg').Service

class CategoryService extends Service {
  // create======================================================================================================>
  async create() {
    const { ctx, service } = this
    const payload = ctx.request.body || {}
    return ctx.model.Category.create(payload)
  }

  // destroy======================================================================================================>  
  async destroy(_id) {
    const { ctx, service } = this
    const category = await ctx.service.category.find(_id)
    if (!category) {
      ctx.throw(404, 'category not found')
    }
    return ctx.model.Category.findByIdAndRemove(_id)
  }

  // update======================================================================================================>
  async update(_id, payload) {
    const { ctx, service } = this
    const category = await ctx.service.category.find(_id)
    if (!category) {
      ctx.throw(404, 'category not found')
    }
    return ctx.model.Category.findByIdAndUpdate(_id, payload)
  }

  // show======================================================================================================>
  async show(_id) {
    const category = await this.ctx.service.category.find(_id)
    if (!category) {
      this.ctx.throw(404, 'category not found')
    }
    return this.ctx.model.Category.findById(_id)
  }

  // index======================================================================================================>
  async index() {
    return this.ctx.model.Category.find({})
  }  
  

  async removes(payload) {
    return this.ctx.model.Category.remove({ _id: { $in: payload } })
  }

  // Commons======================================================================================================>
  async find(id) {
    return this.ctx.model.Category.findById(id)
  }

  async findByIdAndUpdate(id, values) {
    return this.ctx.model.Category.findByIdAndUpdate(id, values)
  }

}


module.exports = CategoryService