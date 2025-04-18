import { firebaseDB } from "@/config/firebaseConfig";
import {ref, get} from 'firebase/database'; 
import { Product } from "@/types/types";

const productRef = ref(firebaseDB, 'products'); 

const fetchProducts = async (): Promise<Product[]> => {
    const snapshot = await get(productRef);
    const data = snapshot.val();
    
    const products: Product[] = [];
    if (data) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                products.push({... data[key] });
            }
        }
    }
    return products;
}

export { fetchProducts }