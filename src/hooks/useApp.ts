import { useSelector } from "react-redux"
import { selectCollections, selectEco } from "src/store/app"

const useApp = () => {
    const collections = useSelector(selectCollections)
    const isEco = useSelector(selectEco)

    return { collections, isEco }
}

export default useApp
