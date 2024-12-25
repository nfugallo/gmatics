'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import MapView from './MapView'
import MapToolbar from './MapToolbar'
import { Line } from '@/types/line'
import { mockLines } from '@/data/mockLines'

export default function Layout() {
  const [lines, setLines] = useState<Line[]>(mockLines)
  const [selectedLine, setSelectedLine] = useState<Line | null>(null)
  const [filters, setFilters] = useState({
    lineType: 'all',
    layer: 'all',
  })

  const filteredLines = lines.filter((line) => {
    return (
      (filters.lineType === 'all' || line.lineType === filters.lineType) &&
      (filters.layer === 'all' || line.layer === filters.layer)
    )
  })

  const handleLineSelect = (line: Line) => {
    setSelectedLine(line)
  }

  const handleLineUpdate = (updatedLine: Line) => {
    setLines(lines.map((line) => (line.id === updatedLine.id ? updatedLine : line)))
    setSelectedLine(updatedLine)
  }

  const handleCloseLineDetails = () => {
    setSelectedLine(null)
  }

  return (
    <div className="h-screen w-full flex p-4 gap-4 overflow-hidden">
      <Sidebar
        lines={filteredLines}
        selectedLine={selectedLine}
        onLineSelect={handleLineSelect}
        filters={filters}
        setFilters={setFilters}
      />
      <div className="flex-grow flex flex-col gap-4">
        <MapToolbar />
        <MapView
          lines={filteredLines}
          selectedLine={selectedLine}
          onLineUpdate={handleLineUpdate}
          onCloseLineDetails={handleCloseLineDetails}
        />
      </div>
    </div>
  )
}

