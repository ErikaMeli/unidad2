fetch('menu.json')
//Que hace? Esta linea inicia la del archivo menu.json.fetch es una funcion de JavaScript que facilita la realizacion de solicitudes de red, como obtener datos de un archivo o un endpoint de API 
//Como funciona? fetch devuelve una promesa que, cuando se resuelve, te da acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, sino un objeto de respuesta que incluye varios detalles sobre la respuesta misma
.then(response=> response.json()) 
//Que hace? Esta linea toma el objeto de respuesta obtenido del fetch y utiliza el metodo .json) para convertir el cuerpo de la respuesta en un objeto JavaScript (esto asume que el cuerpo de la respuesta esta en formato JSON)
//Como funciona? el metodo .json() tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo en formato JSON. 
then(data=>{
    const menuContainer = document.getElementById
    ('menu-container');
    //Que hace? Aqui se procesan los datos JSON ya convertidos. Se obtiene una referencia al contenedos del menu en el HTML mediante getElementByid('menu-container'), y luego se itera sobre los elementos (categorias) del menu/.
    data.items.forEach(category=> {
        const categoryTitle= document.createElement('h2');
        //Que hace? Aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido de texto, y luego se añade este titulo al contenedor del menu/
        categoryTitle.textContent=category.category;
        menuContainer.appendChild(categoryTitle);
        const table = document.createElement 
        ('table')
        //Que hace? se crea un elemento table para cada categoria. Ademas se crea el encabezado (tableHead) con las columnas pertinentes. table body se inicializa vacio y se llenara con los elementos de la categoria 
        const tableHead = '<tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>';
        let TableBody ='';
        //Como funciona? Para cada categoria en los datos, se realizan varios pasos: Crear un titulo para la categoria (se crea un elemento <h2> para el titulo de la categoria, se establece su contenido de texto al nombre de la categoria (category.category), luego se agrega al contenedor del menu).
        //Crear una tabla para los   

    
    })

}
)