import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Tooltip, Typography, Container, Grid } from '@mui/material/';

const CardContainer = styled(Grid)`
  margin-top: 30px;
`;

const HoverCardWrapper = styled(Card)`
  transition: background-color 0.3s;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(193, 193, 193);
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    Button {
      display: block;
    }
  }
`;

const HoverButton = styled(Button)`
  display: none;
`;

function Home() {
    return (
        <div>
            <Container>
                <Typography variant="h4" sx={{ marginTop: '12px' }}>
                    Templates
                </Typography>
                <Typography variant='subheding'>Select a Templet to get Strated</Typography>
                <CardContainer container spacing={2}>
                    {[1, 2, 3, 4].map((templateNumber) => (
                        <Grid item key={templateNumber} xs={12} sm={6} md={3}>
                            <Tooltip title={`Template ${templateNumber}`}>
                                <HoverCardWrapper>
                                    <CardContent>
                                        {/* Your card content */}
                                        <HoverButton variant="contained" color="primary">
                                            Use Template
                                        </HoverButton>
                                    </CardContent>
                                </HoverCardWrapper>
                            </Tooltip>
                        </Grid>
                    ))}
                </CardContainer>
            </Container>
        </div>
    );
}

export default Home;
