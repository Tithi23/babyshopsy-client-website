import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import hand from '../../../images/hand.jpg';
import lotion from '../../../images/lotion.jpg';
import powder from '../../../images/powder.jpg';
import oil from '../../../images/baby-oil.webp';
import shampo from '../../../images/shampo.png';
import waves from '../../../images/waves.jpg';
import Product from '../Product/Product';




const products = [
    {
        name: 'Baby Hand Sanitizer',
        description: 'In most healthcare settings, alcohol-based hand sanitizers are preferable to hand washing with soap and water,because it may be better tolerated and  effective at reducing bacteria. Hand washing with soap and water, however, should be carried out if contamination.The general  hand sanitizers is not recommended.',
        img: hand,
        price: 200
    },
    {

        name: 'Baby Lotion',
        description: 'Eucerin claims that this formula is nongreasy and absorbs quickly. It may help restore moisture and protect  experience that is relaxing for both you  the skin after baths.This baby body is more important lotion formula is nongreasy and absorbs quickly. I is hypoallergenic and free from fragrance, drying alcohols, and dyes',
        img: lotion,
        price: 300
    },
    {
        name: 'Baby Oli',
        description: 'Connect with your baby through touch! Use baby oil during a baby massage for a bonding experience that is relaxing for both you and your little one.Baby oil locks in up to 10 times more moisture more important oil formula is nongreasy and absorbs on wet skin than an ordinary oil can on dry skin,leaving you and your baby’s skin soft and smooth.',
        img: oil,
        price: 150
    },
    {
        name: 'Baby Shampo',
        description: 'Baby shampoo is a hair care product that is used for the removal of oils, dirt, skin particles, dandruff, environmental pollutants and other contaminant particles that gradually build up in hair; specially  children by means of substituting chemicals which are purportedly less irritating to the eyes than those commonly found in regular shampoo..',
        img: shampo,
        price: 320
    },
    {
        name: 'Baby tissue',
        description: 'Baby tissue papers are dispensable papers/fabrics used to clean the sensitive skin of newborn babies. These materials are produced by using non-woven materials such as those utilized as a part of dryer sheets. They are either dry or wet filled with a liquid solution with tender cleaning ingredients.shown that this practice may lead to breathing in of fine .',
        img: waves,
        price: 250
    },
    {
        name: 'Baby powder',
        description: 'Baby powder is made from the mineral talc or corn starch. There are no medically necessary uses for baby powder, but some parents use it on their infants and toddlers to keep diapered skin dry and rash-free. Research has may lead to breathing in of fine powder particles, which make their way into the lungs and can lead to respiratory problems.',
        img: powder,
        price: 100
    }
]


const Products = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR PRODUCTS
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    PLEASE SEE OUR BEST PRODUCT
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product.name}
                            product={product}
                        ></Product>)
                    }

                </Grid>

            </Container>
        </Box>
    );
};

export default Products;