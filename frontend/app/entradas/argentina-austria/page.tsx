'use client';
import Link from "next/link";

import { useState } from 'react';

export default function PaginaCompra() {
    const [sector, setSector] = useState('platea-baja');
    const [cantidad, setCantidad] = useState(1);

    const precios: { [key: string]: number } = {
        'vip': 300,
        'platea-baja': 150,
        'platea-alta': 120,
        'popular': 50,
    };




    return (
        <>
            <header className="header">
                <img className="logo-mundial" src="/Logo-Copa-Mundial.png" alt="Logo" />
                <h1>FIFA WORLD CUP</h1>
            </header>

            <main className="main-compra">
                <h2 className="titulo">SELECCIONÁ TUS ENTRADAS <br /> ARGENTINA VS AUSTRIA</h2>

                <div className="compra-container">



                    <div className="sector">
                        <label className="label-sector">Sector</label>
                        <select
                            className="selector-sector"
                            value={sector}
                            onChange={(e) => setSector(e.target.value)}
                        >
                            <option value="vip">VIP</option>
                            <option value="platea-baja">Platea Baja</option>
                            <option value="platea-alta">Platea Alta</option>
                            <option value="popular">Popular</option>
                        </select>

                    </div>

                    <div className="box-precio">
                        <p className="label-precio">Precio por entrada</p>
                        <p className="precio">USD {precios[sector]}</p>
                    </div>

                    <div className="box-cantidad">
                        <p className="label-cantidad">Cantidad de entradas</p>
                        <div className="cantidad-container">
                            <button className="btn-cantidad" onClick={() => setCantidad(Math.max(1, cantidad - 1))}>−</button>
                            <span className="cantidad-numero">{cantidad}</span>
                            <button className="btn-cantidad" onClick={() => setCantidad(Math.min(6, cantidad + 1))}>+</button>
                        </div>
                    </div>






                    <div className="referencias">
                        <div className="referencia-box"><span className="color-ref vip-color"></span><p>VIP</p></div>
                        <div className="referencia-box"><span className="color-ref platea-color"></span><p>Platea</p></div>
                        <div className="referencia-box"><span className="color-ref popular-color"></span><p>Popular</p></div>
                        <div className="referencia-box"><span className="color-ref nodisponible-color"></span><p>No disponible</p></div>
                    </div>

                    <img className="img-estadio" src="/estadio.png" alt="Estadio" />
                    <button className="btn-continuar">CONTINUAR →</button>

                </div>
            </main>
        </>
    );
}
