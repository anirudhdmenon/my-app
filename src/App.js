import './App.css';
import ButtonAppBar from './components/navbar';
import Grid from './components/grid';
import Footer from './components/footer';
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

function App() {
  const mystyle = {
    marginTop:"20px",
    padding: "10px",
    textAlign:"center"
  };
  return (
    <div className="App">
      <ButtonAppBar/>
      <div style={{marginTop: "100px"}}>
        <ThemeProvider theme={theme}>
          <Typography variant="h2">Lorem Ipsum</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus velit nisl, 
            eu porttitor sem dictum mattis. Donec dapibus faucibus placerat. Ut feugiat nunc ac egestas posuere. <br/>
            Ut dignissim, quam porta pulvinar commodo, enim leo placerat sem, nec ultricies quam purus ut erat. 
            Ut commodo semper eros id mattis. Morbi varius vulputate nisi. <br/>Pellentesque eget purus a elit volutpat 
            feugiat ut sit amet nibh.</Typography>
        </ThemeProvider>
      </div>
      <div style={mystyle}>
        <Grid/>
      </div>
      
      <Footer/>
    </div>
    
  );
}
export default App;
