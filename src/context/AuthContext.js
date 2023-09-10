import { createContext, useReducer, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sensor, setSensor] = useState(false)
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'LOGIN', payload: user })
    }
  }, [])

  // console.log('AuthContext state:', state)
  const language = [{ id: 0, label: "UZB" }, { id: 1, label: "RUS" }, { id: 2, label: "ENG" }, { id: 3, label: "ARAB" }];

  const [selectedItem, setSelectedItem] = useState(language[1]);

  useEffect(() => {
    const getLang = () => {
      let lg = window.localStorage.getItem("i18nextLng")
      if (selectedItem.label !== lg) {
        let lan = language.find(li => li.label === lg)
        setSelectedItem(lan)
      }
      console.log("lang:", lg)

    }
    getLang()
  }, [])

  let data = {
    ...state, dispatch, isLoading, setIsLoading, sensor, setSensor, language, setSelectedItem, selectedItem
  }
  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )

}