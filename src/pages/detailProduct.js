import { Container } from "react-bootstrap"

import Nav from "../components/Nav/navbar"

import CardDetailProduct from "../components/card/cardDetailProduct"

function DetailProduct() {
    return (
        <div>
            <Nav />
            <Container className="d-flex m-3 p-4">
                <CardDetailProduct />
            </Container>
        </div>
    )
}

export default DetailProduct