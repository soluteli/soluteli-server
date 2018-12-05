const Service = require('egg').Service

class ArticleService extends Service {
  // create======================================================================================================>
  async create() {
    const { ctx, service } = this
    const payload = ctx.request.body || {}
    return ctx.model.Article.create(payload)
  }

  // destroy======================================================================================================>  
  async destroy(_id) {
    const { ctx, service } = this
    const article = await ctx.service.article.find(_id)
    if (!article) {
      ctx.throw(404, 'article not found')
    }
    return ctx.model.Article.findByIdAndRemove(_id)
  }

  // update======================================================================================================>
  async update(_id, payload) {
    const { ctx, service } = this
    const article = await ctx.service.article.find(_id)
    if (!article) {
      ctx.throw(404, 'article not found')
    }
    return ctx.model.Article.findByIdAndUpdate(_id, payload)
  }

  // show======================================================================================================>
  async show(_id) {
    const article = await this.ctx.service.article.find(_id)
    if (!article) {
      this.ctx.throw(404, 'article not found')
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


module.exports = ArticleService