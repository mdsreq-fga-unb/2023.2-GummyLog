import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import DATA from "../data"

const columns = [
{
    accessorKey: 'id',
    header: "ID",
    cell: (props) => <p>{props.getValue()}</p>
},
{
    accessorKey: 'produto',
    header: "Produto",
    cell: (props) => <p>{props.getValue()}</p>
},
{
    accessorKey: 'desc',
    header: "Descrição",
    cell: (props) => <p>{props.getValue()}</p>
},
{
    accessorKey: 'marca',
    header: "Marca",
    cell: (props) => <p>{props.getValue()}</p>
},
{
    accessorKey: 'qtd',
    header: "Quantidade",
    cell: (props) => <p>{props.getValue()}</p>
},
]

const TaskTable = () => {
  const[data,setData] = useState(DATA)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel:getCoreRowModel(),
    columnResizeMode:"onChange"
  })
  console.log(table.getHeaderGroups());
  return (
    <Box>
        <Box className="table" w = {table.getTotalSize}>
            {table.getHeaderGroups().map(headerGroup => <Box className="tr" key={headerGroup.id}>
                {headerGroup.headers.map(
                    header => <Box className="th" w = {header.getSize()} key={header.id}>
                        {header.column.columnDef.header}
                        <Box
                        onMouseDown={
                            header.getResizeHandler()
                        }
                        onTouchStart={
                            header.getResizeHandler()
                        }
                        className={
                            `resizer ${
                                header.column.getIsResizing() ? 'isResizing':''
                            }`
                        }
                        />
                    </Box>
                )}
            </Box>)}
            {
                table.getRowModel().rows.map(row => <Box className="tr" key={row.id}>
                    {row.getVisibleCells().map(cell => <Box className="td" w = {cell.column.getSize()} key={cell.id}>
                        {
                            flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )
                        }
                    </Box>)}
                </Box>)
            }
        </Box>
    </Box>
  );
};
export default TaskTable;