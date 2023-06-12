---
sidebar: auto
---

# Mysql

## Chinese pinyin sort

中文拼音排序

```sql
select * from [table_name] orderby CONVERT([column_name] USING gbk) DESC;
```

## Update column length

更新字段长度

```sql
ALTER TABLE [custom_points] MODIFY COLUMN [column_name] varchar(50)
```

## Get all tables info

获取所有表信息

```sql
select * from information_schema.tables where table_schema = '[table_name]';
```

## Backup Mysql

备份

```shell
mysqldump -u[username] -p[password] [database_name] > /home/data/[database_name]_$(date +%Y%m%d_%H%M%S)).sql
```

## Backup specific or multi tables

备份单独一张表

```shell
mysqldump -u[username] -p[password] --host=[hostname] --port=[port] -d [database_name] [table_name] --skip-lock-tables > /home/data/[name].sql
mysqldump -u[username] -p[password] --host=[hostname] --port=[port] -d [database_name] --tables [table_name] [table_name] [table_name]--skip-lock-tables > /home/data/[name].sql
```

## Import database

导入数据库

```shell
source /home/data/[database_name].sql
```

