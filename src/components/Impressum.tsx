import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'

const Impressum = (): ReactJSXElement => {
  return (
    <Container>
      <Box paddingBottom={2}>
        <Typography fontWeight={'bold'} fontSize={30}>
          Impressum
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Typography fontWeight={'bold'}>Anbieter:</Typography>
        </Grid>
        <Grid item xs={12} md={10} display={'flex'} justifyContent={'center'}>
          <Typography>Benjamin Gutzamnn</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography fontWeight={'bold'}>Kontakt:</Typography>
        </Grid>
        <Grid item xs={12} md={10} display={'flex'} justifyContent={'center'}>
          <Button
            variant="text"
            size={'small'}
            href={'mailto:gutzemann@gmail.com'}
          >
            gutzemann@gmail.com
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Impressum
