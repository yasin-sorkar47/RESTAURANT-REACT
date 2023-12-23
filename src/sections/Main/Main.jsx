import Container from '../components/container'
import Row from '../components/Row'
import Card from '../Card/Card'
import './style.scss'


function Main() {
  return (
        <section className='food'>
            <h2 className="text-center">Chose Your Favorite Food</h2>
            <Container>
                <Row>
                    <Card />
                </Row>
            </Container>
        </section>
  )
}

export default Main