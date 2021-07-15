import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { BiEditAlt } from "react-icons/bi";
import EditForm from './EditForm'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function EditEvent({currentEvent, refreshEvents}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return(
        <div>
        <BiEditAlt onClick={handleClickOpen} />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <EditForm
          closeDialog={handleClose}
          refreshEvents={refreshEvents}
          currentEvent={currentEvent}
        />
      </Dialog>
        </div>
    )
}