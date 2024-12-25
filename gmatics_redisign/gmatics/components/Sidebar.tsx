import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent } from '@/components/ui/card'
import AccountInfo from './AccountInfo'
import Settings from './Settings'
import LineFilters from './LineFilters'
import LineTable from './LineTable'
import { Line } from '@/types/line'
import { useState } from 'react'

interface SidebarProps {
  lines: Line[]
  selectedLine: Line | null
  onLineSelect: (line: Line) => void
  filters: { lineType: string; layer: string }
  setFilters: React.Dispatch<React.SetStateAction<{ lineType: string; layer: string }>>
}

export default function Sidebar({
  lines,
  selectedLine,
  onLineSelect,
  filters,
  setFilters,
}: SidebarProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const handleRefresh = () => {
    // Implement refresh logic here
    console.log("Refreshing map...")
  }

  return (
    <Card className="w-[400px] h-full flex flex-col">
      <CardContent className="p-0 flex-grow flex flex-col overflow-hidden">
        <AccountInfo
          name="John Doe"
          email="john.doe@example.com"
          avatarUrl="/placeholder-user.jpg"
          onRefresh={handleRefresh}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />
        <ScrollArea className="flex-grow">
          <div className="p-4">
            <LineFilters filters={filters} setFilters={setFilters} />
            <LineTable lines={lines} onLineSelect={onLineSelect} selectedLine={selectedLine} />
          </div>
        </ScrollArea>
      </CardContent>
      <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </Card>
  )
}

