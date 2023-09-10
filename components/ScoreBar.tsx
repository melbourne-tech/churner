import Progress from './ui/Progress'

export interface ScoreBarProps {
  label: string
  min: number
  max: number
  value: number
  formatter?: (value: number) => string
  reverse?: boolean
}

function defaultFormatter(value: number) {
  return value.toLocaleString()
}

const ScoreBar = ({
  label,
  min,
  max,
  value,
  formatter = defaultFormatter,
  reverse = false,
}: ScoreBarProps) => {
  const normalizedValue = Math.max(
    Math.abs(((value - min) / (max - min)) * 100 - (reverse ? 100 : 0)),
    1
  )

  return (
    <div>
      <div className="flex justify-between items-center text-sm">
        <span>{formatter(reverse ? max : min)}</span>
        <span className="font-medium">
          {formatter(value)} {label}
        </span>
        <span>{formatter(reverse ? min : max)}</span>
      </div>

      <Progress value={normalizedValue} />
    </div>
  )
}

export default ScoreBar
