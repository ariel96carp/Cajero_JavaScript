let pedido = [] // Objeto creado en el que se almacena el pedido del cliente.
let menu =
[
    {
        Producto: "Quesadilla de Papas",
        Precio: 105.2
    },
    {
        Producto: "Enchilada",
        Precio: 154.85
    },
    {
        Producto: "Tacos",
        Precio: 145.50
    },
    {
        Producto: "Chicken Fajitas",
        Precio: 54.26
    },
    {
        Producto: "Carne Asada",
        Precio: 198
    },
    {
        Producto: "Milanesa de Res",
        Precio: 220.51
    },
    {
        Producto: "Huevos Rancheros",
        Precio: 112.54
    },
    {
        Producto: "Cornbread",
        Precio: 54.6
    },
    {
        Producto: "Rice Pudding",
        Precio: 56.48
    }
] // Objeto creado en el que se almacena el menu del restaurante.
const mostrar_menu = () => 
{
    menu.forEach(plato =>
    {
        console.log(`Producto: ${plato.Producto} - Precio: $${plato.Precio}`)
    })
} // Funcion para mostrar el menu al cliente.
const mostrar_pedido = () =>
{
    pedido.forEach(comida =>
    {
        console.log(`${comida.Producto} - $${comida.Precio}`)

    })
} // Funcion para mostrar el pedido realizado al cliente.
const demostrar_menu = () => 
{   
    menu.forEach(plato =>
    {
        if (plato.Producto.toLocaleLowerCase() === opcion_elegida.toLocaleLowerCase())
        {
            console.log(`Producto: ${plato.Producto}`)
            console.log(`Precio: $${plato.Precio}`)
            sum+= plato.Precio
            sum_total+= plato.Precio
            pedido.push(plato)
        }
    })
} // Funcion para verficar si el plato elegido por el cliente esta en el menu.
const validar_vuelto = () =>
{
    let vuelto = prompt(`¿Con cuanto va a pagar ${nombre}?`)
    while(vuelto !== "" || vuelto === "") // Ponga lo que ponga el usuario, siempre entra al ciclo WHILE.
    {
        if (vuelto !== null)
        {
            if (vuelto === "")
            {
                console.error("Ningun valor fue ingresado.")
                vuelto = prompt(`¿Con cuanto va a pagar ${nombre}?`)
            }
            else
            {
                if (isNaN(vuelto))
                {
                    console.error("El valor ingresado no es un numero")
                    vuelto = prompt(`¿Con cuanto va a pagar ${nombre}?`)
                }
                else
                {
                    if (vuelto > sum)
                    {
                        return vuelto
                    }
                    else
                    {
                        console.error("El pago abonado es menor al necesario")
                        vuelto = prompt(`¿Con cuanto va a pagar ${nombre}?`)
                    }   
                }
            }
        }
        else /* Esta linea valida si el cliente desea anular la compra. */
        {
            let confirmacion = confirm("¿Desea cancelar la compra?")
            if (confirmacion === true)
            {
                break
            }
            else
            {
                vuelto = prompt(`¿Con cuanto va a pagar ${nombre}?`)
            }
        }
    }
} // Funcion para verificar si la plata dada por el cliente alcanza para pagar.
const validar_nombre = () =>
{
    let persona = prompt("Ingrese nombre del cliente:")
    while (persona !== "" || persona === "") // Ponga lo que ponga el usuario, siempre entra al ciclo WHILE.
    {
        if (persona !== null)
        {
            if (persona === "")
            {
                console.error("Ningun nombre fue ingresado.")
                persona = prompt("Ingrese nombre del cliente:")
            }
            else
            {
                if (isNaN(persona))
                {
                    if (/^[A-Za-z ]+$/.test(persona)) /* Esta linea valida que los caracteres ingresados en el nombre 
                    sean solamente los explicitados entre corchetes.
                    */
                    {
                        return persona
                    }
                    else
                    {
                        console.error("Algun valor numerico o caracter especial fue ingresado.")
                        persona = prompt("Ingrese nombre del cliente:")
                    }
                }
                else
                {
                    console.error("El valor ingresado no corresponde a un nombre.")
                    persona = prompt("Ingrese nombre del cliente:")
                }
            }
        }
        else
        {
            let confirmacion = confirm("¿Desea cerrar la caja?") /* En caso de apretar "cancelar" (no querer ingresar
            ningun nombre), esta linea pregunta al usuario si desea cerrar la caja. De ser asi, el programa 
            automaticamente se cerrara. */
            if (confirmacion === true)
            {
                break
            }
            else
            {
                persona = prompt("Ingrese nombre del cliente:")
            }
        }
    }
} // Funcion para verificar si el nombre del cliente es correcto.

// Codigo para ejecutar el programa "cajero" en consola.
let sum = 0
let sum_total = 0
let bandera = 0 /* Atributo que indica si el usuario cancelo o no su pedido. En caso de "bandera = 0", el cliente lo
ha finalizado correctamente y esta en condiciones de ser pagado. Caso contrario, "bandera = 1", el cliente ha
finalizado su pedido antes de que este en condiciones de ser pagado; por ende, no hace falta calcular su costo. */
let nombre = ""
let opcion_elegida = ""
let inicio = confirm("¡Buenos dias! ¿Desea abrir la caja?")
while (inicio === true)
{
    console.clear()
    nombre = validar_nombre()
    if (nombre !== undefined)
    {
        console.log(`Este es el menu disponble para hoy:`)
        mostrar_menu()
        opcion_elegida = prompt(`¿Que le gustaria comer a ${nombre}?`)
        if (opcion_elegida !== null)
        {
            let validar_menu = menu.some(plato => plato.Producto.toLocaleLowerCase() === opcion_elegida.toLocaleLowerCase())
            while (validar_menu === true || validar_menu === false) /* Ponga lo que ponga el usuario, siempre entra 
            al ciclo WHILE.*/
            {
                if (validar_menu === true)
                {
                    console.clear()    
                    demostrar_menu()
                    let opcion = confirm("¿Desea pedir algo mas?")
                    while (opcion === true)
                    {
                        console.clear()
                        mostrar_menu()
                        opcion_elegida = prompt(`¿Que mas le gustaria comer a ${nombre}?`)
                        if (opcion_elegida !== null)
                        {
                            validar_menu = menu.some(plato => plato.Producto.toLocaleLowerCase() === 
                            opcion_elegida.toLocaleLowerCase())
                            if (validar_menu === true)
                            {
                                console.clear()
                                demostrar_menu()
                                opcion = confirm("¿Desea pedir algo mas?")
                            }
                            else
                            {
                                if (opcion_elegida !== "")
                                {
                                    console.clear()
                                    console.error("El plato elegido no se encuentra en el menu.")
                                    opcion = confirm("¿Desea pedir algo mas?")
                                }
                                else
                                {
                                    console.clear()
                                    console.error("Ningun plato fue ingresado.")
                                    opcion = confirm("¿Desea pedir algo mas?")
                                }
                            }
                        }
                        else
                        {
                            cancelar_compra = confirm("¿Esta seguro de cancelar la compra?")
                            if (cancelar_compra === true)
                            {
                                bandera = 1
                                console.clear()
                                break
                            }
                            else
                            {
                                opcion = confirm("¿Desea pedir algo mas?")
                            }
                        }
                    }
                    break
                }
                else
                {
                    if (opcion_elegida !== "")
                    {
                        console.clear()
                        console.error("El plato elegido no se encuentra en el menu.")
                        mostrar_menu()
                        opcion_elegida = prompt(`¿Que le gustaria comer a ${nombre}?`)
                        if (opcion_elegida !== null)
                        {
                            validar_menu = menu.some(plato => plato.Producto.toLocaleLowerCase() === 
                            opcion_elegida.toLocaleLowerCase())
                        }
                        else
                        {
                            let cancelar_compra = confirm("¿Esta seguro de cancelar la compra?")
                            if (cancelar_compra === true)
                            {
                                bandera = 1
                                console.clear()
                                break
                            }
                            else
                            {
                                opcion_elegida = prompt(`¿Que le gustaria comer a ${nombre}?`)
                                if (opcion_elegida !== null)
                                {
                                    validar_menu = menu.some(plato => plato.Producto.toLocaleLowerCase() === 
                                    opcion_elegida.toLocaleLowerCase())
                                }
                            }
                        }
                    }
                    else
                    {
                        console.clear()
                        console.error("Ningun plato fue ingresado.")
                        mostrar_menu()
                        opcion_elegida = prompt(`¿Que le gustaria comer a ${nombre}?`)
                        if (opcion_elegida !== null)
                        {
                            validar_menu = menu.some(plato => plato.Producto.toLocaleLowerCase() === 
                            opcion_elegida.toLocaleLowerCase())
                        }
                        else
                        {
                            let cancelar_compra = confirm("¿Esta seguro de cancelar la compra?")
                            if (cancelar_compra === true)
                            {
                                bandera = 1
                                console.clear()
                                break
                            }
                            else
                            {
                                opcion_elegida = prompt(`¿Que le gustaria comer a ${nombre}?`)
                                if (opcion_elegida !== null)
                                {
                                    validar_menu = menu.some(plato => plato.Producto.toLocaleLowerCase() === 
                                    opcion_elegida.toLocaleLowerCase())
                                }
                            }
                        }
                    }
                }
            }
            if (bandera === 0)
            {
                console.clear()
                console.log(`Cliente: ${nombre}`)
                console.log ("Pedido realizado:")
                mostrar_pedido()
                console.log(`Su cuenta a pagar es: $${sum.toFixed(2)}`)
                let resultado = validar_vuelto()
                if (resultado !== undefined)
                {
                    console.clear()
                    console.log(`${nombre} pago $${resultado}.`)
                    console.log(`Su vuelto es: $${(resultado-sum).toFixed(2)}`)
                    sum = 0
                    pedido = []
                    inicio = confirm("¿Desea seguir con la caja abierta?")
                }
                else
                {
                    console.clear()
                    sum_total = sum_total - sum
                    sum = 0
                    pedido = []
                    inicio = confirm("¿Desea seguir con la caja abierta?")
                }
            }
            else
            {
                console.clear()
                bandera = 0
                pedido = []
                sum_total = sum_total - sum
                sum = 0
                inicio = confirm("¿Desea seguir con la caja abierta?")
            }
        }
        else
        {
            inicio = confirm("¿Desea seguir con la caja abierta?")
        }
    }
    else
    {
        break
    }  
}
console.clear()
console.log(`La suma total de venta diaria fue: $${sum_total.toFixed(2)}`)
sum_total = 0












