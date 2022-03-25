import '../tailwind.css'
import type {AppProps} from 'next/app'
import BaseLayout from "../layouts/base";
import Preloader from '../components/preloader';


export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return (
        <BaseLayout>
            <Preloader>
                <Component {...pageProps} />
            </Preloader>
        </BaseLayout>
    )
}
