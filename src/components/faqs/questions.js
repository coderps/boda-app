import { Grid } from "@mui/material"
import saree from "../static/saree.png";

const links = {
    registration: "https://indianvisaonline.gov.in/evisa/Registration",
    example1: "https://www.google.com/flights?tfs=CBsQAnp0Q2pSSWVVWTRRMFoyUm1wQ2RsVkJWVmRpVlhkQ1J5MHRMUzB0TFMwdExYZHpiV1V4T0VGQlFVRkJSMDVXVmxZNFRHY3hTMEZCRWdwQldqYzNmRUZhTnpjd0dnc0k5dWtCRUFJYUEwVlZVamdjY016bUFRPT0aRGoMCAMSCC9tLzAxZjYyagwIAhIIL20vMGgzdHZqDAgCEggvbS8wNTZfeRIKMjAyMy0wMy0yNXIMCAISCC9tLzBkbHYwcAFAAUgBmAECUgNFVVKyARIYASABKgwIAhIIL20vMGRsdjA&hl=es&curr=EUR&sa=X&ved=0CAIQtY0DKABqGAoTCMjU4v7M9voCFQAAAAAdAAAAABCmAg",
    example2: "https://www.google.com/travel/flights/booking?tfs=CBwQAhqqAWoMCAMSCC9tLzAxZjYyagwIAhIIL20vMGgzdHZqDAgCEggvbS8wNTZfeRIKMjAyMy0wMy0zMXINCAMSCS9tLzAxNjcyMiIgCgNWTEMSCjIwMjMtMDMtMzEaA0FNUyoCSFYyBDYzMzYiHwoDQU1TEgoyMDIzLTAzLTMxGgNERUwqAktMMgM4NzEiIAoDREVMEgoyMDIzLTA0LTAxGgNKQUkqAjZFMgQ3NDAzcAGCAQsI____________AUABSAGYAQI&tfu=CoABQ2pSSWRFSlhSV1ZrVVZNMWJFMUJhMUZwVVdkQ1J5MHRMUzB0TFMwdGQzTmpZMjR5TlVGQlFVRkJSMDVXVjBkWlFteFliMEZCRWhOSVZqWXpNelo4UzB3NE56RjhOa1UzTkRBekdnc0lqYkFERUFJYUEwVlZVamdjY1B1cEF3PT0SAggB&hl=es&curr=EUR",
    example3: "https://www.google.com/travel/flights/search?tfs=CBwQAhpHagwIAxIIL20vMDFmNjJqDAgCEggvbS8waDN0dmoMCAISCC9tLzA1Nl95EgoyMDIzLTAzLTMxcg0IAhIJL20vMDFmMDhyKABwAYIBCwj___________8BQAFIAZgBAg&hl=es&curr=EUR",
    example4: "https://www.google.com/travel/flights/search?tfs=CBwQAhopagwIAhIIL20vMDU2X3kSCjIwMjItMTItMzFyDQgCEgkvbS8wMWYwOHJwAYIBCwj___________8BQAFIAZgBAg",
    example5: "https://www.google.com/travel/flights/search?tfs=CBwQAhosag0IAxIJL20vMDFmMDhyEgoyMDIzLTA0LTAxcg0IAxIJL20vMDE2NzIyKABwAYIBCwj___________8BQAFIAZgBAg",
    phere1: "https://i.pinimg.com/564x/3a/d9/5e/3ad95e5d29d2714e949511d87614a811.jpg",
    phere2: "https://cdn0.weddingwire.com/article-gallery-o/00000/original/1280/jpg/ww/8erganic-design-brett-matthews.webp",
    phere3: "https://i.pinimg.com/564x/5d/4e/5d/5d4e5d31a3758c9d615f1041c4607457.jpg",
    lehenga1: "https://images.cbazaar.com/images/prd_img_b/Orange-Organza-Floral-Digital-Print-Umbrella-Lehenga-GHSAK42157612-b.jpg",
    lehenga2: "https://cdn.shopify.com/s/files/1/2617/0726/products/royal-blue-lehenga-set-with-mirror-work-blouse-and-peach-pink-ombre-dupatta-lehenga-priti-sahni-881118.jpg?v=1616674996",
    saree1: "https://m.media-amazon.com/images/I/61T+jGLoVlL._UL1200_.jpg",
    saree2: saree,
    sherwani1: "https://www.girlyfab.com/media/catalog/product/cache/c193bdaaac026bc8ce0c244e756446d5/g/r/graceful-beige-wedding-sherwani-suit-for-mens-gf800408.jpg",
    sherwani2: "https://static01.manyavar.com/uploads/dealimages/14065/listimages/ODES941V-307_01.JPG",
    salwar_kameez: "https://m.media-amazon.com/images/I/618GGhMRznL._AC_UY550_.jpg",
    kurta_pijama: "https://i.etsystatic.com/17634941/r/il/845ac3/3821546397/il_570xN.3821546397_qim1.jpg"
}

export const questions = [{
      title: "¿Cómo llegar?",
      qs: [{
        q: "Paso 1 – Necesitas VISA",
        a: <>La visa de turista se puede pedir online aquí [<a href={links.registration} target="_blank" rel="noreferrer">link</a>] (hay un boton en la parte de abajo que dice <i>"Apply here for e-visa"</i>) o en la embajada de la india. El proceso online es súper sencillo y las dan muy rápido.<br/><br/><br/></>
        }, {
        q: "Paso 2 – Compra los vuelos",
        a: <div>
                <u>Opción a</u>: lo más barato y más ameno es coger un vuelo a Delhi, la capital de India. Está muy cerca de Jaipur y los vuelos de Delhi a Jaipur son baratos. Mi recomendación es que vayáis a Delhi unos días antes de la boda, descanséis del viaje, visitéis la ciudad (e incluso podéis comprar allí los trajes indios si queréis) y luego pilláis el vuelo a Jaipur.
                Ejemplo de vuelos durante la última semana de marzo, <b><u>sólo ida</u></b>:               [<a href={links.example1} target="_blank" rel="noreferrer">link</a>]<br/>

                <pre>
                    Barcelona → Delhi   9h50m   300€    1 escala<br/>
                    Madrid    → Delhi   14h25m  301€    1 escala
                </pre><br/>

                <u>Opción b</u>: si queréis hacer viaje directo desde España a Jaipur (o desde Alemania para los que vivís allí) vais a tener que coger varias escalas y probablemente tardéis entre 20-30h en llegar dependiendo de dónde viváis.	
                Los de Valencia tenéis más suerte: 
                
                <pre>
                    <u>Viernes 31 marzo</u> Valencia → Jaipur    18h 45m  554€    2 escalas [<a href={links.example2} target="_blank" rel="noreferrer">link</a>]
                </pre>
                
                Un truco puede ser pillar las escalas por separado, por ejemplo cogiendo un avión a Dubai (los hay directos desde Barcelona y Madrid), pasar la noche allí y coger otro vuelo directo de Dubai a Jaipur. Así nos quedaría una sola escala. El único inconveniente es que es más caro:

                <pre>
                    <u>Viernes 31</u>  Barcelona → Dubai   6h45m   511€    directo [<a href={links.example3} target="_blank" rel="noreferrer">link</a>]<br />
                    <u>Viernes 31</u>  Madrid    → Dubai   7h05m   511€    directo [<a href={links.example4} target="_blank" rel="noreferrer">link</a>]<br />
                    <u>Sábado 1</u>    Dubai     → Jaipur 	3h10m   266€    directo [<a href={links.example5} target="_blank" rel="noreferrer">link</a>]
                </pre><br/>
            </div>
        }, {
            q: "Paso 3 – Reservar hotel",
            a: <i>Próximamente…<br/><br/></i>,
        }, {
            q: "Paso 4 – Cómo llegar a la boda",
            a: <i>Próximamente…</i>,
        }], 
    }, {
        title: "¿Cuántos días es la boda?",
        qs: [{
            q: "",
            a: "Sólo 1: el 3 de abril."
        }]
    }, {
        title: "¿En qué consiste la celebración? / ¿Qué esperar?",
        qs: [{
            q: "",
            a: <>
                <u>Recepción</u>: comenzaremos el día con bebidas y entrantes.<br/><br/>
                <u>El ritual</u>: el evento principal es el <i>Saat Phere (=siete vueltas)</i>. Los novios se sientan bajo el mandap mientras el “cura” recita los mantras védicos (en sánscrito) hasta que los novios dan 7 vueltas alrededor del fuego (cada vuelta es una <i>phera</i>). <br/>(No se puede beber alcohol antes o durante el Phere).<br/><br/>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 3, md: 12 }}>
                    <Grid item><div className='phere-fotos'><div><img alt="phere1" src={links.phere1} /></div></div></Grid>
                    <Grid item><div className='phere-fotos'><div><img alt="phere2" src={links.phere2} /></div></div></Grid>
                    <Grid item><div className='phere-fotos'><div><img alt="phere3" src={links.phere3} /></div></div></Grid>
                </Grid><br/>
                <u>Banquete y fiesta</u>:<br/>
                El banquete será un continuo bufé libre, desde que termina el phere hasta el final del día. No habrá asientos asignados ni camareros trayendo la comida, la gente suele comer de pie y llevarse el plato a todas partes (tranquilos que también hay mesas).<br/><br/>
                El menú será vegetariano por motivos religiosos. Habrá comida india (picante) y opciones continentales/mediterránea. El alcohol está permitido.<br/><br/>
                Habrá música para bailar y mehendi (henna para haceros tatus!). Normalmente el mehendi se hace el día anterior pero no queríamos perdérnoslo 😄 <br /><br/>
                La música acabará a las 22:30h.
            </>
        }]
    }, {
        title: "¿Tengo que llevar ropa hindú? ¿Qué me pongo?",
        qs: [{
            q: "", 
            a: <>No es necesario llevar ropa india, primero porque es una boda donde estamos mezclando dos culturas, y segundo porque en la propia india mucha gente elige llevar ropa occidental. Siéntete libre de vestirte como quieras.<br/><br/></>
        }, {
            q: "Dónde comprar",
            a: <>Si estás súper motivado/a y quieres vivir la tradición, puedes comprar la ropa en una tienda hindú (en caso de que vivas en una ciudad grande) o puedes hacerlo online. Si vais a una tienda y os preguntan para qué evento queréis el traje, decir que es sólo para el Phere (el resto de eventos no los vamos a hacer).<br/><br/></>
        }, {
            q: "Qué comprar",
            a: <>
                El traje tradicional es el saree o lehenga-choli para mujeres, y el sherwani para hombres. Otra opción es el salwar cameez para mujeres y el kurta pijama para hombres (en realidad ambos son lo mismo) o un vestido/traje occidental colorido. <br/><br/>
                <u>NO vayas completamente blanco/a</u>: el blanco es un color de luto en la India. <br/>
                <u>Si llevas un saree o lehenga, evita que sea todo rojo</u>. Un poco está bien pero si vas completamente roja quizás te confundan con la novia jaja! <br/><br/>
                Lehenga-choli: <br/>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 3, md: 12 }}>
                    <Grid item><div className='phere-fotos'><div><img alt="phere1" src={links.lehenga1} /></div></div></Grid>
                    <Grid item><div className='phere-fotos'><div><img alt="phere2" src={links.lehenga2} /></div></div></Grid>
                </Grid><br/><br/>
                Saree: <br/>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 3, md: 12 }}>
                    <Grid item><div className='phere-fotos'><div><img alt="phere1" src={links.saree1} /></div></div></Grid>
                    <Grid item><div className='phere-fotos'><div><img alt="phere2" src={links.saree2} /></div></div></Grid>
                </Grid><br/><br/>
                Sherwani: <br/>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 3, md: 12 }}>
                    <Grid item><div className='phere-fotos'><div><img alt="phere1" src={links.sherwani1} /></div></div></Grid>
                    <Grid item><div className='phere-fotos'><div><img alt="phere2" src={links.sherwani2} /></div></div></Grid>
                </Grid><br/><br/>
                Salwar Kameez: <br/>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 3, md: 12 }}>
                    <Grid item><div className='phere-fotos'><div><img alt="phere1" src={links.salwar_kameez} /></div></div></Grid>
                </Grid><br/><br/>
                Kurta Pijama: <br/>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 3, md: 12 }}>
                    <Grid item><div className='phere-fotos'><div><img alt="phere1" src={links.kurta_pijama} /></div></div></Grid>
                </Grid><br/><br/>
                <b>Vocabulario de ropa</b>:<br/><br/>
                Lehenga = falda larga<br/>
                Choli = top<br/>
                Dupatta = chal o velo decorativo, lo llevan tanto hombres como mujeres.<br/>
                Saree = vestido tradicional con una tela que se enrolla en el cuerpo y cuelga del hombro<br/>
                Sherwani = traje de hombre completo<br/>
                Kurta / Kameez = camiseta larga hasta las rodillas (como un vestido)<br/>
                Pijama / Salwar = pantalones bombachos o estrechos que se ponen bajo el Kurta o Kameez
            </>
        }]
    }
]