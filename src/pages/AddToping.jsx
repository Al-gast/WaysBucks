import NavbarAdmin from '../components/Nav/NavbarAdmin'
import {Form, Button} from 'react-bootstrap';
import AddTopingImage from '../assets/addTopingImage.svg';
import FileImg from '../assets/img/icon-upload.png'
const AddProduct = () => {
    return (
        <>
        <NavbarAdmin />
        <div className="d-flex justify-content-center">
        <div className="addProduct container row" id="add-product">
            <div className="left-side col-7">
                <div className="tx-product mt-5 mb-5">
                    <h1>Toping</h1>
                </div>
                <Form.Group className="mb-3">
                    <Form.Control
                        id="input"
                        type="text"
                        name=""
                        placeholder="Name Product"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                        id="input"
                        type="number"
                        name=""
                        placeholder="Price" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                        id="input"
                        type="file"
                        name=""
                        placeholder="Photo Product" />
                        {/* <label for="upload" className="label-file-add-product">
                            <img className="position-absolute" src={FileImg} alt=''/>
                        </label> */}
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button className="btn-product mx-auto">
                        Add Product
                        </Button>
                </div>
            </div>
                <div className="card-side col-5">
                    <img src={AddTopingImage}  alt=''/>
                </div>
        </div>
        </div>
        </>
    )
}

export default AddProduct;