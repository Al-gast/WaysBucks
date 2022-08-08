import NavbarAdmin from '../components/Nav/NavbarAdmin'
import {Form, Button} from 'react-bootstrap';
import AddProductImage from '../assets/addProductImage.svg';
import FileImg from '../assets/img/icon-upload.png'
import React, { useState } from "react";

const AddProduct = () => {
    const [product, setProduct] = useState({});
const [preview, setPreview] = useState(null);
const [previewName, setPreviewName] = useState("");

const handleChange = (e) => {
    setProduct({
        ...product,
        [e.target.name]: e.target.value,
    });

    if (e.target.type === "file") {
        let url = URL.createObjectURL(e.target.files[0]);
        setPreview(url);
        setPreviewName(e.target.files[0].name);
    }
};

    const handleSubmit = (e) => {
    e.prevent.default();
};
    return (
        <>
        <NavbarAdmin />
        <div className="d-flex justify-content-center">
        <div className="addProduct container row" id="add-product">
            <div className="left-side col-7">
                <form>
                <div className="tx-product mt-5 mb-5">
                    <h1>Product</h1>
                </div>
                <Form.Group className="mb-3">
                    <Form.Control
                        id="input"
                        type="text"
                        name=""
                        placeholder="Name Product"
                        className='input'/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                        id="input"
                        type="number"
                        name=""
                        placeholder="Price"
                        className='input' />
                    </Form.Group>
                    <input
                        type="file"
                        id="addProductImage"
                        hidden
                        className="photoProduct"
                        name="productImg"
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="addProductImage"
                        className='addProductImage'
                        >
                        <img src={FileImg} alt="paperClip"/>
                    </label>
                    <div className="d-grid gap-2">
                        <Button className="btn-product mx-auto">
                        Add Product
                        </Button>
                    </div>
                </form>
            </div>
                <div className="card-side col-5">
                    <img src={AddProductImage} alt='' className='mt-0'/>
                </div>
        </div>
        </div>
        </>
    )
}

export default AddProduct;