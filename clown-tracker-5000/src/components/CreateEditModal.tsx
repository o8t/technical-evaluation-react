import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { ClownFormDataType } from "../types";
import { v4 as uuid } from "uuid";

interface Props {
  existingClown: ClownFormDataType,
  submitAction: (result: ClownFormDataType) => void;
  open: boolean,
  setOpen: (open: boolean) => void,
  promptTitle: string,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      textAlign: 'center',
    },
    inputs: {
      margin: 'auto',
      textAlign: 'center',
    },
    dialogButtons: {
      justifyContent: 'center',
      margin: 'auto',
    },
    uploader: {
      margin: 'auto',
      marginTop: '10%',
    }
  }),
);

// CreateEditModal acts as primary means to register and edit clowns
const CreateEditModal: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { existingClown, submitAction, open, setOpen, promptTitle } = props;

  const [clownInfo, setClownInfo] = useState<ClownFormDataType>(existingClown);

  // Parse form and call submission action with results
  const handleSubmit = async (form: any) => {
    let formResults = {
      'id': clownInfo.id ? clownInfo.id : uuid(),
      'name': (form.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
      'posse': (form.currentTarget.elements.namedItem('posse') as HTMLInputElement).value,
      'age': parseInt((form.currentTarget.elements.namedItem('age') as HTMLInputElement).value),
      'image': '',
    }

    // Read uploaded file as base64 and append to results
    const fileReader = new FileReader();
    const file = form.currentTarget.elements.namedItem('image').files[0];
    let imageBase64 = '';
    if (file !== undefined) {
      fileReader.readAsDataURL(file);
      imageBase64 = await new Promise((resolve, reject) => {
          fileReader.onloadend = () => {
            resolve('' + fileReader.result);
          }
          fileReader.onerror = (e) => {
            reject('An error occurred while reading image: ' + e)
          };
      });
    } else if(clownInfo.image) { // if no new image was uploaded, reuse old one
      imageBase64 = clownInfo.image;
    }
    formResults.image = imageBase64

    // call passed func with form results & close form
    submitAction(formResults);
    setOpen(false);
  }

  const onChange = async (change: any) => {
    setClownInfo({
      ...clownInfo,
      [change.currentTarget.name]: change.currentTarget.value
    });
  }

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <form className={classes.root} autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <DialogTitle id="responsive-dialog-title">
          {promptTitle}
        </DialogTitle>

        <DialogContent className={classes.inputs} dividers>
          <TextField onChange={onChange} value={clownInfo.name} name="name" label="Name" variant="filled" />
          <TextField onChange={onChange} value={clownInfo.posse} name="posse" label="Posse" variant="filled" />
          <TextField onChange={onChange} value={clownInfo.age} name="age" label="Age" variant="filled" />
          <Button
            variant="contained"
            component="label"
            className={classes.uploader}
          >
            Upload Image
            <input name="image" type="file" hidden />
          </Button>
        </DialogContent>

        <DialogActions className={classes.dialogButtons}>
          <Button autoFocus onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button
            type="submit"
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default CreateEditModal;
