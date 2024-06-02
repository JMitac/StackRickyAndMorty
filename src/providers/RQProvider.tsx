import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense, lazy, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = lazy(() =>
    import('@tanstack/react-query-devtools/build/modern/production.js').then(
      (d) => ({
        default: d.ReactQueryDevtools,
      }),
    ),
  )


export const RQPRovider = ({ children }: Props) => {
    const [showDevtools, setShowDevtools] = useState(false)

    useEffect(() => {
        window.toggleDevtools = () => setShowDevtools((old) => !old)
    }, [])
    
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen />
            {showDevtools && (
            <Suspense fallback={null}>
                <ReactQueryDevtoolsProduction />
            </Suspense>
            )}
        </QueryClientProvider>
    );
};
