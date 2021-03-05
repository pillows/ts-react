import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LoginImage from "../../assets/images/login.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreI } from "../../redux/reducers";
import { useHistory, useLocation } from "react-router-dom";
import { authenticate, validateError } from "../../redux/actions/authenticate";
import TextField from "@material-ui/core/TextField";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },  
  media: {
    height: 140,
  },
});

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setError = (message: string) => {
    dispatch(validateError(message));
  };

  const submitForm = () => {
    if (email === "" || password === "") {
      return setError("Fields are required");
    }
    dispatch(authenticate(email));
  };

  const { isLoggedIn, loadingLogIn, error } = useSelector(
    (state: RootStoreI) => state.auth
  );

  useEffect(() => {
    if (isLoggedIn) {
      // let from = '';
      // if(location.state && location.state.from) {
      //   from = location.state.from
      // }
      let { from }: any = location.state || {
        from: "/dashboard",
      };
      history.replace(from);
    }
  }, [isLoggedIn]);

  return (
    <div className="login-container">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={LoginImage}
            title="Login welcome"
          />
          <CardContent>
            <form>
              <Typography variant="h5" style={{ marginBottom: 8 }}>
                Login
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                style={{ marginBottom: 10 }}
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                style={{ marginBottom: 10 }}
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                disabled={loadingLogIn}
                fullWidth
                className="form-input"
                size="large"
                onClick={submitForm}
              >
                {loadingLogIn ? "Logging in..." : "Login"}
              </Button>

              {error && error.message && (
                <MuiAlert
                  elevation={6}
                  variant="filled"
                  severity="error"
                  onClick={() => setError("")}
                >
                  {error.message}
                </MuiAlert>
              )}
            </form>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Login;
