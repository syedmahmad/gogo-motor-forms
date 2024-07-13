'use client';
import { usePathname } from 'next/navigation';
import ThemeCustomization from '@/themes';
import Snackbar from '@/components/@extended/Snackbar';
import Notistack from '@/components/third-party/Notistack';
import { store } from '@/store'
import { Provider as ReduxProvider } from 'react-redux';
import MainLayout from '../MainLayout';
import "../../../styles/globals.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginRoute = pathname === '/login';
  
  return (
    <body>  
    {isLoginRoute ? (
      <ThemeCustomization>{children}</ThemeCustomization>
      ) : (
        <ReduxProvider store={store}>
          <ThemeCustomization>
            <Notistack>
              <MainLayout>
                <Snackbar />
                {children}
              </MainLayout>
            </Notistack>
          </ThemeCustomization>
        </ReduxProvider>
        )
    }
  </body>
  );
}
