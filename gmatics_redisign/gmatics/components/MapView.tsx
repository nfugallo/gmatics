import { Line } from '@/types/line'
import LineDetailsCard from './LineDetailsCard'

interface MapViewProps {
  lines: Line[]
  selectedLine: Line | null
  onLineUpdate: (updatedLine: Line) => void
  onCloseLineDetails: () => void
}

export default function MapView({ selectedLine, onLineUpdate, onCloseLineDetails }: MapViewProps) {
  return (
    <div className="flex-grow">
      {/* Map Container */}
      <div className="h-full relative bg-gray-100 rounded-xl overflow-hidden">
        {/* Base Map Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/satellite-map-mock.jpg')`,
            filter: 'brightness(0.9) contrast(1.1)'
          }}
        >
          <div className="absolute inset-0 bg-black/10" /> {/* Overlay for better contrast */}
        </div>

        {/* Line Details Layer - Floating on the left */}
        {selectedLine && (
          <div className="absolute top-4 left-4 h-[calc(100%-2rem)] z-10">
            <LineDetailsCard
              line={selectedLine}
              onClose={onCloseLineDetails}
              onLineUpdate={onLineUpdate}
            />
          </div>
        )}
      </div>
    </div>
  )
}

