import Login from '../components/Login'
import PropTypes from 'prop-types'

const LoginScreen = ({ setUserType }) => {
    return (
        <main>
            <section className="container-desarrollo container-md bg-white py-5">
                <h2>Inicio Sesión</h2>
                <Login setUserType={setUserType}/>
            </section>
        </main>
    )
}

LoginScreen.propTypes = {
    setUserType: PropTypes.func
}

export default LoginScreen