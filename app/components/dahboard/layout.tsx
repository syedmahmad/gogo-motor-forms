'use client';
import { usePathname } from 'next/navigation';
import "@/styles/globals.css";
import { Drawer, Box, Toolbar, Container } from "@mui/material";
import Footer from '@/app/components/footer';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginRoute = pathname === '/login';

  const isHorizontal = true;
  const container = true;
  
  return (
    <body>
            {isLoginRoute ? (
              <main>{children}</main>
              ) : (
                <Box sx={{ display: 'flex', width: '100%' }}>
                {/* <Header /> */}
                {/* {!isHorizontal ? <Drawer /> : <HorizontalBar />} */}
                <Drawer />
                <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                  <Toolbar sx={{ mt: isHorizontal ? 8 : 'inherit' }} />
                  <Container
                    maxWidth={container ? 'xl' : false}
                    sx={{
                      ...(container && { px: { xs: 0, sm: 2 } }),
                      position: 'relative',
                      minHeight: 'calc(100vh - 110px)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {children}
                    <Footer />
                  </Container>
                </Box>
              </Box>)
            }
          </body>
  );
}
