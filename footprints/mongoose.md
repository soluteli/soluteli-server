## MongoDB 命令行

### shell操作

- 连接远程数据库：`mongo -u "root" -p "Root_123"  10.1.61.114:27017/admin`

- 查看数据库： `show dbs`

- 新建数据库：`use 新建数据库名`(若不进行操作，则不会被创建)

- 新建表：`db.createCollection('要新建的表名');`

- 查看当前数据库下表： `show collections;`

- 删除当前数据库指定表：`db.表名.drop();`

- 删除当前数据库：`db.dropDatabase();`
