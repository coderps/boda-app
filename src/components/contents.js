import { Grid } from '@mui/material';
import Form from './form/form';
import CustomizedAccordions from './faqs/accordian';
import BasicCard from './general/card';
import Header from './header/header';
import "./static/style.css";
import location from './static/location.svg';
import date from './static/date.svg';
import couple from './static/couple.svg';
import elephant from './static/elephant.png';

const Contents = () => {
    const loc_link = "https://g.page/royalheritagehaveli?share";
    const loc_details = <>
        Royal Heritage Haveli Jaipur<br/>
        Plot No. 116 & 117<br/>
        Near Khatipura Tiraya<br/>
        Khatipura, Jaipur, Rajasthan 302012 <br/>
        [<a href={loc_link} target="_blank" rel="noreferrer">Google Map Link</a>]
    </>

    const date_time = <>
        3 de abril, 2023<br/>
        (pronto anunciaremos la hora de inicio)
    </>

    const third_thing = <>
        ¿Tienes dudas, preguntas, miedos, incertidumbres...? Envíanos tu pregunta por aquí: <a href = "mailto: iraxboda@gmail.com">iraxboda@gmail.com</a> 
    </>

    const cards = <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 3, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
            <BasicCard content={date_time} src={date} alt="This is the date and time" />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
            <BasicCard content={loc_details} src={location} alt="This is the venue" />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
            <BasicCard content={third_thing} src={couple} alt="Some other text" />
        </Grid>
    </Grid>

    const FAQs = <div className='faqs'>
        <h1>Preguntas frecuentes</h1>
        <div className='accordian'>
            <CustomizedAccordions />
        </div>
    </div>

    const googleForm = <div className='google-form'><h1>¿Vas a venir?</h1><br/><Form /></div>
    const footer = <footer>
        <h1>¡Nosotros esperamos verte!</h1>
        <img src={elephant} alt="elephant" />
    </footer>

    return <>
        <Header />
        <br /><br />
        {cards}
        <br /><br />
        {FAQs}
        <br /><br />
        {googleForm}
        <br /><br />
        {footer}
    </>
}

export default Contents;