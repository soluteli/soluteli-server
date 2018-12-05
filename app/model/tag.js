module.exports = app => {
  const mongoose = app.mongoose
  const TagSchema = new mongoose.Schema({
    
    // 标签名称
    name: { type: String, required: true, validate: /\S+/ },
    
    // 标签描述
    desc: String,
  
    // 图标
    icon: String,
  
    // 发布日期
    create_time: { type: Date, default: Date.now },
  
    // 最后修改日期
    update_time: { type: Date, default: Date.now }
    
  })
  return mongoose.model('Tag', TagSchema)
}
