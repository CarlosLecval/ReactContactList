interface Props {
  count: number
  total: number
  onFilter: (newCount: number) => void
}

export default function FilterResults({ count, total, onFilter }: Props) {
  return (
    <div className="flex justify-end text-sm pt-3">
      <div>
        <div>
          <span className="pr-1">Filter contact by number:</span>
          <input type="number" className="pl-1 w-14" value={count} onChange={(e) => onFilter(Number(e.target.value))} />
        </div>
        <p>Showing {count} of {total} contacts</p>
      </div>
    </div>
  )
}
