interface Props {
  total: number
  filled: number
}

export function SeatProgressBar({ total, filled }: Props) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }, (_, i) => {
        const cls =
          i < filled - 1
            ? 'seat-dot seat-dot-filled'
            : i === filled - 1
            ? 'seat-dot seat-dot-pending'
            : 'seat-dot'
        return <div key={i} className={cls} />
      })}
    </div>
  )
}
