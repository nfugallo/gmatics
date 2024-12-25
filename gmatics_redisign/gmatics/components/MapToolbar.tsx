import { Card } from "@/components/ui/card"
import { MapTools } from "./MapTools"

export default function MapToolbar() {
  return (
    <Card className="p-2 flex justify-end items-center">
      <MapTools />
    </Card>
  )
} 