import { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            position: 'absolute',
            width: 500,
            textAlign: 'center',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            borderRadius: '10px',
        },
        input: {
            width: '100%',
            marginBottom: '10px',
        },
        button: {
            margin: '0px 20px',
        },
    })
)

interface props {
    open: boolean
    handleClose: () => void
}

const AddOrEditForm = (props: props) => {
    const classes = useStyles()
    const [modalStyle] = useState(getModalStyle);
    const { open, handleClose } = props
    const body = (
        <Grid container style={modalStyle} className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid item md={12}>
                    <TextField id="userName" label="用户名" className={classes.input} />
                </Grid>
                <Grid item md={12}>
                    <TextField id="pwd" label="密码" className={classes.input} />
                </Grid>
                <Grid item md={12}>
                    <TextField id="email" label="邮箱" className={classes.input} />
                </Grid>
                <Grid item md={12}>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        className={classes.button}>
                        取消
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}>
                        创建
                    </Button>
                </Grid>
            </form>
        </Grid>
    );

    function getModalStyle() {
        const top = 50;
        const left = 50;
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    return (
        <Modal
            disableEnforceFocus
            open={open}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    )
}

export default AddOrEditForm