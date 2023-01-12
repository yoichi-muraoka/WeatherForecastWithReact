import { createContext, useContext, useState } from "react"

const AreaContext = createContext();

const AreaContextProvider = ({children}) => {
    
    const areas = [
        { name: '札幌', id: '016010' },
        { name: '仙台', id: '040010' },
        { name: '東京', id: '130010' },
        { name: '大阪', id: '270000' },
        { name: '福岡', id: '400010' },
        { name: '那覇', id: '471010' }
    ];

    const defaultArea = { name: '東京', id: '130010' };

    const [selectedArea, setSelectedArea] = useState(defaultArea);

    return (
        <AreaContext.Provider value={{areas, defaultArea, selectedArea, setSelectedArea}}>
            {children}
        </AreaContext.Provider>
    )

}

const useAreaContext = () => useContext(AreaContext);

export { AreaContextProvider, useAreaContext };