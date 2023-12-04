const { useContext } = require("react")
const { AuthContext } = require("../context/AuthContext")

const useAuth = () => {
    const auth = useContext(AuthContext)
    const isClient = typeof window !== "undefined"
    if (!isClient && !auth) {
        return {}
    }
    if (!auth) {
        throw new Error(
            "You must wrap your application"
        )

    }
    return auth;
}

export default useAuth;