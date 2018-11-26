### router.resources
*181126*
**路由示例**
Method | Path            | Route Name     | Controller.Action
-------|-----------------|----------------|-----------------------------
GET    | /posts          | posts          | app.controller.posts.index
GET    | /posts/new      | new_post       | app.controller.posts.new
GET    | /posts/:id      | post           | app.controller.posts.show
GET    | /posts/:id/edit | edit_post      | app.controller.posts.edit
POST   | /posts          | posts          | app.controller.posts.create
PATCH  | /posts/:id      | post           | app.controller.posts.update
DELETE | /posts/:id      | post           | app.controller.posts.destroy

**Finish**
- POST `/api/article`
- GET `/api/article`
- GET `/api/article/:id`

**TODO**
- [ ] egg 测试
- [ ] egg debug分析
- [ ] mongodb: objectID、id、_id、id 自增