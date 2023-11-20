import { useState } from "react";
import { Box, Button, ButtonGroup, Icon } from "@chakra-ui/react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import DATA from "../data"
import Filters from "./Filters";
import SortIcon from "./icons/SortIcon";

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
  const[columnFilters, setColumnFilters] = useState([])
 
  const table = useReactTable({
    data,
    columns,
    state:{
        columnFilters,
    },
    getCoreRowModel:getCoreRowModel(),
    getFilteredRowModel:getFilteredRowModel(),
    getPaginationRowModel:getPaginationRowModel(),
    getSortedRowModel:getSortedRowModel(),
    columnResizeMode:"onChange"
  })
  console.log(table.getHeaderGroups());
  return (
    <Box>
        <Filters 
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
        />
        <Box className="table" w = {table.getTotalSize}>
            {table.getHeaderGroups().map(headerGroup => <Box className="tr" key={headerGroup.id}>
                {headerGroup.headers.map(
                    header => <Box className="th" w = {header.getSize()} key={header.id}>
                        {header.column.columnDef.header}
                        {
                            header.column.getCanSort() && <Icon
                                as = {SortIcon}
                                mx = {3}
                                fontSize={14}
                                onClick={
                                    header.column.getToggleSortingHandler()
                                }
                            />
                        }
                        {
                            header.column.getIsSorted()
                        }
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
        <br/>
        <text mb={2}>
            Page {table.getState().pagination.pageIndex + 1} of {" "}
            {table.getPageCount()}
        </text>
        <br/>
        <ButtonGroup size="sm" isAttached variant="outline">
        <Button
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </Button>
        <Button
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
        >
          {">"}
        </Button>
      </ButtonGroup>
    </Box>
  );
};
export default TaskTable;