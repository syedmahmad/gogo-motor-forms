'use client';
import { usePathname } from 'next/navigation';
import ThemeCustomization from '@/src/themes';
import Snackbar from '@/src/components/@extended/Snackbar';
import Notistack from '@/src/components/third-party/Notistack';
import Locales from '@/src/components/Locales';
import { store } from '@/src/store'
import { Provider as ReduxProvider } from 'react-redux';
import MainLayout from '../MainLayout';
import "@/styles/globals.css";

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
