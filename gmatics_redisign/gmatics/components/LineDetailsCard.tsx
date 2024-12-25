import { useState } from 'react'
import { X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Line } from '@/types/line'

interface LineDetailsCardProps {
  line: Line
  onClose: () => void
  onLineUpdate: (updatedLine: Line) => void
}

export default function LineDetailsCard({ line, onClose, onLineUpdate }: LineDetailsCardProps) {
  const [editedLine, setEditedLine] = useState(line)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedLine({ ...editedLine, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLineUpdate(editedLine)
  }

  return (
    <Card className="w-[380px] h-full border-l">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
        <CardTitle className="text-xl font-bold">Line Details</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <ScrollArea className="flex-1 h-[calc(100%-4rem)]">
        <CardContent className="p-4">
          {/* Non-editable Information */}
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{editedLine.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">CX</p>
                <p className="font-medium">{editedLine.cx}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Line Type</p>
                <p className="font-medium">{editedLine.lineType}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Layer</p>
                <p className="font-medium">{editedLine.layer}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Nominal Voltage</p>
                <p className="font-medium">{editedLine.nominalVoltage / 1000} kV</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Exercise Voltage</p>
                <p className="font-medium">{editedLine.exerciseVoltage / 1000} kV</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">ID</p>
                <p className="font-medium">{editedLine.id}</p>
              </div>
            </div>
          </div>

          {/* Editable Information */}
          <div>
            <h3 className="font-semibold mb-4">Editable Properties</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="origin">Origin</Label>
                <Input
                  id="origin"
                  name="origin"
                  value={editedLine.origin}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="enterCode">Enter Code</Label>
                <Input
                  id="enterCode"
                  name="enterCode"
                  value={editedLine.enterCode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastModified">Last Modified</Label>
                <Input
                  id="lastModified"
                  name="lastModified"
                  type="date"
                  value={editedLine.lastModified}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minLateralDistance">Min Lateral Distance</Label>
                <Input
                  id="minLateralDistance"
                  name="minLateralDistance"
                  type="number"
                  value={editedLine.minLateralDistance}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minVerticalDistance">Min Vertical Distance</Label>
                <Input
                  id="minVerticalDistance"
                  name="minVerticalDistance"
                  type="number"
                  value={editedLine.minVerticalDistance}
                  onChange={handleInputChange}
                />
              </div>
              <Button type="submit" className="w-full">Update Line</Button>
            </form>
          </div>
        </CardContent>
      </ScrollArea>
    </Card>
  )
}

