import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Line } from '@/types/line'

interface LineEditFormProps {
  line: Line
  onLineUpdate: (line: Line) => void
}

export default function LineEditForm({ line, onLineUpdate }: LineEditFormProps) {
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
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={editedLine.name} readOnly />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cx">CX</Label>
          <Input id="cx" name="cx" value={editedLine.cx} readOnly />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lineType">Line Type</Label>
          <Input id="lineType" name="lineType" value={editedLine.lineType} readOnly />
        </div>
        <div className="space-y-2">
          <Label htmlFor="layer">Layer</Label>
          <Input id="layer" name="layer" value={editedLine.layer} readOnly />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nominalVoltage">Nominal Voltage (kV)</Label>
          <Input id="nominalVoltage" name="nominalVoltage" value={editedLine.nominalVoltage / 1000} readOnly />
        </div>
        <div className="space-y-2">
          <Label htmlFor="exerciseVoltage">Exercise Voltage (kV)</Label>
          <Input id="exerciseVoltage" name="exerciseVoltage" value={editedLine.exerciseVoltage / 1000} readOnly />
        </div>
        <div className="space-y-2">
          <Label htmlFor="id">ID</Label>
          <Input id="id" name="id" value={editedLine.id} readOnly />
        </div>
      </div>
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
      <Button type="submit">Update Line</Button>
    </form>
  )
}

