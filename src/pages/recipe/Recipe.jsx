import React from 'react'
import { useFetch } from '../../hooks/useFetch.jsx'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme.jsx'

//styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data: recipe, isPending, error } = useFetch(url)
  const { mode } = useTheme()

  return (
    <div className={`recipe ${mode}`}>
      {error && <div className='error'>{error}</div>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h1 className='page-title'>{recipe.title}</h1>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map(ing => 
              <li key={ing}>{ing}</li>
            )}
          </ul>
          <p className='method'>{recipe.method}</p>
      </>)}
    </div>
  )
}
