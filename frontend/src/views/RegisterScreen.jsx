import Register from '../components/Register'
import Navbar from '../components/Navbar'

const RegisterScreen = () => {
    return (
        <main>
            <Navbar />
            <section className="container-desarrollo container-md bg-white py-5">
                <h2>Registrate</h2>
                <Register />
            </section>
        </main>
    )
}

export default RegisterScreen
