import { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useForm } from "react-hook-form";

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
    data: any
}

const AddOrEditForm = (props: props) => {
    const classes = useStyles()
    const { register, handleSubmit, setValue } = useForm()
    const [modalStyle] = useState(getModalStyle);
    const { open, handleClose, data } = props

    useEffect(() => {
        if (data) {
            setValue('userName', data.username, {
                shouldValidate: true,
                shouldDirty: true,
            })
            setValue('email', data.email, {
                shouldValidate: true,
                shouldDirty: true,
            })
        }
    }, [open])

    const body = (
        <Grid container style={modalStyle} className={classes.paper}>
            <form className={classes.root}
                noValidate autoComplete="off"
                onSubmit={handleSubmit(
                    value => {
                        console.info(value);
                    }
                )}>
                <Grid item md={12}>
                    <TextField
                        required
                        {...register('userName')}
                        name="userName"
                        label="用户名"
                        className={classes.input}
                    />
                </Grid>
                <Grid item md={12}>
                    <TextField
                        required
                        {...register('email')}
                        label="邮箱"
                        className={classes.input}
                    />
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
                        type='submit'
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