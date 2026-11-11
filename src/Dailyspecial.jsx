import { useState, useEffect } from 'react'

function DailySpecial() {

  const [special, setSpecial] = useState(null)

  useEffect(() => {

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')

      .then(res => res.json())

      .then(data => setSpecial(data.meals[0]))

  }, [])

  if (!special) return <section className="daily-special daily-special-loading">Loading today's special...</section>

  return (

    <section className="daily-special">

      <div className="daily-special-copy">
        <span className="eyebrow">Featured today</span>
        <h3>{special.strMeal}</h3>
      </div>

      <img src={special.strMealThumb} alt={special.strMeal} />

    </section>

  )

}

export default DailySpecial
