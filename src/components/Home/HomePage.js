import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function HomePage() {
  const [user, setUser] = useState([])

  const fetchUsers = async () => {
    const url = 'http://18.118.149.101:3000/red/user'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    const data = await response.json()
    console.log(user);
    setUser(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <p>HomePage</p>
  )
}