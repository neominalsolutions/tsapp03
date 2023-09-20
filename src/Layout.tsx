import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <nav>
      {/* single page routing özelliğini kaybetmemek için Link kullanıyoruz */}
      <Link to={'/todo-page'}>Todos Page</Link>
      <Link to={'/todo-form'}>Todo Form</Link>
      <a href='/todo-form'>Todo Form2</a>
    </nav>
    <div>
      {/* dinamik içerik girişi  */}
      <Outlet />
    </div>
    <footer>
      Alt Bilgi
    </footer>
    </>
  )
}
