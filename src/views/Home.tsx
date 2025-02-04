import BaseHtml from "./BaseHtml"
import * as elements from "typed-html";


interface Home {
    html: Function,
    query?: any,
    store: NavStoreType
}

const Home = ({ html, query, store }: Home) => {

    return html(
        <BaseHtml>
                <h1> Hello World </h1>
        </BaseHtml>
    )
}

export default Home