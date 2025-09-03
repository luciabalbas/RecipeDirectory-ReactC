import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch.jsx'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme.jsx'
import { projectFirestore } from '../../firebase/config.js'

//styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  // const url = 'http://localhost:3000/recipes/' + id
  // const { data: recipe, isPending, error } = useFetch(url)
  const { mode } = useTheme()
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot(doc => {
        console.log(doc);
        if (doc.exists) {
          setIsPending(false)
          setRecipe(doc.data())
        } else {
          setError('No recipe to load')
          setIsPending(false)
        }
      })
      return () => unsub()
  }, [id])

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'Chocolate cookies'
    })
  }

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
          <button onClick={handleClick}>Update me</button>
      </>)}
    </div>
  )
}
