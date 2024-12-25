import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Line } from '@/types/line'

interface LineTableProps {
  lines: Line[]
  onLineSelect: (line: Line) => void
  selectedLine: Line | null
}

function truncate(str: string, n: number) {
  return (str.length > n) ? str.slice(0, n-1) + '...' : str;
}

export default function LineTable({ lines, onLineSelect, selectedLine }: LineTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const linesPerPage = 6
  const totalPages = Math.ceil(lines.length / linesPerPage)

  const getCurrentPageLines = () => {
    const startIndex = (currentPage - 1) * linesPerPage
    const endIndex = startIndex + linesPerPage
    return lines.slice(startIndex, endIndex)
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40%]">Name</TableHead>
            <TableHead className="w-[20%]">CX</TableHead>
            <TableHead className="w-[20%]">Type</TableHead>
            <TableHead className="w-[20%]">Voltage (kV)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {getCurrentPageLines().map((line) => (
            <TableRow
              key={line.id}
              onClick={() => onLineSelect(line)}
              className={`cursor-pointer ${selectedLine?.id === line.id ? 'bg-muted' : ''}`}
            >
              <TableCell className="font-medium">{truncate(line.name, 20)}</TableCell>
              <TableCell>{line.cx}</TableCell>
              <TableCell>{line.lineType}</TableCell>
              <TableCell>{line.nominalVoltage / 1000}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <div className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}

