import {Row,Col} from 'react-bootstrap'
import products from '../products'

const HomeScreens = () => {
  return (
    <>

    <h1>HomeScreens</h1>
    <Row>
        {products.map((product)=>(
            <Col>
            <h3>{product.name}</h3>
            
            </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreens