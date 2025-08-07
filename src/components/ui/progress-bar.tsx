import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressBarProps {
  value: number
  max?: number
  className?: string
  showLabel?: boolean
  variant?: "default" | "success" | "warning" | "destructive"
}

const ProgressBar = React.forwardRef<
  HTMLDivElement,
  ProgressBarProps
>(({ className, value, max = 100, showLabel = false, variant = "default", ...props }, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  
  const variantStyles = {
    default: "bg-primary",
    success: "bg-success",
    warning: "bg-warning", 
    destructive: "bg-destructive"
  }

  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className={cn(
            "h-full transition-all duration-500 ease-out rounded-full",
            variantStyles[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-sm text-muted-foreground text-right">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  )
})

ProgressBar.displayName = "ProgressBar"

export { ProgressBar }