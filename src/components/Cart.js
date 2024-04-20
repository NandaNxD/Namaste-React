import {useSelector,useDispatch} from 'react-redux'
import ItemList from './ItemList';
import cartSlice, { clearCart } from '../utils/cartSlice';

const Cart=()=>{
    const cartItems=useSelector((store)=>{return store.cart.items});

    const dispatch=useDispatch();

    return (
        <div className='flex items-center flex-col'>
            <div className="text-bold text-3xl border-b-2 border-black">Cart</div>

            {
                !cartItems.length  && <h2 className='p-2 m-2 text-lg'>Cart Empty!!</h2>
            }

            {
                cartItems.length?(    
                    <div className="p-2 m-2 rounded-lg border bg-black text-white hover:scale-105 transition-all active:scale-100" data-testid='clear-cart' onClick={()=>{
                        dispatch(clearCart());
                    }}>Clear Cart</div>
                ):''
            }
         


            <div className='w-1/2'>
                <ItemList items={cartItems} useMapFunction={false}></ItemList>
            </div>
           
        </div>

    )
}

export default Cart;