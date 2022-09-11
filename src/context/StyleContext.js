import { createContext, useState } from "react";

const StyleContext = createContext();

export const StyleProvider = ({children}) => {
    const [newStyle, setNewStyle] = useState(false);

    const showForm = () => {
        setNewStyle(true);
    }
    const hideForm = () => {
        setNewStyle(false)
    }

    return (
        <StyleContext.Provider value={
            {
                newStyle,
                showForm,
                hideForm,
            }
        }>
            {children}
        </StyleContext.Provider>
    )
}

export default StyleContext;