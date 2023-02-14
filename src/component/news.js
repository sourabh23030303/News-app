import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import Newsitem from "./newsitem";
import Spinner from "./spinner";
const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  // articles mai sara data dal dia fir article ko  state ka part bna dia 

 


  const updateNews = async () => {
    console.log("first fetch")
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`

    setloading(true)
    // props.setprogress(10)
    let data = await fetch(url)
    // props.setprogress(40)
    let parseddata = await data.json()
    console.log(parseddata)
    // props.setprogress(70)

    setarticles(parseddata.articles)
    settotalResults(parseddata.totalresults)
    setloading(false)

    // props.setprogress(100)
  }

  useEffect(() => {
    updateNews();
  }, [])

  // upr state chnage kr k umsr json ka data pass k dia ab array hai jisme api ka data hai json frmat mai

  const handnextclick = async () => {
    console.log("next")
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`

    setpage(page+1)
    setloading(true)
    // props.setprogress(10)
    let data = await fetch(url)
    // props.setprogress(40)
    let parseddata = await data.json()
    console.log(parseddata)
    // props.setprogress(70)

    setarticles(parseddata.articles)
    settotalResults(parseddata.totalresults)
    setloading(false)

    // props.setprogress(100)

  }

  const handpreclick = async () => {
    updateNews()
    setpage(page - 1)

  }



  return (
    <>
      <div className="text-center " > 
    <h1 style={{ color: 'white',marginTop:'90px' }}>India's top headings from {props.category}</h1>
        {loading && <Spinner />}

        <div className="row my-3 text-center">
          {!loading && articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title ? element.title.slice(0, 100) : ""} description={element.description ? element.description.slice(0, 0) : "click below to read more"} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
          {/* ab yha pe ek unique key deni padegi har object ki beause jab bhi .map use krte hai to deni padti hai din return kr rhe hai isliye div ,mai */}
        </div>

        <div className="container d-flex justify-content-evenly">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handpreclick}>&larr;privious</button>
          <button disabled ={  (page+1)> Math.ceil(totalResults / props.pageSize)}type="button" className="btn btn-dark" onClick={handnextclick}>next&rarr;</button>
        </div>
          
      </div>
    </>

  )
}

News.defaultProps = {
  country: "in",
  pageSize: 20,
  category: "general"

}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News