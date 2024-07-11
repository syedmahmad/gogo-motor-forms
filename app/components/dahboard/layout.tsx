'use client';
import { usePathname } from 'next/navigation';
import ThemeCustomization from '../../themes';
import Snackbar from '@/app/components/@extended/Snackbar';
import Notistack from '@/app/components/third-party/Notistack';
import Locales from '@/app/components/Locales';
import "@/styles/globals.css";
import { store } from '@/app/store'
import { Provider as ReduxProvider } from 'react-redux';
import MainLayout from '../MainLayout';

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
                <ReduxProvider store={store}>
                <ThemeCustomization>
                  <Locales>
                  <Notistack>
                    <MainLayout>
                      <Snackbar />
                      {children}
                    </MainLayout>
                  </Notistack>
                  </Locales>
                </ThemeCustomization>
                </ReduxProvider>
                )
            }
          </body>
  );
}
