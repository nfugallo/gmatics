import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface LineFiltersProps {
  filters: { lineType: string; layer: string }
  setFilters: React.Dispatch<React.SetStateAction<{ lineType: string; layer: string }>>
}

export default function LineFilters({ filters, setFilters }: LineFiltersProps) {
  return (
    <div className="space-y-4 mb-4">
      <div className="space-y-2">
        <Label htmlFor="lineType">Line Type</Label>
        <Select
          value={filters.lineType}
          onValueChange={(value) => setFilters(prev => ({ ...prev, lineType: value }))}
        >
          <SelectTrigger id="lineType">
            <SelectValue placeholder="Select line type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="overhead">Overhead</SelectItem>
            <SelectItem value="underground">Underground</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="layer">Line Layer</Label>
        <Select
          value={filters.layer}
          onValueChange={(value) => setFilters(prev => ({ ...prev, layer: value }))}
        >
          <SelectTrigger id="layer">
            <SelectValue placeholder="Select layer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="transmission">Transmission</SelectItem>
            <SelectItem value="distribution">Distribution</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

