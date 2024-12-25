import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  MousePointer,
  Ruler,
  CalendarDays,
  Layers,
  Copy,
  MapPin,
  Settings2
} from 'lucide-react'

export function MapTools() {
  const [selectedTool, setSelectedTool] = useState<'selector' | 'distance'>('selector')
  const [date, setDate] = useState<Date>(new Date())
  const [showLayers, setShowLayers] = useState(false)

  const tools = [
    {
      icon: MousePointer,
      tooltip: "Select Tool",
      active: selectedTool === 'selector',
      onClick: () => setSelectedTool('selector')
    },
    {
      icon: Ruler,
      tooltip: "Measure Distance",
      active: selectedTool === 'distance',
      onClick: () => setSelectedTool('distance')
    },
    {
      icon: MapPin,
      tooltip: "Add Location Pin",
      onClick: () => console.log("Add pin")
    },
    {
      icon: Layers,
      tooltip: "Toggle Layers",
      active: showLayers,
      onClick: () => setShowLayers(!showLayers)
    },
    {
      icon: Copy,
      tooltip: "Duplicate View",
      onClick: () => console.log("Duplicate view")
    },
    {
      icon: Settings2,
      tooltip: "Map Settings",
      onClick: () => console.log("Open settings")
    }
  ]

  return (
    <TooltipProvider>
      <div className="flex items-center space-x-2">
        {tools.map((tool, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button
                variant={tool.active ? "default" : "ghost"}
                size="icon"
                onClick={tool.onClick}
                className="h-9 w-9"
              >
                <tool.icon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tool.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}

        <div className="h-6 w-px bg-border mx-2" />

        <Popover>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <CalendarDays className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Select Date</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => newDate && setDate(newDate)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </TooltipProvider>
  )
}

