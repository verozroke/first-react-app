import { Product } from '../components/Product';
import { useProducts } from '../hooks/products';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { useContext } from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';

export function ProductPage() {
    const { products, error, loading, addProduct } = useProducts()
	const {modal, open, close} = useContext(ModalContext)
	function createHandler(product: IProduct) {
		close()
		addProduct(product)
	}

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <Loader />}
			{error && <ErrorMessage error={ error }/>}
			{ products.map(product => <Product product={product} key={product.id}/>)}
			{/* <Product product={ products[0] }/>
			<Product product={ products[1] }/> */}
			{modal && 
			<Modal title="Create new Product" onClose={() => close()}>
				<CreateProduct onCreate={createHandler}/>
			</Modal>}

			<button onClick={() => open()}>+</button>
		</div>
	)
}