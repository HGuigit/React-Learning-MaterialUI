import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import MachineCard from "./MachinesCard"

const info = [
    {
      title: 'Cafeteira Expresso Automática' ,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71ojekeJ-cL._AC_SL1500_.jpg',
      preco: 'R$4.024,33',
      descricao: "Uma cafeteira de luxo para o melhor café!"
    },
    {
      title: 'Máquina De Café Espresso Coffee Cream' ,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81EONcBZkyL._AC_SL1500_.jpg',
      preco: 'R$399,99',
      descricao: "Cafeteira simples e padrão para um cafézinho quente."
    },
    {
      title: 'Cafeteira Expresso Prima Latte II, Vermelho, 110v, Oster' ,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61XxOI6uACL._AC_SL1000_.jpg',
      preco: 'R$1.092,87',
      descricao: "Cafeteira de rico, sonho de consumo!"
    },
    {
      title: 'Cafeteira Expresso Automática' ,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71ojekeJ-cL._AC_SL1500_.jpg',
      preco: 'R$4.024,33',
      descricao: "Uma cafeteira de luxo para o melhor café! "
    },
    {
      title: 'Cafeteira Expresso Prima Latte II, Vermelho, 110v, Oster' ,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61XxOI6uACL._AC_SL1000_.jpg',
      preco: 'R$1.092,87',
      descricao: "Cafeteira simples e padrão para um cafézinho quente."
    },
    {
      title: 'Máquina De Café Espresso Coffee Cream' ,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81EONcBZkyL._AC_SL1500_.jpg',
      preco: 'R$399,99',
      descricao: "Cafeteira de rico, sonho de consumo!"
    },

]

const Content = () => {

const Cards = info.map((info, index) => {
    return(
        <Grid key={index} item xs={12} sm={6} md={4} >
            <MachineCard title={info.title} preco={info.preco} imgUrl={info.imgUrl} descricao={info.descricao}/>
        </Grid>
    );
})
console.log(Cards)

return(
    <Grid container spacing={3} style={{paddingTop: 10}}>
        
            {Cards}
        
    </Grid>
    


);


}


export default Content

