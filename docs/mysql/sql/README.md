---
sidebar: auto
---

# Mysql

## Chinese pinyin sort

中文拼音排序

```sql
select * from Table orderby CONVERT(ColumnName USING gbk) DESC;
```