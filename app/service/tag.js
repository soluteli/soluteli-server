const Service = require('egg').Service

class TagService extends Service {
  // create======================================================================================================>
  async create() {
    const { ctx, service } = this
    const payload = ctx.request.body || {}
    return ctx.model.Tag.create(payload)
  }

  // destroy======================================================================================================>  
  async destroy(_id) {
    const { ctx, service } = this
    const tag = await ctx.service.tag.find(_id)
    if (!tag) {
      ctx.throw(404, 'tag not found')
    }
    return ctx.model.Tag.findByIdAndRemove(_id)
  }

  // update======================================================================================================>
  async update(_id, payload) {
    const { ctx, service } = this
    const tag = await ctx.service.tag.find(_id)
    if (!tag) {
      ctx.throw(404, 'tag not found')
    }
    return ctx.model.Tag.findByIdAndUpdate(_id, payload)
  }

  // show======================================================================================================>
  async show(_id) {
    const tag = await this.ctx.service.tag.find(_id)
    if (!tag) {
      this.ctx.throw(404, 'tag not found')
    }
    return this.ctx.model.Tag.findById(_id).populate('role')
  }

  // index======================================================================================================>
  async index() {
    return this.ctx.model.Tag.find({})
  }  
  

  async removes(payload) {
    return this.ctx.model.Tag.remove({ _id: { $in: payload } })
  }

  // Commons======================================================================================================>
  async find(id) {
    return this.ctx.model.Tag.findById(id)
  }

  async findByIdAndUpdate(id, values) {
    return this.ctx.model.Tag.findByIdAndUpdate(id, values)
  }

}


module.exports = TagService