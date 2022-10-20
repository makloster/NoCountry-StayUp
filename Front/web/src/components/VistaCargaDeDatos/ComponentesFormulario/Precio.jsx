import React from "react";

const Precio = () => {
    return (
        <div className='bg-white h-[120px] rounded-[15px] flex   flex-col items-center justify-center'>
            <h1 style={{display:"initial"}}>Precio</h1>
            <h2>
                Del monto que ingreses se te cobrará una comisión de 10% que
                figurará en su estado de cuenta en la fecha de cobro
            </h2>
        </div>
    );
};

export default Precio;
