import { ChangeEvent, useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 1,
        count: 10,
    }
}

interface createProductProps {
    onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate }: createProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        setError('')
        event.preventDefault();
        
        if(value.trim().length === 0) {
            setError('Please enter valid title.')
            return 
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data)
    }
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value)
    }
    
    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text"
                className="border py-2 px-4 mb-2 w-full"
                placeholder="Write Something"
                value={value}
                onChange={changeHandler}
            />
            { error && <ErrorMessage error={error}/>}
            <button type="submit" className="py-2 px-4 border bg-yellow-400">Click</button>
        </form>
    )
}