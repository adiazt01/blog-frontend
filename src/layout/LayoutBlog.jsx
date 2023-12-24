import { Navbar } from "../components/navbar/Navbar"

export const LayoutBlog = ({children}) => {
    return (
        <>
            <Navbar />
            <div className="container my-8 m-auto">
                {children}
            </div>
        </>
    )
}