const Service = require('egg').Service

class UserService extends Service {
  // create======================================================================================================>
  async create() {
    const { ctx, service } = this
    const payload = ctx.request.body || {}
    return ctx.model.Article.create(payload)
  }

  // destroy======================================================================================================>  
  async destroy(_id) {
    const { ctx, service } = this
    const user = await ctx.service.user.find(_id)
    if (!user) {
      ctx.throw(404, 'user not found')
    }
    return ctx.model.Article.findByIdAndRemove(_id)
  }

  // update======================================================================================================>
  async update(_id, payload) {
    const { ctx, service } = this
    const user = await ctx.service.user.find(_id)
    if (!user) {
      ctx.throw(404, 'user not found')
    }
    return ctx.model.Article.findByIdAndUpdate(_id, payload)
  }

  // show======================================================================================================>
  async show(_id) {
    const user = await this.ctx.service.article.find(_id)
    if (!user) {
      this.ctx.throw(404, 'user not found')
    }
    return this.ctx.model.Article.findById(_id).populate('role')
  }

  // index======================================================================================================>
  async index() {
    return this.ctx.model.Article.find({})
  }  
  

  async removes(payload) {
    return this.ctx.model.Article.remove({ _id: { $in: payload } })
  }

  // Commons======================================================================================================>
  async find(id) {
    return this.ctx.model.Article.findById(id)
  }

  async findByIdAndUpdate(id, values) {
    return this.ctx.model.Article.findByIdAndUpdate(id, values)
  }

  

}


module.exports = UserService