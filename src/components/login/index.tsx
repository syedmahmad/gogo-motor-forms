'use client';

import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";
import logo from "@/assets/images/gogo-motors.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import { useDispatch } from "react-redux";
// import { userLogin } from "./dependencies/AuthSlice";

const Login = () => {
  const [formData, setFormData] = useState({ mobileNo: "", otp: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const theme = useTheme();
  const { push } = useRouter();
  // const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobileNo" || name === "otp") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => {
      const newErrors = { ...prev };
      if (value.trim()) {
        // delete newErrors[name];
      }
      return newErrors;
    });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const validateForm = () => {
    const newErrors = {};

    // if (!formData.mobileNo?.trim()) {
    //   newErrors.mobileNo = "Mobile Number is required";
    // } else if (formData.mobileNo.length < 10) {
    //   newErrors.mobileNo = "Mobile Number should not less then 10";
    // } else if (formData.mobileNo.length > 10) {
    //   newErrors.mobileNo = "Mobile Number should not greater then 10";
    // }
    // if (!formData.otp?.trim()) {
    //   newErrors.otp = "OTP is required";
    // } else if (formData.otp.length > 6) {
    //   newErrors.otp = "Otp should not greater then 6";
    // }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
    //   dispatch(userLogin(formData)).then((res: any) => {
    //     const { payload: {Token} } = res
    //     if (Token) {
    //       localStorage.setItem('token', Token);
    //       localStorage.setItem('user', JSON.stringify(res.payload));
    //       push('/dashboard').then(() => {
    //         window.location.reload();
    //       });
    //     }

    //   })
    } catch (err: any) {
      setErrors({ mobileNo: err.message, otp: err.message });
    }
  };
  const handleClick = () => {
    if (!formData.mobileNo) {
      toast.error("Please enter mobile no ");
    } else {
      toast.success("OTP sent successfully");
    }
  };

  return (
    <>
    <Grid item xs={12} sm={12} md={5} lg={5}>
            <Box className={styles.spacingleft_content} >
              <Image
                src={logo}
                alt="logo"
                className="d-flex justifycontentstart mb-20"
              />
              <form onSubmit={handleSubmit} className="formmain_auth">
                <div className={styles.content_middle_main}>
                  <h2 className="mb-0">Sign In</h2>
                  <p className="w-50">
                    Please enter your mobile no. to login<br></br> your account.
                  </p>
                </div>

                <div className="w-100 mb-10">
                  <TextField
                    className="w-100 bg-white"
                    label="Phone Number"
                    variant="outlined"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+971</InputAdornment>

                      ),

                      inputProps: {
                        pattern: "[0-9]*",
                        maxLength: 10,
                      },


                    }}
                  />
                  {/* {errors.mobileNo && (
                    <span className={styles.errorlogin}>{errors.mobileNo}</span>
                  )} */}
                </div>
                <span
                  className={styles.send_otpbtn_login}
                  onClick={handleClick}
                //   sx={{ mt: 3 }}
                //   variant="contained"
                >
                  Send OTP{" "}
                </span>

                <div className="w-100 password_inputbox mt-20">
                  <FormControl className="w-100 bg-white" variant="outlined">
                    <InputLabel htmlFor="otp">OTP</InputLabel>
                    <OutlinedInput
                      id="otp"
                      type={showPassword ? "text" : "password"}
                      value={formData.otp}
                      name="otp"
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="OTP"
                      inputProps={{ maxLength: 6 }}
                    />
                  </FormControl>
                  {/* {errors.otp && <span className={styles.errorlogin}>{errors.otp}</span>} */}
                </div>

                <Button
                  className="w-100 mx-auto btn_theme d-flex mt-20"
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, bgcolor: theme.palette.primary.main }}
                >
                  Sign In
                </Button>
                <div className={styles.authforgot_register_auth}>
                  <Link href="/register">
                    <span>Don’t have an account?</span> Sign Up
                  </Link>
                </div>
              </form>
            </Box>

          </Grid>
    </>
  );
};

export default Login;
