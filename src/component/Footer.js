import React from 'react'

const date= new Date().getFullYear()

export default function Footer() {
    return (
      <footer>
          Copyright © {date}
      </footer>
    )
}
