// import Button from "../../UI/Button";
// import Field from "../../UI/Field";
import { Button, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMore } from '@mui/icons-material';


function App() {
  return (
    <div>
      {/* <Button onClick={() => console.log("Thank you!")} style={{
        color: "#fdcb6e"
      }}>Clich here</Button>
      <Field direction="column" label="Имя" name="name"/> */}

      <Button variant="contained" color="primary" sx={{
        p: 5
      }}>
        Click
      </Button>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-label="Expand"
            aria-controls="-content"
            id="-header"
          >
            <Typography>Велосипед</Typography>
          </AccordionSummary>
          <AccordionDetails>Велосипед полезен для здоровья</AccordionDetails>
        </Accordion>
        <Typography variant="p" color="initial">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nostrum dolores, sed illum earum est quos illo repudiandae vel, enim consequuntur.
        </Typography>
      </div>
    </div>
  );
}

export default App;
