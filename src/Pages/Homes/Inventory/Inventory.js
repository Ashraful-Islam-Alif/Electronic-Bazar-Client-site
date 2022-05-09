import React from 'react';
import Inventory1 from '../../../images/Inventory/Inventory1.jpg'
import Inventory2 from '../../../images/Inventory/Inventory2.jpg'
import Inventory3 from '../../../images/Inventory/Inventory3.jpg'
import Inventory4 from '../../../images/Inventory/Inventory4.jpg'
import Inventory5 from '../../../images/Inventory/Inventory5.jpg'
import Inventory6 from '../../../images/Inventory/Inventory6.jpg'
import Items from './Items/Items';
const items = [
    { id: 1, supplier: 'Rikal', price: "From $999", stock: "100", img: Inventory1, name: "iPhone 13Pro", details: "A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip. Exceptional durability. And a huge leap in battery life." },
    { id: 2, supplier: 'Missan', price: "From $699", stock: "75", img: Inventory2, name: "iPhone11", details: "As part of our efforts to reach our environmental goals, iPhone 11 does not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning cable that supports fast charging and is compatible with USB‑C power adapters and computer ports." },
    { id: 3, supplier: 'Yasir', price: "From $1299", stock: "50", img: Inventory3, name: "MacBook Pro 13", details: "The Apple M1 chip gives the 13‑inch MacBook Pro speed and power beyond belief. With up to 2.8x CPU performance. Up to 5x the graphics speed. " },
    { id: 4, supplier: 'Khilam', price: "From $1099", stock: "40", img: Inventory4, name: "HP 15s-du1116TU Pentium Silver N5030 15.6", details: "The HP 15s-du1116TU comes with Intel Pentium Silver N5030 Processor (4M Cache, 1.10 GHz up to 3.10 GHz) with Intel UHD Graphics 605." },
    { id: 5, supplier: 'Manout', price: "From $399", stock: "50", img: Inventory5, name: "Apple Watch Series 7", details: "Big screen. Huge impact. The challenge was to create a bigger display while barely expanding the dimensions of the watch itself." },
    { id: 6, supplier: 'Rubel', price: "From $250", stock: "30", img: Inventory6, name: "Xiaomi Haylou RS4 LS12 Smart Watch", details: 'Xiaomi Haylou RS4 LS12 featured with 1.78" (368 x 448) AMOLED HD display, 12 workout modes, Alipay Offline Payment, IP68 waterproof, SpO2 tracking, 10 days battery life' },
]

const Inventory = () => {
    return (
        <div className='container mb-5'>
            <h1 className='text-center m-5'>Inventory</h1>

            <div className="row ">
                {
                    items.map(item => <Items
                        key={item.id}
                        item={item}
                    ></Items>)
                }
            </div>

        </div>
    );
};

export default Inventory;