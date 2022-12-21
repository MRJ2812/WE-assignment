import { useEffect } from "react"

const useTitle = (title) => {

    useEffect(() => {

        document.title = `MR JOY-${title}`

    }, [title])
}

export default useTitle;