import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'Design your low and high fidelity prototype of your idea into bussiness, Convert your design into code',
    heading: 'Low/High fidelity Prototype',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      'Get your wireframes for backend developers. who are able to understand your apps layout flow',
    heading: 'Prototype Wireframe',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'UI layout design a best front end developer who can make your layout animated and eye-catching look',
    heading: 'Front End Development',
    path: '#',
  },
  {
    image: serviceImage4,
    text:
      'I will advertise your services and also rank your app or handover your social media account to my management team.',
    heading: 'Marketing & advertising',
    path: '#',
  },
  {
    image: serviceImage5,
    text:
      'You need website for your bussiness? I will offer you a wix, wordpress for your business.',
    heading: 'Ultimate development',
    path: '#',
  },
  {
    image: serviceImage6,
    text:
      '6 months of support services, if you will come form my account ',
    heading: 'Online support',
    path: '#',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="What is the perfect services for your bussiness"
          text="Starting from Androd/iOS App's to website & dashboard design"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
