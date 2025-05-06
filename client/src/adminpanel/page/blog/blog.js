import React from 'react'
import { Route, Routes } from 'react-router'
import AddBlog from '../../components/Blog/AddBlog'
import BlogList from '../../components/Blog/BlogList'

export default function BlogPage() {
  return (
    <Routes>
      <Route path='/' element={<BlogList />} />
      <Route path='/:id' element={<AddBlog />} />
      <Route path='/add' element={<AddBlog />} />
    </Routes>
  )
}
