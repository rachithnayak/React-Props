import Card from './components/card'
import Freelancers from './components/freelancers'

function App() {
  return (
    <div className='card-list'>
      {Freelancers.map(function (elem,idl) {
        return <div key={idl}>
<Card photo={elem.photo} name={elem.name} description={elem.description} skills={elem.skills} rating={elem.rating} status={elem.status} hourlyRate={elem.hourlyRate} />
        </div>
      })}
    </div>
  )
}

export default App