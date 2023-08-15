import {useParams, useSearchParams} from 'react-router-dom'
const Post = () => {
    let {cat, id} = useParams()
    let [searchPara, setSearchParams] = useSearchParams()
    return (
        <>
            <h1>Post Page {cat} | Id {id} | Para {searchPara.get('cast')}, {searchPara.get('rel')}</h1>
        </>
    )
}
export default Post