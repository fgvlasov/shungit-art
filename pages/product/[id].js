import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Product() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/cards/${query.id}`,
    fetcher
  )

  if (error) return <div>sss{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>price</th>
          <th>parameters</th>
          <th>materials</th>
          <th>colors</th>
          <th>type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.title}</td>
          <td>{data.price}</td>
          <td>{data.parameters}</td>
          <td>{data.materials}</td>
          <td>{data.colors}</td>
          <td>{data.type}</td>
        </tr>
      </tbody>
    </table>
  )
}
