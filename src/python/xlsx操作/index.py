# -*- coding:utf-8 -*-

import xlsxwriter
import os
import xlrd

# 建立文件
workbook = xlsxwriter.Workbook('./数据汇总.xlsx')
# 建立sheet，可以work.add_worksheet('employee')来指定sheet名，但中文名会报UnicodeDecodeErro的错误
worksheet = workbook.add_worksheet()

# 向A1写入
# worksheet.write('A1', 'Hello world')
# 合并A1-C1写入
# worksheet.merge_range("A1:C1", "Hello world")

boold_center = workbook.add_format({'bold': True, 'align': 'center'})
worksheet.merge_range("A1:C1", "员工登记表", boold_center)

bold = workbook.add_format({'bold': True})
worksheet.write('A2', "部门", bold)
worksheet.write('B2', "姓名", bold)
worksheet.write('C2', "手机号", bold)

n = 3
for i in os.listdir('./xlsx'):
    if i.endswith('xlsx'):
        path = os.path.join('./xlsx', i)
        # 文件名以及路径
        file = xlrd.open_workbook(path)

        # 获取book中一个工作表
        # table = file.sheets()[0]          #通过索引顺序获取
        # table = file.sheet_by_index(sheet_indx)) #通过索引顺序获取
        # table = file.sheet_by_name(sheet_name)#通过名称获取
        # names = file.sheet_names()  # 返回book中所有工作表的名字
        table = file.sheet_by_index(0)

        # 行的操作
        # nrows = table.nrows #获取该sheet中的有效行数
        # table.row(rowx)  #返回由该行中所有的单元格对象组成的列表
        # table.row_slice(rowx)  #返回由该行中所有的单元格对象组成的列表
        # table.row_types(rowx, start_colx=0, end_colx=None)    #返回由该行中所有单元格的数据类型组成的列表
        # table.row_values(rowx, start_colx=0, end_colx=None)   #返回由该行中所有单元格的数据组成的列表
        # table.row_len(rowx) #返回该列的有效单元格长度

        # 列(colnum)的操作
        # ncols = table.ncols   #获取列表的有效列数
        # table.col(colx, start_rowx=0, end_rowx=None)  #返回由该列中所有的单元格对象组成的列表
        # table.col_slice(colx, start_rowx=0, end_rowx=None)  #返回由该列中所有的单元格对象组成的列表
        # table.col_types(colx, start_rowx=0, end_rowx=None)    #返回由该列中所有单元格的数据类型组成的列表
        # table.col_values(colx, start_rowx=0, end_rowx=None)   #返回由该列中所有单元格的数据组成的列表

        # 单元格的操作
        # table.cell(rowx,colx)   #返回单元格对象
        # table.cell_type(rowx,colx)    #返回单元格中的数据类型
        # table.cell_value(rowx,colx)   #返回单元格中的数据

        department = table.cell_value(2, 0)
        name = table.cell_value(2, 1)
        tel = table.cell_value(2, 2)

        worksheet.write("A{0}".format(n), department)
        worksheet.write("B{0}".format(n), name)
        worksheet.write("C{0}".format(n), tel)
        n += 1

workbook.close()
