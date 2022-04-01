import { cards } from '../../../data'

export default function productHandler({ query: { id } }, res) {
  const filtered = cards.filter((p) => p.id === id)

  // Product with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Product with id: ${id} not found.` })
  }
}