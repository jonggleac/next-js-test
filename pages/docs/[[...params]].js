import { useRouter } from 'next/router'
import React from 'react'

export default function Doc() {
  const router = useRouter()
  const { params = [] } = router.query
  console.log(params)

  return (
    <div>
      <h1> Catch-all routiong</h1>
      <p>{params[0] / params[1] / params[2]}</p>
    </div>
  )
}
