import Login from '@/src/components/login';
import Image from "next/image";
import { Grid, Box } from '@mui/material';
import { Metadata } from 'next';
import styles from "@/src/components/login/style.module.scss";
import sideauth from "@/src/assets/images/side_auth.png";
 
export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {

  return (
    <section className="login-wrapper">
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Login />

          <Grid item xs={12} sm={12} md={7} lg={7}>
            <div className={styles.side_authimg_container}>
              <div className="">
                <Image
                  className={styles.sideauth_img}
                  src={sideauth}
                  alt="Sideimage"
                  objectFit="cover"
                />
              </div>
              <div className={styles.overlay_content_sideauth}>
                <p>
                  Copyright © 2023, National Auto Trust Company, All Rights
                  Reserved, CR No.: 4030436087, VAT No.: 300000603210003,
                  Unified No.: 7026415450
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box className={styles.footer_authmain}>
              <h3>NEED HELP? QCmanagermobileNo@mobileNo.com</h3>
            </Box>
          </Grid>
        </Grid>
      </section>
  );
}

